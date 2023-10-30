# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Board(models.Model):
    board_id = models.IntegerField(primary_key=True)
    board_name = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('User', models.DO_NOTHING, db_column='created_by', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'board'


class Card(models.Model):
    card_id = models.IntegerField(primary_key=True)
    card_name = models.CharField(max_length=255, blank=True, null=True)
    task_name = models.CharField(max_length=255, blank=True, null=True)
    task_type = models.CharField(max_length=255, blank=True, null=True)
    priority = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    reporter = models.ForeignKey('User', models.DO_NOTHING, db_column='reporter', blank=True, null=True)
    assignee = models.ForeignKey('User', models.DO_NOTHING, db_column='assignee', related_name='card_assignee_set', blank=True, null=True)
    acceptance_criteria = models.TextField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    due_date = models.DateField(blank=True, null=True)
    column = models.ForeignKey('List', models.DO_NOTHING, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'card'


class Comment(models.Model):
    comment_id = models.IntegerField(primary_key=True)
    card = models.ForeignKey(Card, models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
    comment_text = models.TextField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'comment'


class List(models.Model):
    column_id = models.IntegerField(primary_key=True)
    column_name = models.CharField(max_length=255, blank=True, null=True)
    board = models.ForeignKey(Board, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'list'


class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'user'
