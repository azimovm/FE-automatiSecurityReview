import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { DataService } from '../services/data-report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isAlertOpen = false;
  miseForm!: FormGroup;
  isReportAvailable = true;
  microServices = [
    { value: 'asset', label: 'Assets', version: '10.38.2' },
    { value: 'cart', label: 'Cart', version: '10.76.0' },
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
      (miseParameters) => {
        console.log('Data submitted successfully:', miseParameters);
        this.openAlert();
      },
      (error) => {
        console.error('Error submitting data:', error);
      },
    );
  }
  openAlert() {
    this.isAlertOpen = true;
    setTimeout(() => {
      this.isAlertOpen = false;
    }, 3000);
  }
}
