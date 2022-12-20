from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_pybo():
    return 'Hello, Pybo!'


from db import db
from datetime import datetime

for i in range(1,301):
    sql = "insert into question (subject, content, create_date) values '{}','{}','{}')".format(i,i,datetime.now())
	cursor.execute(sql)

db.commit();
