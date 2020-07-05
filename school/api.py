from school.models import School, Teachers, Students
from rest_framework import viewsets, permissions
from .serializers import SchoolSerializer, TeachersSerializer, StudentsSerializer

#school viewSet
class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = SchoolSerializer

class TeachersViewSet(viewsets.ModelViewSet):
    queryset = Teachers.objects.all()

    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = TeachersSerializer

class StudentsViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = StudentsSerializer