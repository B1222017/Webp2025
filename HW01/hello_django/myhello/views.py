from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
import logging
from .models import Course  # 匯入 Course 模型

logger = logging.getLogger('django')


# 取得課程列表
@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all().values()
    return JsonResponse(list(courses), safe=False)

# 新增課程
@api_view(['POST'])
def add_course(request):
    department = request.data.get('department', '')  # 從 POST 請求中取得資料
    course_title = request.data.get('course_title', '')
    instructor = request.data.get('instructor', '')

    if not department or not course_title or not instructor:
        return Response({"error": "Missing required fields"}, status=status.HTTP_400_BAD_REQUEST)

    new_course = Course(department=department, course_title=course_title, instructor=instructor)
    new_course.save()

    logger.debug(f"新增課程: {course_title}")
    return Response({"message": f"{course_title} 已加入!"}, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
def delete_course(request):
    course_title = request.data.get('course_title', None)
    instructor = request.data.get('instructor', None)

    if course_title and instructor:
        deleted_count, _ = Course.objects.filter(course_title=course_title, instructor=instructor).delete()
        if deleted_count > 0:
            return Response({"message": f"課程 '{course_title}' (教師: {instructor}) 已刪除"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "找不到對應的課程"}, status=status.HTTP_404_NOT_FOUND)

    return Response({"error": "請提供課程名稱和授課教師"}, status=status.HTTP_400_BAD_REQUEST)
