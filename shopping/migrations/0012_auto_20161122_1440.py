# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-22 14:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0011_auto_20161121_1638'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='complete',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='cart',
            name='pending',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
