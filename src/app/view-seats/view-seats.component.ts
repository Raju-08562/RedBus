import { Component, HostListener, OnInit, Renderer2, ɵsetCurrentInjector } from '@angular/core';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-view-seats',
  templateUrl: './view-seats.component.html',
  styleUrls: ['./view-seats.component.css']
})
export class ViewSeatsComponent implements OnInit {

  constructor(private renderer : Renderer2, private router : Router) { }

  ngOnInit(): void {
        
  }
  seatStatus : any ;
  total: number = 0;
  isSelected: boolean =false;
  selectedSeatsList : any[] = [];
  
  seat : any ;
  
  @HostListener("click",['$event'])
    onclick(event: any){      
      if((event.target.className === "seat" || event.target.className === "seat selected" ) && event.target.className !== "occupied" )
      {   
        event.target.classList.toggle("selected");
        if(event.target.classList.contains("selected"))
        {
          this.selectedSeats(parseInt(event.target.id));
         this.getTotal();
        }
        else{
          this.popSelectedSeats(parseInt(event.target.id));
         this.getTotal();
        }  
        // debugger;
        // console.log(event);   
        // this.toogle();
        // console.log(event.target.id);

        // this.renderer.addClass(event?.target,"selected")
        // if(event.target.className === "selected" )
        // {
        //  // this.renderer.addClass(event?.target,"selected")
        //  this.isSelected =false;
        // }
        // else{
        //   this.renderer.removeClass(event?.target,"selected")          
        //   // this.isSelected=false;
        // }        
        
        // this.selected =event.target.id;        
        // this.toogle(this.selected);
      } 
    }

    // toogle() {      
    //   this.isSelected = !this.isSelected;
    // }
    selectedSeats(id : any){
      this.selectedSeatsList.push({
        seatNo : id,
        fare : id<20 ? 1000: 750 ,
        class :id<20 ? 'First Class':'Economy'
      });
    //  console.log(typeof(this.selectedSeatsList));
    }
    popSelectedSeats(id : any){
      this.selectedSeatsList.forEach((element, index) =>{
              if(element.seatNo == id)
              {
                this.selectedSeatsList.splice(index,1)
              }
         });
    }
    getTotal(){
      this.total= this.selectedSeatsList.reduce((s, x) => s + x.fare,0);
    }
    
    

    onConfirm()
    { 
      const queryParams: any = {};
      queryParams.myArray = JSON.stringify(this.selectedSeatsList);
      queryParams.myArray1 = JSON.stringify(this.selectedSeatsList);      
      
      const navextras : any= {
        queryParams        
      }

      this.router.navigate(['/userDetails'],navextras);
            
    }
}
