# Generated by Django 4.2.13 on 2024-08-12 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_profilesave_langchainkey'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ProfileSave',
        ),
        migrations.AddField(
            model_name='customprofile',
            name='langchainkey',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
    ]