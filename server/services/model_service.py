from server.bets.models import BetModel, BetsCategoriesModel


class BetService:

    def __init__(self):
        self.model = BetModel.objects.values('id', 'title', 'amount', 'category__name', 'apply_partial', 'owner__username')