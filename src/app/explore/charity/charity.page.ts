import { Component} from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Items } from './model/items';
import { Item } from './model/item';

@Component({
  selector: 'app-explore-charity',
  templateUrl: 'charity.page.html'
})
export class CharityPage {
    currentItems: Item[];
    searchTerm: string = '';

    constructor(public navCtrl: NavController, public items: Items) {
        this.initialize(items);
    }
    
    initialize(items: Items) {
       this.currentItems = this.items.query(); 
    }
    
    searchItem(event) {
        let val = event.target.value;
        if(!val || !val.trim()) {
          this.currentItems = [];
          return;
        }
        this.currentItems = this.items.query({
          name: val
        });      
    }
    
    republish(event) {
        this.initialize(this.items);
    }
}
