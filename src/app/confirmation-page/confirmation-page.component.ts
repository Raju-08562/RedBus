import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  total: any;

  constructor(private activaeRouter : ActivatedRoute) { }
  userInfo : any;
  seatInfo :any;
  userArray! : any[];
  seatArray! : any[];
  Name : any;
  Email : any;
  MobileNo :any;
  // Name : any = localStorage.getItem('Name');
  // email : any = localStorage.getItem('Email');
  // MobileNo : any =localStorage.getItem('MobileNo');

    
  ngOnInit(): void {  
    this.seatInfo = this.activaeRouter.snapshot.queryParamMap.get('seatObj');
    this.userInfo = this.activaeRouter.snapshot.queryParamMap.get('UserObj');
    this.seatArray = JSON.parse(this.seatInfo);
    this.userArray = JSON.parse(this.userInfo);
    this.getTotal();

    // if(this.seatInfo !== null)
    // {
      
    // }
    // if(this.userInfo !== null)
    // {
      
    // }
    console.log(typeof(this.seatArray));    
    console.log(typeof(this.userArray));       
   }
   getTotal(){
    this.total= this.seatArray.reduce((s, x) => s + x.fare,0);
    }

}
