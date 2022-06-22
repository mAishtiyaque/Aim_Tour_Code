from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base
Base = declarative_base()
#app=Flask('Flask API')
#db = SQLAlchemy(app)

class Users(Base):
    __tablename__ = 'users'
    userid = Column(String,primary_key=True)
    passw = Column(String)
    fname = Column(String)
    lname = Column(String)

    def __init__(self,userid,passw,fname,lname):
        super().__init__()
        self.userid=userid
        self.passw=passw
        self.fname=fname
        self.lname=lname
    
    def serialize(self):
        return {'userid':self.userid,'passw':self.passw,'fname':self.fname,
                'lname':self.lname}

class Userdata(Base):
    __tablename__ = 'userdata'
    userid = Column(String,primary_key=True)
    textid = Column(Integer,primary_key=True)
    rtext = Column(String)

    def __init__(self,userid,textid,rtext):
        super().__init__()
        self.userid=userid
        self.textid=textid
        self.rtext=rtext
    
    def serialize(self):
        return [self.rtext,self.textid]

class Tokens(Base):
    __tablename__ = 'tokens'
    userid = Column(String,primary_key=True)
    token = Column(String,primary_key=True)

    def __init__(self,userid,token):
        super().__init__()
        self.userid=userid
        self.token=token
    def __repr__(self):
        return '<Token {}>'.format(self.userid)
    
    def serialize(self):
        return {'userid':self.userid,'token':self.token}
"""
class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    author = db.Column(db.String())
    published = db.Column(db.String())

    def __init__(self, name, author, published):
        self.name = name
        self.author = author
        self.published = published
    
    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id, 
            'name': self.name,
            'author': self.author,
            'published':self.published
    }
"""
