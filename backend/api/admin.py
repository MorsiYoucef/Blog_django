from django.contrib import admin

# Register your models here.
from api import models as api_models

#This code is used to register your Django models with the Django admin site, enabling you to manage these models (create, update, delete, or view instances of the models)

admin.site.register(api_models.User)
admin.site.register(api_models.Profile)
admin.site.register(api_models.Category)
admin.site.register(api_models.Post)
admin.site.register(api_models.Comment)
admin.site.register(api_models.Notification)
admin.site.register(api_models.BookMark)


