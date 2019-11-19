import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  count=0;
  countFlag=false;
  RandomArray = [];
  serviceForm: FormGroup;
  resultString= '';
  maxTime = 5;
  isFormVisible = false;
  isHideNumbers = false;

  constructor(private router: Router, public dialog: MatDialog){}

  ngOnInit() {
      for (let i = 0; i < 9; i++) {
        this.RandomArray.push(Math.floor(Math.random() * 10))
      }
      console.log(this.RandomArray)
    this.createForm();
    this.showForm(); 
  }
    /** create form */
    createForm() {
      this.serviceForm = new FormGroup({
        findNumber: new FormControl('', [
          Validators.pattern('(^[0-9]{9}$)'),
          Validators.required,
        ]),
      });
    }

    get f() {
      return this.serviceForm.controls;
    }
  changeNumber() {
      for (let i = 0; i < 9; i++) {
        this.RandomArray.push(Math.floor(Math.random() * 10))
      }
  }
  showForm() {
    setInterval(() => {
      if (this.maxTime <= 0) {
        this.isFormVisible = true;
        this.isHideNumbers = true;
        this.maxTime = 5;
        clearInterval()
      } else {
        this.maxTime--;
      }
    }, 1000);

  }
  clearNumber(){
    this.serviceForm.reset();
  }
  exitPage(){
    this.router.navigateByUrl("/home");
  }

  getMessage(number){
    this.clearNumber();
 
   
    this.RandomArray.forEach(ele => {
      this.resultString = this.resultString + ele.toString()
    })
    
    console.log(this.resultString)
    number = number.toString()
    if(number === this.resultString){
      this.countFlag=true
      this.count++;
      this.resultString='';
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '450px',
        disableClose: true,
        autoFocus: false, 
        data: {title: "Entered Correct Number!!", content: "you have successfully completed this level, if you want to test your memory , please click on next button and you will redirect to next Memory test.. Thank you !!", buttons: ['EXIT', 'NEXT']}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.isHideNumbers = false;
        this.isFormVisible = false;
        this.RandomArray=[]
        this.changeNumber();
        console.log(this.RandomArray)
        this.maxTime = 6;
        console.log("this is max time before calling ", this.maxTime)
        this.showForm()
      });
     
      
       
    } else{
      // this.countFlag=false;
      this.count--;
      this.resultString='';
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '450px',
        disableClose: true,
        autoFocus: false, 
        data: {title: "Entered InCorrect Number!!", content: "I think you need to practice more to remember the numbers, to test your memory , please click on TRY AGAIN button and you will redirect to same Memory test.. Thank you !!", buttons: ['EXIT', 'TRY AGAIN']}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        console.log(number, this.resultString)
        
      });
    }




  }

}
