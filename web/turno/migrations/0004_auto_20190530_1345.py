# Generated by Django 2.1 on 2019-05-30 16:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('turno', '0003_auto_20190530_1305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detalleturno',
            name='ejemplar',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stock.Ejemplar'),
        ),
    ]
