from rest_framework.response import Response
from .models import Meal, Fast
def parse_repeat_days(data):
    repeat_days = data.get('repeatDays')
    if repeat_days:
        week_days_order = {'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7}
        return ','.join(sorted(repeat_days, key=lambda day: week_days_order[day]))
    return None

def get_object_and_check_permission(model, user, object_id):
    obj = model.objects.get(pk=object_id)
    if obj.user != user:
        raise PermissionDenied
    return obj

    return Response(serializer.data)
    meal = get_object_and_check_permission(Meal, request.user, meal_id)
    return Response(serializer.data)
    data = request.data
    data['repeat_days'] = parse_repeat_days(data)
    data['meal_id'] = str(uuid.uuid4())
    serializer = MealSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
    meal = get_object_and_check_permission(Meal, request.user, meal_id)
    serializer = MealSerializer(meal, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_meal(request, meal_id):
    meal = get_object_and_check_permission(Meal, request.user, meal_id)
    return Response(status=status.HTTP_204_NO_CONTENT)
    data = request.data
    data['repeat_days'] = parse_repeat_days(data)
    data['fast_id'] = str(uuid.uuid4())
    serializer = FastSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)