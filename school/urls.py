from rest_framework import routers
from .api import SchoolViewSet, TeachersViewSet, StudentsViewSet

router = routers.DefaultRouter()
router.register('api/school', SchoolViewSet, 'school')
router.register('api/teachers', TeachersViewSet, 'teachers')
router.register('api/students', StudentsViewSet, 'students')

urlpatterns = router.urls