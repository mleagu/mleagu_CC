from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize
from server.account.models import UserModel
from rest_framework.views import APIView
import json
from server.services.web_services import format_response


class Accounts(APIView):

    def get(self, request):
        users = UserModel.objects.values('username', 'email', 'first_name', 'amount', 'active', 'last_name').filter()
        return format_response(users, 'to camelcase')
