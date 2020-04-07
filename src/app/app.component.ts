import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AppserviceService} from './appservice.service'

declare const jobs: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  posts:any;
  userinput:any;
  username : any;
  userqualification:any;
  userlocation:any;
  constructor(private router:Router,private data:DataService,private http:HttpClient,private data1:AppserviceService) { }
  ngOnInit() {
  
  }

}


 