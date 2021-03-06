# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-16 19:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0006_auto_20161115_2201'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RenameModel(
            old_name='List',
            new_name='Cart',
        ),
        migrations.RemoveField(
            model_name='listitem',
            name='item',
        ),
        migrations.RemoveField(
            model_name='listitem',
            name='list',
        ),
        migrations.DeleteModel(
            name='ListItem',
        ),
        migrations.AddField(
            model_name='cartitem',
            name='cart',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shopping.Cart'),
        ),
        migrations.AddField(
            model_name='cartitem',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shopping.Item'),
        ),
    ]
