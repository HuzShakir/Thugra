import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {requests} from "../../requests"
import { getUrlScheme } from '@angular/compiler';
import {Data} from "../../data"
import {results} from "../../data"
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  requests=requests;
  yes:Data={results:[{backdrop_path:"",
  overview:"",
  title:"",
  original_title:""}]}
  img_url="https://image.tmdb.org/t/p/original"
  nice:results={backdrop_path:"",
  overview:"",
  title:"",
  original_title:""};
  constructor(private http:HttpClient) { 
  }

  ngOnInit(){
    this.http.get<Data>("https://api.themoviedb.org/3"+requests.NetflixOriginals).subscribe(data =>  {
      this.yes=data;
      
      console.log(this.yes);
      
      this.nice=data.results[Math.floor(Math.random()*data.results.length-1)];
      
      
    }) 
  }
  

   getUrl(){
    return `url(${this.img_url+this.nice.backdrop_path})`
    } 
    
  
}
