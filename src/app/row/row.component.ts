import { Component, Input, OnInit } from '@angular/core';
import { requests } from "../../requests";
import { HttpClient } from "@angular/common/http";
import {Data} from "../../data"
@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})

export class RowComponent implements OnInit {
  @Input() fetchUrl:string = "";
  @Input() title: string = "";
  Requests=requests;
  console=console;
  url="https://api.themoviedb.org/3";
  img_url="https://image.tmdb.org/t/p/w342"
  yes:Data={results:[{backdrop_path:"",
  overview:"",
  title:"",
  original_title:""}]}
  constructor(private http: HttpClient) {
    
   }
  ngOnInit(){
    this.http.get<Data>(this.url+this.fetchUrl).toPromise().then(data => {
      this.yes=data;
      //  console.log(this.yes);
     
    }) 
    console.log(this.fetchUrl);
  }
}