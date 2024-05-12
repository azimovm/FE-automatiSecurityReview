import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { DataService } from '../services/data-report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  miseForm!: FormGroup;
  isReportAvailable = true;
  version = [{ value: '10.87.0' }, { value: '10.4.0' }, { value: '1.1.0' }];
  microServices = [
    { value: 'EKA_TEST3', label: 'EKA_TEST3' },
    { value: 'mise2', label: 'Mise 2' },
    { value: 'mise3', label: 'Mise 3' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.miseForm = this.formBuilder.group({
      mise: ['', Validators.required],
      version: ['', Validators.required],
    });
  }

  onSubmit(element: MatTabGroup): void {
    if (this.miseForm.valid) {
      const selectedValue = this.miseForm.value;
      this.isReportAvailable = false;
      element.selectedIndex = 2;
      this.submitFormData(selectedValue);
    }
  }
  submitFormData(formData: any): void {
    this.dataService.postConfigData(formData).subscribe(
      (response) => {
        console.log('Data submitted successfully:', response);
      },
      (error) => {
        console.error('Error submitting data:', error);
      },
    );
  }
}
