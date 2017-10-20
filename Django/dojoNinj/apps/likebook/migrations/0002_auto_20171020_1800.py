# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('likebook', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='Uploaded_by_id',
            field=models.ForeignKey(related_name='uploader', to='likebook.User'),
        ),
    ]
