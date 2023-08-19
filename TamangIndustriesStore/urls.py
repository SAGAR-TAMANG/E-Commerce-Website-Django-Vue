from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiv1', include('djoser.urls')),
    path('apiv2', include('djoser.urls.authtoken')),
]
