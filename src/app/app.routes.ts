import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
];
