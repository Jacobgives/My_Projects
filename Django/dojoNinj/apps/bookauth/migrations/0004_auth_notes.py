# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookauth', '0003_auto_20171019_2126'),
    ]

    operations = [
        migrations.AddField(
            model_name='auth',
            name='notes',
            field=models.TextField(default='This is a swell and neat author'),
        ),
    ]
