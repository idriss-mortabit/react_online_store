# Generated by Django 2.1 on 2018-12-26 09:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboardviews', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'order', 'verbose_name_plural': 'orders'},
        ),
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='dashboardviews.Product', verbose_name='product'),
            preserve_default=False,
        ),
    ]