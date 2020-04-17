import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.page.html',
  styleUrls: ['./rock.page.scss'],
})
export class RockPage implements OnInit {
rockData:any =[];
  constructor(private service: ServicesService) { }
//imported from services and function to retreive json data.

  ngOnInit(): void {
    this.service.getMyRock().subscribe((data)=>
    {
      this.rockData = data.Charts;
      console.log(this.rockData);
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
