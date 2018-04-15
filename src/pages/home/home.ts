import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookProvider } from './../../providers/book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  query: string;
  books = [];

  constructor(public navCtrl: NavController, private bookProvider: BookProvider) {

  }

  search(event) {
    this.bookProvider.get(this.query).subscribe(request => {
      this.books = JSON.parse(request['_body']).items;
    });
  }

}
