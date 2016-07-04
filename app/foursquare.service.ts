import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Item }           from './foursquare-item';

@Injectable()
export class FoursquareService {
  constructor (private http: Http) {}

  getMockedItems() : Observable<Item>{
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

  searchItems(term: string): Observable<Item>{
    let baseUrl = 'https://api.foursquare.com/v2/venues/explore';
    let params = new URLSearchParams();
    params.set('near', term);
    params.set('client_id', '[CLIENT_ID]');
    params.set('client_secret', '[CLIENT_SECRET]');
    params.set('venuePhotos','true');
    params.set('v', '20160705');

    return this.http.get(baseUrl, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

