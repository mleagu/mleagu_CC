from django.contrib import admin
from server.account.models import *


class UserAdmin(admin.ModelAdmin):
    pass
admin.site.register(UserModel, UserAdmin)