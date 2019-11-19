import {Component,OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
  }


  goToHome(){
    this.router.navigateByUrl("/home");
  }
}
