import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  submitted!: boolean;

  constructor(private formBuilder : FormBuilder, private router : Router) { }
  src:any;
  dest:any;
  date:any;



  searchForm: FormGroup = this.formBuilder.group({});
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      source : [''],
      destination : [''],
      journerDate : ['']
    })
  }
  search(){
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    else{
      this.src = this.searchForm.controls?.['source'].value
      this.dest =this.searchForm.controls?.['destination'].value
      this.date=this.searchForm.controls?.['journerDate'].value
    
      this.router.navigate(['/availableBusesList',{Source:this.src,Dest:this.dest,Date:this.date}]);  
    }
  }

}
