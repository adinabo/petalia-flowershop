# Generated by Django 5.1.2 on 2024-11-25 17:44

import django_countries.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0002_remove_orderlineitem_product_size_order_original_bag_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='country',
            field=django_countries.fields.CountryField(max_length=2),
        ),
    ]
