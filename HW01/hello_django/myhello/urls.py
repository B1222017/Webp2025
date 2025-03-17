from django.urls import path
from .views import course_list, add_course, delete_course

urlpatterns = [
    path('courselist/', course_list, name='course-list'),  # 注意結尾的 '/'
    path('addcourse/', add_course, name='add-course'),
    path('deletecourse/',delete_course, name='delete-course'),
]
