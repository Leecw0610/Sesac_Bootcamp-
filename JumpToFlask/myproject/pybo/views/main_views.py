from ..db import db
from flask import Blueprint, render_template, redirect, url_for

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index():
	return redirect(url_for('question._list'))


@bp.route('/answer/')
def answer_List():
	cursor = db.cursor()
	sql = "SELECT * FROM answer;"
	cursor.execute(sql)
	answer_list = cursor.fetchall()
	return render_template('answer/answer_list.html',answer_list = answer_list)

