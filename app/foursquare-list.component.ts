import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoursquareService } from './foursquare.service';
import { Item } from './foursquare-item';

@Component({
  selector: 'foursquare-list',
  templateUrl: 'app/foursquare-list.component.html',
  providers: [ FoursquareService ]
})

export class FoursquareListComponent{
  errorMessage: any;
  items : Item;

  constructor (private foursquareService: FoursquareService) {}

  searchItems(term: string){
    console.log('searching');
    this.foursquareService.searchItems(term)
      .subscribe(
      items => this.items = items,
      error =>  this.errorMessage = <any>error,
      () => console.log('done')
    );
  }
}
