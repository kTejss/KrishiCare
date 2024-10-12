
from .views import mainpage
from django.urls import path,include
from . import views
from .views import *

urlpatterns = [
    # path(' ', mainpage.as_view(), name="index"),
    path('home', index, name="index"),
    path('home', home, name="home"),
    path('map', views.map, name='map'),
    # path('login', views.login, name='login'),
    # path('detail', views.detail, name='detail'),
    path("register", register, name="register"),
    path("login_user", login_user, name="login_user"),
    path("logout_user", logout_user, name="logout_user"),
    path('vr', voice, name='voice'),
    path("profile1", profile, name="profile1"),
    path("profile2", land_profile, name="profile2"),
    path("GovtScheme", GovtScheme, name="GovtScheme"),
    path("directory", directory, name="Directory"), 
]

