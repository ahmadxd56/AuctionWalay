from django.db import models

# Create your models here.
class Payments(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add =True)
    amount = models.IntegerField()
    status = models.CharField(max_length = 10)


class Car(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add =True)
    mileage = models.IntegerField()
    make_year = models.IntegerField()
    mileage = models.IntegerField()
    status = models.CharField(max_length = 10)
