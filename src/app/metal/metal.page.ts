import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.page.html',
  styleUrls: ['./metal.page.scss'],
})
export class MetalPage implements OnInit {
  metalData:any =[];
  constructor(private service: ServicesService) { }
//imported from services and function to retreive json data.
  ngOnInit(): void {
    this.service.getMyMetal().subscribe((data)=>
    {
      this.metalData = data.Charts;
      console.log(this.metalData);
    })
  }
  //boolean showing that text is hidden til button is clicked
  hidden = true;
  show(){
    if(this.hidden==false){
      this.hidden=true;
    }else{
      this.hidden=false;
    }
  }
  }
