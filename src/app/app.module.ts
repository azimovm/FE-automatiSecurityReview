import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {
  MatOption,
  MatSelect,
  MatSelectModule,
} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatTable,
} from '@angular/material/table';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { HeaderComponent } from './widget/header/header.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RepotTableComponent } from './widget/repot-table/repot-table.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, RepotTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatTabGroup,
    MatTab,
    MatToolbar,
    MatIcon,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule {}
