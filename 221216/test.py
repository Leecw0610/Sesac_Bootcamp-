import pymysql.cursors

print("AAA")

from pymysql import cursors, connect

db =connect(host='localhost',
            user='root',
            password='qhdkscjfwj0!',
            database='test')

cursor = db.cursor()
sql = "SELECT * FROM test1;"

cursor.execute(sql)
result = cursor.fetchall();
print(result)

# Create a new record
sql = "INSERT INTO `test1` (`ID`, `Name`, `Address`,`Age`) VALUES (855, 'vv','cc',5)"

result= cursor.execute(sql)
db.commit()
print(result)