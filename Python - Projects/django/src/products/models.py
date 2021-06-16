from django.db import models

# Create your models here.
class Product(models.Model):
    title       = models.CharField(max_length=120) # max_length = required
    description = models.TextField(blank=True,null=True)
    price       = models.DecimalField(decimal_places=2,max_digits=10000)
    summary     = models.TextField(blank=False,null=False)
    featured    = models.BooleanField(default=True) # Will be asked on terminal for older value to what to do with them, presing one and selecting it to either true or false will change the older products
    