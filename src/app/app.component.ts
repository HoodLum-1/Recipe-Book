import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDTzPRmdGUtMsjB6ygHtqgl1z7Nk853apY",
      authDomain: "ng-recipe-book-2f9d4.firebaseapp.com",
      // databaseURL: "ng-recipe-book-2f9d4.firebaseio.com",
      // projectId: "ng-recipe-book-2f9d4",
      // storageBucket: "ng-recipe-book-2f9d4.appspot.com",
      // messagingSenderId: "972666164363",
      // appId: "1:972666164363:web:22c77bb9541b14719d708e"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
