import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavDrawerComponent } from './components/sidenav-drawer/sidenav-drawer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FilterSelectInputComponent } from './components/filter-select-input/filter-select-input.component';
import { FilterDateRangeInputComponent } from './components/filter-date-range-input/filter-date-range-input.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {MatBadgeModule} from '@angular/material/badge';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    SidenavDrawerComponent,
    FilterSelectInputComponent,
    FilterDateRangeInputComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatBadgeModule,
    LayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    SidenavDrawerComponent,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FilterSelectInputComponent,
    FilterDateRangeInputComponent,
    SearchInputComponent,
    MatBadgeModule,
    LayoutModule
  ]
})
export class SharedModule { }
