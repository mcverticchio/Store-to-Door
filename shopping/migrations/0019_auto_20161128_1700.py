# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-28 17:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0018_auto_20161128_1501'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='name',
            field=models.CharField(max_length=300),
        ),
    ]
