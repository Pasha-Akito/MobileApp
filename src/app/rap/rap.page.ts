import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.page.html',
  styleUrls: ['./rap.page.scss'],
})
export class RapPage implements OnInit {
  rapData:any =[];
  constructor(private service: ServicesService) { }
//imported from services and function to retreive json data.
  ngOnInit(): void {
    this.service.getMyRap().subscribe((data)=>
    {
      this.rapData = data.Charts;
      console.log(this.rapData);
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