import { Injectable, Inject }     from '@angular/core';
import { APP_CONSTANTS, IAppConstants } from '../../app.constants';
import { User } from '../../models/user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersServices {

     constructor (@Inject(APP_CONSTANTS) private constants: IAppConstants, private http: Http) {
     }

    get() : Observable<User[]> {

         // ...using get request
         return this.http.get(this.constants.apiEndpoint.concat('accounts/users'))
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}