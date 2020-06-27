import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatCardModule, MatFormFieldModule, MatListModule,
  MatAutocompleteModule, MatSelectModule, MatSlideToggleModule,
  MatSliderModule, MatSidenavModule, MatDividerModule,
  MatRadioModule, MatExpansionModule, MatDatepickerModule,
  MatGridListModule, MatStepperModule, MatTreeModule,
  MatSnackBarModule, MatTabsModule, MatDialogModule, MatTableModule,
  MatCheckboxModule, MatNativeDateModule, MatPaginatorModule,
  MatButtonToggleModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ToastrModule } from 'ngx-toastr';
import { ExportService } from './export.service';




@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatMenuModule,
    MatIconModule, MatInputModule, MatCardModule, MatFormFieldModule, MatListModule,
    MatAutocompleteModule, MatSelectModule, MatSlideToggleModule, MatSliderModule,
    MatSidenavModule, MatDividerModule, MatNativeDateModule, MatRadioModule
    , MatExpansionModule, MatGridListModule, MatStepperModule, MatTooltipModule,
    MatTreeModule, MatButtonToggleModule, MatSnackBarModule, MatTabsModule,
    MatDialogModule, MatTableModule, MatDatepickerModule, MatCheckboxModule,
    CommonModule, DateRangePickerModule, MatToolbarModule, MatPaginatorModule, NgxMaterialTimepickerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })
  ],
  exports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatMenuModule,
    MatIconModule, MatInputModule, MatCardModule, MatFormFieldModule, MatListModule,
    MatAutocompleteModule, MatSelectModule, MatSlideToggleModule, MatSliderModule,
    MatSidenavModule, MatDividerModule, MatNativeDateModule, MatRadioModule
    , MatExpansionModule, MatGridListModule, MatStepperModule, MatTooltipModule,
    MatTreeModule, MatButtonToggleModule, MatSnackBarModule, MatTabsModule,
    MatDialogModule, MatTableModule, MatDatepickerModule, MatCheckboxModule,
    CommonModule, DateRangePickerModule, MatToolbarModule, MatPaginatorModule
    , NgxMaterialTimepickerModule],
    providers: [
    ExportService
  ]
})
export class SharedModule { }
