
from django.contrib import admin
from django.urls import path
from contacts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload/', views.upload_product, name='upload_product'),

]
