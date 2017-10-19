from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),     # This line has changed!
    url(r'^blog/', views.new),
    url(r'^create/', views.create),
    url(r'^(?P<id>\d+)$', views.show),
    url(r'^(?P<id>\d+)/edit', views.edit),
    url(r'^(?P<id>\d+)/delete', views.destroy)
    ]
