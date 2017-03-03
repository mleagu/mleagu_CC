import { Injectable, Inject }     from '@angular/core';
import { APP_CONSTANTS, IAppConstants } from '../app.constants';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProtoService {
  protected model : {};
  protected url: string;

  constructor(@Inject(APP_CONSTANTS) private constants: IAppConstants, private http: Http) {
  }

  get(id?: Number) {
    this.url = id ? this.url.concat('/', id.toString()): this.url;
    return this.http.get(this.constants.apiEndpoint.concat(this.url))
      // ...and calling .json() on the response to return data
      .map((res:Response) => this.parse(res.json()), false)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  create(obj:Object) : Observable<{}> {
    return this.http.post(this.constants.apiEndpoint.concat(this.url), this.parse(obj, true)).map((res:Response) =>
      res.json()
    )
    .catch((error:any):any => {
      Observable.throw(error.json().error || 'Server error');
    });
  }

  private parse(obj: any, reverse?: boolean): any {
    if (Array.isArray(obj)) {
      obj.forEach(item => {
        this.loopParser(item, reverse);
      });

    } else {
      this.loopParser(obj, reverse);
    }
    return obj
  }
  private loopParser(item: any, reverse?: boolean):any {
    for (let property in this.model) {
      if (this.model.hasOwnProperty(property) && property !== this.model[property]) {
        if (!reverse) {
          console.log(property);
          item[property] = item[this.model[property]];
          delete item[this.model[property]];
        }
        else {
          console.log(property);
          let index = Object.keys(this.model).indexOf(this.model[property]);
          console.log(index);
          item[Object.keys(this.model)[index]] = item[this.model[property]];
          //delete item[this.model[property]];
        }
      }
    }
    return item
  }

}