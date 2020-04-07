import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {JobserviceService} from '../job/jobservice.service'
declare const jobs: any;
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  posts:any;
  userinput:any;
  username : any;
  userqualification:any;
  userlocation:any;
  constructor(private router:Router,private data:DataService,private http:HttpClient,private data1:JobserviceService) { }

  ngOnInit() {
    this.data.getans().subscribe(
      data => {this.posts=data;}
    );
  }
reg():void
{this.router.navigate(['']); 
  
}
  response(form)
  {
    this.userinput=form.value.jobneed;
    this.http.get('https://bbcw5pcdm8.execute-api.ap-south-1.amazonaws.com/dev/items',
    {
      params:{
        query:this.userinput,
        limit:'10',
        offset:'0' }
    }).subscribe(
      data=>{this.posts=data;}
      
    );
   
jobs();
  }
  pass1(a,b,c)
  {this.username=a;
    this.userqualification=b;
    this.userlocation=c;

  }

}
