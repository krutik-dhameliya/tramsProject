import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramScheduleComponent } from './tram-schedule/tram-schedule.component';

const routes: Routes = [
  { path: '', component: TramScheduleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
