import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { filter, forkJoin, map } from 'rxjs';
import { AvailableServicesService } from '../services/available-services.service';
import { BusRoutesService } from '../services/bus-routes.service';


@Component({
  selector: 'app-available-buses-list',
  templateUrl: './available-buses-list.component.html',
  styleUrls: ['./available-buses-list.component.css']
})
export class AvailableBusesListComponent implements OnInit {
  src: any;
  dest: any;
  date1: any;

  constructor(private busservice : AvailableServicesService,
              private route : Router, 
              private activaeRouter : ActivatedRoute,
              private routeService : BusRoutesService) { }
  _filterbyBus : string ='';
  _filterbyType: string ='';
  @Input() from:string = '';
  @Input() to: string = '';
  @Input() date: Date | undefined ;
  availableBusess : any;
  filteredBuses : any;
  routeIDs: any;


  ngOnInit(): void { 
    
            this.activaeRouter.paramMap.subscribe((params : ParamMap)=>{     
             this.src = params.get('Source');    
             this.dest = params.get('Dest');
             this.date1 = params.get('Date');              
             });          

           this.routeService.getallRoutes(this.src , this.dest).pipe(filter(value => {
             return value.source == this.src && value.destination == this.dest
           })).subscribe({
             next: (routes) => this.routeIDs = routes.id,
             error: (e) => console.log("error"),
             complete: () => console.info('Routes Completed')
           });

           this.busservice.getAllbusses().subscribe({
            next: (data) =>this.availableBusess = data,
            error: (e) => console.log("error"),
            complete: () => console.info('bussess Completed')
           });


          //  forkJoin({
          //   abs : this.busservice.getAllbusses(),
          //   rts : this.routeService.getallRoutes(this.src , this.dest)
          //  })
          //  .pipe(
          //    map(res =>{
          //      const bussess = res.abs;
          //      const rou = res.rts;
          //      const result : any[] = [];
          //      bussess.map((bus :any)=>{
          //         result.push({
                    
          //         })
          //      })
          //    })
          //  )
          // const routeID = this.routeIDs.pipe(filter((route :any) => route.source == this.src ))
          // console.log(routeID);

  } 

  test(){
    console.log(this.routeIDs);    
    console.log(this.availableBusess);
    console.log(this.src, this.dest)
  }

  viewSeats(bus :any)
  {
   this.route.navigate(['ViewSeats'],bus.Id);
  }

  get filterby1() : string
  {
    return this._filterbyBus;
  }
  set filterby1(filter : string)
  {
      this._filterbyBus = filter;      
     this.filteredBuses = this.performFilterbybus(filter);
  }
  performFilterbybus(filterbyBus : string) : any[]{
    filterbyBus = filterbyBus.toLocaleLowerCase();    
    return this.availableBusess.filter((buses : any) =>
                                buses.busName.toLocaleLowerCase().includes(filterbyBus));
   }

   get filterby2() : string{
     return this._filterbyType;
   }

   set filterby2(filter : string)
   {
     this._filterbyType = filter;     
     this.filteredBuses =this.PerformFilterbytype(filter);    
   }

   PerformFilterbytype(filter : string) : any[]{
    filter= filter.toLocaleLowerCase();
    return this.availableBusess.filter( (bus : any) =>
                                bus.coachType.toLocaleLowerCase().includes(filter));
   }
}
