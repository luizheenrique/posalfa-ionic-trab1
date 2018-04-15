import { Http } from "@angular/http";
import { Injectable } from '@angular/core';

/*
  Generated class for the BookProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  url = "https://www.googleapis.com/books/v1/volumes?q=";

  constructor(public http: Http) {

  }

  get(query) {
    return this.http.get(this.url + query);
  }

}