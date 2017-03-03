import { Injectable, Inject }     from '@angular/core';
import { ProtoService } from '../proto.service';


@Injectable()
export class BetsService extends ProtoService {
    model: {} = {
      id: 'id',
      amount : 'amount',
      applyPartial: 'apply_partial',
      category: 'category__name',
      owner: 'owner__username',
      title: 'title',
      description: 'description'
    };
    public url: string = 'bets';
}