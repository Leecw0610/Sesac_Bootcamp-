from pymysql import cursors, connect

db = connect(host='localhost',
            user='root',
            password='qhdkscjfwj0!',
            database='pybo',
            cursorclass=cursors.DictCursor)