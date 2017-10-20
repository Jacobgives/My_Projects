# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookauth', '0002_auto_20171019_2123'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='books',
        ),
        migrations.AddField(
            model_name='book',
            name='authors',
            field=models.ManyToManyField(related_name='books', to='bookauth.Auth'),
        ),
    ]
