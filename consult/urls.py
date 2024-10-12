from django.urls import path
from . import views

urlpatterns = [
    path('consult', views.chat, name='chat'), 
    path('consult/ask_question/', views.ask_question, name='ask_question')
]
