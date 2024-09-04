import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TranslateModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeId: string = '';
  employees: Employee[] = [];
  searchInitiated: boolean = false;
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) {}

  searchEmployee() {
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe(
        employee => this.employees = employee ? [employee] : [],
        error => this.errorMessage = 'Employee not found'
      );
    } else {
      this.employeeService.getAllEmployees().subscribe(
        employees => this.employees = employees,
        error => this.errorMessage = 'Could not retrieve employees'
      );
    }
  }
}
