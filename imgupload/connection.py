import mysql.connector

def sql_connection():
    mydb = mysql.connector.connect(
        host="localhost",
        user="db_root",
        passwd="krishi",
        database="krishi",
        port="3300"
    )
    print("Connection Successful")
    return mydb

def tables():
    con=sql_connection()
    mycursor = con.cursor()
    mycursor.execute("create table if not exists plant(plant varchar(50), D1 varchar(20),percentage float , location varchar(50) , uploaddate datetime)")
    tables = mycursor.fetchall()
    return tables
