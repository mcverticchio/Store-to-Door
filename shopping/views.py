from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import TemplateView
from django.views.generic.edit import CreateView

from shopping.models import Account, Cart, Item, CartItem
from rest_framework.generics import ListCreateAPIView, CreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from shopping.serializers import UserSerializer, AccountSerializer, CartSerializer, ItemSerializer, CartItemSerializer

from rest_framework.permissions import IsAuthenticated

import requests


# Create your views here.


class IndexView(TemplateView):
    template_name = 'index.html'


class UserCreateView(CreateView):
    model = User
    form_class = UserCreationForm
    success_url = "/"


class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AccountDetailUpdateAPIView(RetrieveUpdateAPIView):
    # queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = (IsAuthenticated, )

    def get_object(self):
        return Account.objects.get(user=self.request.user)

    def get_queryset(self):
        return Account.objects.filter(user=self.request.user)


class CartListCreateAPIView(ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    # def get_queryset(self):
    #     return Cart.objects.filter(user=self.request.user)


class CartItemListCreateAPIView(ListCreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer


class CartItemDetailDestroyView(RetrieveDestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer


class ItemListCreateAPIView(ListCreateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer


def get_response():
    r = requests.get("http://swapi.co/api/starships/9/")
    ships = r.json()
    results_list = ships['name']
    return results_list


# view for api call
class ApiTestView(APIView):
    template_name = 'test.html'

    import os
    api_key = os.environ.get('api_key')
    print(api_key)

    def get(self, request):
        r = requests.get('http://swapi.co/api/starships/9/')
        ships = r.json()
        ships_list = {'ships': ships['name']}
        print(ships_list)
        return Response(ships_list)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        r = requests.get('http://swapi.co/api/starships/9/')
        ships = r.json()
        context['ship_list'] = ships
        context['testing'] = self.request.user
        return context

    # def get_context_data(self):
    #     context = self.request

# def get_response():
#     r = requests.get("http://swapi.co/api/starships/9/")
#     ships = r.json()
#     results_list = ships['length']
#     print(results_list)

    # def get(self, request):
    #     new_list = get_response()
    #     return render(request, 'index.html', new_list)

    # def get(self, request):
    #     new = get_response('1990', 'death star')
    #     return render(request, 'index.html', results_list)

    # def get(self, request):
    #     results_list = get_response('1990', 'death star')
    #     return render(request, 'index.html', results_list)
