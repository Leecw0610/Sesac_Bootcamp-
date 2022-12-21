from ..db import db
from datetime import datetime
from flask import Blueprint, render_template, url_for, redirect, request, g
from ..forms import AnswerForm

bp = Blueprint('answer', __name__, url_prefix='/answer')

@bp.route('/create/<int:question_id>', methods=('POST',))
def create(question_id):
    
    if g.user is None:
        return redirect(url_for('auth.login'))
    
    form = AnswerForm()
    if form.validate_on_submit():
        cursor = db.cursor()
        content = request.form['content']
        sql = "insert into answer (question_id, content, create_date, user_id) values ({},'{}','{}',{})".format(question_id, content, datetime.now(), g.user['user_id'])
        cursor.execute(sql)
        db.commit()
        
        return redirect(url_for('question.detail', question_id=question_id))
    
        
    cursor = db.cursor()
    sql = 'SELECT * FROM question WHERE id={};'.format(question_id)
    cursor.execute(sql)
    question = cursor.fetchone()
    
    sql = 'SELECT * FROM answer WHERE question_id={}'.format(question_id)
    cursor.execute(sql)
    answer_set = cursor.fetchall()
    
    
    return render_template('question/question_detail.html', question=question, form=form, answer_set=answer_set)




@bp.route('/modify/<int:answer_id>', methods=('GET', 'POST'))
def modify(answer_id):
    cursor = db.cursor()
    sql = "SELECT * FROM answer WHERE id = {}".format(answer_id)
    cursor.execute(sql)
    answer = cursor.fetchone()
    if g.user['user_id'] != answer['user_id']:
        flash('수정권한이 없습니다')
        return redirect(url_for('question.detail', question_id=answer.question.id))
    if request.method == "POST":
        form = AnswerForm()
        if form.validate_on_submit():
            cursor = db.cursor()
            sql = "update answer set content='{}', modify_date='{}' where id={};".format(form.content.data, datetime.now(), answer_id) 
            cursor.execute(sql)
            db.commit()
            return redirect(url_for('question.detail', question_id=answer['question_id']))
    else:
        form = AnswerForm(content=answer['content'])
    return render_template('answer/answer_form.html', form=form)



@bp.route('/delete/<int:answer_id>')
def delete(answer_id):
    cursor = db.cursor()
    sql = "SELECT * FROM answer WHERE id = {}".format(answer_id)
    cursor.execute(sql)
    answer = cursor.fetchone()
    question_id = answer['question_id']
    if g.user['user_id'] != answer['user_id']:
        flash('삭제권한이 없습니다')
    else:
        sql = "delete from answer where id={}".format(answer_id)
        cursor.execute(sql)
        db.commit()
    return redirect(url_for('question.detail', question_id=question_id))