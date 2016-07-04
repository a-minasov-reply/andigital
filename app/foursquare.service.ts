import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class FoursquareService {
  constructor (private http: Http) {}

  getMockedItems() : Observable<any>{
    console.log('getting mocked items');
    let url = 'app/foursquare-mock.json';
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body.response.groups[0].items);
    return body.response.groups[0].items || {};
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

