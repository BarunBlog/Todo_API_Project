from rest_framework import generics

from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

class ListTodo(generics.ListAPIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'todos/listview.html'

    def get(self, request):

        queryset = Todo.objects.all()
        return Response({'todos': queryset})

class DetailTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer



