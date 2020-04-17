//import { Component } from '@angular/core';
import { Storage } from'@ionic/storage';
import { Component, OnInit } from'@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
//storage function, getting the favourite genre and storing it, displayed on html
export class HomePage implements OnInit{
  myMusic: string;constructor(private storage: Storage) { }
  ngOnInit() {this.storage.get("myMusic").then((data) => {this.myMusic = data;}).catch ();

}
}