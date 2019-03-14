# Generated by Django 2.1.7 on 2019-03-11 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lecture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_number', models.IntegerField()),
                ('lecture_number', models.IntegerField()),
                ('text', models.TextField()),
                ('expected_time', models.IntegerField()),
            ],
            options={
                'ordering': ('lesson_number', 'lecture_number'),
            },
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_number', models.IntegerField(default=0)),
                ('title', models.CharField(max_length=100)),
                ('rating', models.FloatField(default=5)),
                ('rating_count', models.IntegerField(default=0)),
                ('students_count', models.IntegerField(default=0)),
                ('lectures_count', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ('lesson_number',),
            },
        ),
    ]