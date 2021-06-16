from django import forms

from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            'title',
            'description',
            'price'
        ]

class RawProductForm(forms.Form):
    title       = forms.CharField(required=True)
    description = forms.CharField(label='ffdfd')
    price       = forms.DecimalField(initial=199.99)