
from django.shortcuts import render
from django.http import HttpResponse
from chatBackend.chat import chat
from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth

import speech_recognition as sr


# Create your views here.

class mainpage(TemplateView):
    Template_view = "index.html"

    def get(self, request):
        return render(request, self.Template_view)

    def post(self, request):
        if request.method == 'POST':
            user_message = request.POST.get('input', False)
            context = {"user_message": user_message, "bot": chat(request)}

        return render(request, self.Template_view, context)


# Register/Login function se redirect hona hai main page pe.
def index(request):
    return render(request, 'index.html')


def detail(request):
    return render(request, 'details.html')


def map(request):
    return render(request, 'map.html')

def upload(request):
    return render(request, 'upload.html')
'''
def detail(request):
		return render(request,'details.html')
'''

def profile1(request):
    return render(request, 'profile1.html')

def profile2(request):
    return render(request, 'profile2.html')

def GovtScheme(request):
    return render(request, 'GovtScheme.html')

def directory(request):
    return render(request, 'directory.html')

# Create your views here.
def home(request):
    return render(request, 'home.html')


def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        # last_name = request.POST['last_name']
        # username = request.POST['username']
        email = request.POST['email']
        # dob = request.POST['dob']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password == confirm_password:
            return redirect(register)
        else:
            messages.info(request, 'Both passwords are not matching')
            return redirect(register)
    else:
        print("no post method")
        return render(request, 'register.html')


def login_user(request):
    if request.method == 'POST':
        email = request.POST['email']
        print(email)
        password = request.POST['password']
        print(password)
        user = auth.authenticate(email=email, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect(index)
        else:
            messages.info(request, 'Invalid Username or Password')
            return redirect('login_user')
    else:
        return render(request, 'login.html')


def logout_user(request):
    auth.logout(request)
    return redirect(index)
    # return render(request, 'index.html')


def map(request):
    return render(request, 'map.html')

def voice(request):
     if request.method == "POST":
          # value=request.POST.get('vr2')
          r = sr.Recognizer()
          while(1):   
               try:
                    with sr.Microphone() as source2:
                         # r.adjust_for_ambient_noise(source2, duration=0.2)
                         audio2 = r.listen(source2)
                         MyText = r.recognize_google(audio2)
                         MyText = MyText.lower()
                         # return HttpResponse(MyText)
                         if (MyText.find('plant') != -1 or MyText.find('paudha') != -1 or MyText.find('paudhe') != -1 or MyText.find('fasal') != -1):
                              return redirect('upload')
                         elif(MyText.find('login') != -1):
                              return redirect('login_user')
                         elif(MyText.find('sign up') != -1):
                              return redirect('register')
                         elif(MyText.find('home') != -1):
                              return redirect('home')
                         elif(MyText.find('map') != -1 or MyText.find('naksha') !=-1):
                              return redirect('map')
                         elif(MyText.find('Tanish') != -1 or MyText.find('sanskar') !=-1):
                              return redirect('https://github.com/TanZeus')
                         elif(MyText.find('weather') != -1 or MyText.find('mausam') !=-1):
                              return redirect('weather')
                         elif(MyText.find('forum') != -1 or MyText.find('sampark') !=-1):
                              return redirect('https://www.epizy.com/')
               except sr.RequestError as e:
                    print("Could not request results; {0}".format(e))
         
               except sr.UnknownValueError:
                    print("unknown error occured")





from .connection import *
# Create your views here.
def profile(request):
    if request.method == 'POST':
        con=sql_connection()
        mycursor = con.cursor()
        email = request.POST.get('email')
        name = request.POST.get('name')
        phonenumber = request.POST.get('phoneno')
        town = request.POST.get('town')
        district = request.POST.get('district')
        state = request.POST.get('state')
        country = request.POST.get('country')
        pincode = request.POST.get('pincode')
        aadhar = request.POST.get('Aadhar')
        mycursor.execute("CREATE TABLE if not exists farmer_profile (email varchar(50) NOT NULL,name varchar(100) DEFAULT NULL,phonenumber varchar(12) DEFAULT NULL,town varchar(200) DEFAULT NULL,district varchar(100) DEFAULT NULL,state varchar(100) DEFAULT NULL,country varchar(100) DEFAULT NULL,pincode int DEFAULT NULL,aadhar varchar(12) DEFAULT NULL,PRIMARY KEY (email))")
        mycursor.execute("CREATE TABLE if not exists farmer_land(email varchar(100) DEFAULT NULL,landarea float DEFAULT NULL,adress varchar(200) DEFAULT NULL,income int DEFAULT NULL,cropname varchar(200) DEFAULT NULL,grownfrom date DEFAULT NULL,grownuntill date DEFAULT NULL,KEY email (email),CONSTRAINT farmer_land_ibfk_1 FOREIGN KEY (email) REFERENCES farmer_profile (email))")
        tables = mycursor.fetchall()

        querry="insert into farmer_profile values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        data=[email,name,phonenumber,town,district,state,country,pincode,aadhar]
        mycursor.execute(querry,data)
        mycursor.close()
        con.commit()

        return render(request,'profile2.html')
    else:
        return render(request, 'profile1.html')

def land_profile(request):
    if request.method == 'POST':
        con=sql_connection()
        mycursor = con.cursor()
        email = request.POST.get('ownername')
        landarea = request.POST.get('landarea')
        adress = request.POST.get('address')
        income = request.POST.get('income')
        cropname = request.POST.get('cropname')
        grownfrom = request.POST.get('growStart')
        grownuntill = request.POST.get('growUntil')


        querry="insert into farmer_land values(%s,%s,%s,%s,%s,%s,%s)"
        data=[email,landarea,adress,income,cropname,grownfrom,grownuntill]
        mycursor.execute(querry,data)
        mycursor.close()
        con.commit()

        return redirect(home)
    else:
        return render(request, 'profile2.html')    
