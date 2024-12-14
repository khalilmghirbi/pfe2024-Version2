import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavDrawerComponent } from './components/sidenav-drawer/sidenav-drawer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { SidenavMenuItemComponent } from './components/sidenav-menu-item/sidenav-menu-item.component';
import { JoinPipe } from './pipes/join.pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StarRatingComponent } from './components/star-rating-component/star-rating-component.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    SidenavDrawerComponent,
    FilterSelectInputComponent,
    FilterDateRangeInputComponent,
    SearchInputComponent,
    SidenavMenuItemComponent,
    JoinPipe,
    StarRatingComponent,
    ErrorDialogComponent,
    LoginComponent
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
    LayoutModule,
    RouterModule,
    MatDialogModule,
    DragDropModule,
    MatTabsModule,
    MatProgressBarModule
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
    LayoutModule,
    RouterModule,
    MatDialogModule,
    DragDropModule,
    MatTabsModule,
    JoinPipe,
    MatProgressBarModule,
    StarRatingComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
