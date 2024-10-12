
from . import views
from django.urls import include, path

urlpatterns = [
    path('imageprocess',views.imageprocess,name='imageprocess'),
    path('imgupload', views.imgupload, name='upload'),
    path('report', views.report, name='report'),   
]