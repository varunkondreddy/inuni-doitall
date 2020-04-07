import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
declare const supert: any;

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  data:any;
  private content=new BehaviorSubject<string>("default data");
  public share=this.content.asObservable();
  constructor() { }
  passvalues(a,b,c)
  { 
    this.data={'a':a,
    'b':b,
    'c':c} 
  this.content.next(this.data);
  }
}
 