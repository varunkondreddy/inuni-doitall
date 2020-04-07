import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { JobComponent } from './job/job.component';



const routes: Routes = [
  
{path:'',component:JobComponent
},{
    path:'login',component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent]
