from django.db import models


class TeamModel(models.Model):

    name = models.CharField(max_length=60)
    velocity = models.IntegerField(default=0)

    def __str__(self):
        return 'Team - {}'.format(self.name)


class UserModel(models.Model):

    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=120, unique=True)
    full_name = models.CharField(max_length=100, null=True, blank=True, default='')
    team = models.ForeignKey(TeamModel)

    class Meta:
        verbose_name_plural = "Users"

    def __str__(self):
        return 'User - {}'.format(self.username)
