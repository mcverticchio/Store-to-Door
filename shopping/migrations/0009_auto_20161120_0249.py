# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-20 02:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0008_auto_20161117_2023'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='user_type',
            field=models.CharField(choices=[('c', 'Customer'), ('', 'Driver')], default=1, max_length=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='account',
            name='adress',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]