import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//import { Component, OnInit } from'@angular/core';import { Storage } from'@ionic/storage';
import {IonicStorageModule} from'@ionic/storage';
import { NavController } from'@ionic/angular';
import { Storage } from'@ionic/storage';
@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {
  myMusic: string;
  constructor(private storage: Storage, private navCtrl: NavController, private iab:InAppBrowser) { }
  //storing the saved genre music. 
  ngOnInit() {this.storage.get("myMusic").then((data) => {
    this.myMusic = data;})
    .catch();}
    saveStatus() 
    {console.log(this.myMusic);
      this.storage.set("myMusic", this.myMusic).then(() => {
        this.navCtrl.navigateBack('/home');})
        .catch();
      }
      //opens webpages to the official charts. in app browser plugin
      openBlank(){
        this.iab.create('https://www.officialcharts.com/charts/rock-and-metal-singles-chart/', '_blank');
      }
      openBlank1(){
        this.iab.create('https://www.officialcharts.com/charts/mtv-urban-chart/', '_blank');
      }
    }