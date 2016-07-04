import { Component } from '@angular/core';
import { FoursquareListComponent } from './foursquare-list.component';

import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: '<foursquare-list></foursquare-list>',
    directives: [FoursquareListComponent],
})
export class AppComponent { }
