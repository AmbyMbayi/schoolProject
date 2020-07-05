from  rest_framework import serializers
from school.models import School, Students, Teachers

#school serializer
class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'

class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = '__all__'

class StudentsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Students
        fields = '__all__'

