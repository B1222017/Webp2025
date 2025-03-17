from django.db import models

# Create your models here.

class Course(models.Model):
    department = models.CharField(max_length=100)  # 開課單位
    course_title = models.CharField(max_length=200)  # 課程名稱
    instructor = models.CharField(max_length=100)  # 授課老師

    def __str__(self):
        return self.course_title
