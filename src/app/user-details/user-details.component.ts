import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  submitted: boolean | undefined;
  userInfo : any =[];
  Name : any;
  Email : any;
  MobileNo : any;
  userDetailsForm : FormGroup = this.formBuilder.group({});
  seatInfo :any;
  arrayOfValues!: any[];
  arrayOfValues1!: any[];
  sencond! : any[];
  seatInfo1: any;
  

  constructor(private formBuilder : FormBuilder, private router : Router, private activatedRoute : ActivatedRoute) { }
 
  ngOnInit(): void {
    this.seatInfo = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    //this.seatInfo1 = this.activatedRoute.snapshot.queryParamMap.get('myArray1');
    if(this.seatInfo !== null)
    {
      this.arrayOfValues = JSON.parse(this.seatInfo);
      //this.arrayOfValues1 = JSON.parse(this.seatInfo1)
    }
    // console.log(typeof( this.arrayOfValues));
    // debugger;
    // console.log(this.seatInfo1)

    this.userDetailsForm = this.formBuilder.group({
      userName : ['',Validators.required],
      userMobileNo : ['',Validators.required],
      userEmail : ['',Validators.required]
    })
  }
    
  onFormSubmit()
  {     
    this.submitted = true;
    if (this.userDetailsForm.invalid) {
      return;
    }
    else{
        this.Name = this.userDetailsForm.controls['userName'].value;
        this.Email = this.userDetailsForm.controls['userMobileNo'].value;
        this.MobileNo = this.userDetailsForm.controls['userEmail'].value;
        this.buildUserInfoArray();
        this.buildParamObjAndNavigate();
     
      // localStorage.setItem('Name',this.userDetailsForm.controls['userName'].value);
      // localStorage.setItem('Email',this.userDetailsForm.controls['userMobileNo'].value);
      // localStorage.setItem('MobileNo',this.userDetailsForm.controls['userEmail'].value);
      
    }
  }
  checkRequiredError(field: any) {
    return this.userDetailsForm.controls[field]?.errors?.['required'];
  }

  buildUserInfoArray() {
  this.userInfo.push({
      name : this.Name,
      email : this.Email,
      moile : this.MobileNo
  })
  }
  buildParamObjAndNavigate(){
    const queryParams: any = {};
    

          queryParams.seatObj = JSON.stringify(this.arrayOfValues);    
          queryParams.UserObj = JSON.stringify(this.userInfo);      

    const navextras : any= {
      queryParams       
    }
      //this.router.navigate(['/ConfirmationPage',{Name:this.Name,Email:this.Email,Mobile:this.MobileNo}]);
    this.router.navigate(['/ConfirmationPage'],navextras);
  }
}




