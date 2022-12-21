# 인증화면 view

from flask import Blueprint, url_for, render_template, flash, request, session, g
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import redirect

import functools
from ..db import db
from pybo.forms import UserCreateForm, UserLoginForm

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/signup/', methods=('GET', 'POST'))
def signup():
    form = UserCreateForm() #userform에서 불러옴
    cursor = db.cursor()
    if request.method == 'POST' and form.validate_on_submit():
        
        
        sql = "select * from user where username='{}'".format(form.username.data)
        cursor.execute(sql)
        user = cursor.fetchone()
        # ---- ID 조회 ---#
        if not user:
            sql = "insert into user (username, password, email) values ('{}','{}','{}');".format(form.username.data, generate_password_hash(form.password1.data), form.email.data)
            # 사용자 password를 평문이 아닌 hash처리해서 보여줌!
            cursor.execute(sql)
            db.commit()
            # database에 commit!
            return redirect(url_for('main.index'))
        
        
        else:
            flash('이미 존재하는 사용자입니다.')
            # 회원가입하는 쪽에 error 메시지로 출력
            
            
            #가입 요청이 get으로 들어오면 return으로 바로옴 (위의 if문은 post요청)
    return render_template('auth/signup.html', form=form)


@bp.route('/login/', methods=('GET', 'POST'))
def login():
    form = UserLoginForm()
    cursor = db.cursor()
    if request.method == 'POST' and form.validate_on_submit():
        error = None
        sql = "select * from user where username='{}'".format(form.username.data)
        cursor.execute(sql)
        user = cursor.fetchone()
        if not user: #user가 없을 때,
            error = "존재하지 않는 사용자입니다."
        elif not check_password_hash(user['password'], form.password.data):
            # (db에 존재한 user 패스워드와 입력받은 패스워드의 비교)
            error = "비밀번호가 올바르지 않습니다."
        if error is None:
            session.clear()
            session['user_id'] = user['id']
            session['username'] = user['username']
            return redirect(url_for('main.index'))
        # session을 발급하여 user의 id값과 username을 담아둠. ; 로그인 권한이 필요한 페이지에서 session key가 전달, 권한 인정 (session은 서버에서 관리 후 파기)
        
        flash(error)
    return render_template('auth/login.html', form=form)



@bp.before_app_request
def load_logged_in_user():
    user_id = session.get('user_id')
    if user_id is None:
        g.user = None # 전역객체인 g.user에 담음
    else:
        g.user = {'user_id': session.get('user_id'), 'username': session['username']}
        print(g.user)



@bp.route('/logout/')
def logout():
    session.clear()
    return redirect(url_for('main.index'))