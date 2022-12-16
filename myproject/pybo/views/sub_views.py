#127.0.0.1:5000/admin/ => 'HELLO'
#127.0.0.1:5000/admin/aaa => 'This is aaa'
#127.0.0.1:5000/admin/bbb=> 'This is bbb'
from flask import Blueprint

bp = Blueprint('sub', __name__, url_prefix='/admin')

@bp.route('/')
def hello_pybo1():
	return 'HELLO'

@bp.route('/aaa')
def hello_pybo2():
	return 'This is aaa!'

@bp.route('/bbb')
def hello_pybo3():
	return 'This is bbb'