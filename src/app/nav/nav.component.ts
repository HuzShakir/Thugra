import { Component, HostListener, OnInit,ElementRef ,ViewChild} from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    constructor(private elementRef:ElementRef) { 
      
    }
    nice:boolean=false;
    @HostListener('window:scroll', ['$event']) 
    scrollHandler() {
      if(window.scrollY>150)
      {
        this.nice=true;
      }
      else{
        this.nice = false;
      }
      console.log(this.nice)
      // console.log(this.nice);
    }
    
  ngOnInit(): void {
  }
  
}
