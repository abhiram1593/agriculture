import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustprofileComponent } from './create-custprofile/create-custprofile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:"profiles",component: ProfileListComponent},
  {path:'create-custprofile',component: CreateCustprofileComponent},
  {path:'',redirectTo:'profiles',pathMatch: 'full'},
  {path:'update-profile/:loanid',component:UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
