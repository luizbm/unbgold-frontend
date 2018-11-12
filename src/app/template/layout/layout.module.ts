import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  } from '@angular/material';
  
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

// Other imports removed for brevity
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TngSidenavComponent } from '../tng-sidenav/tng-sidenav.component';
import { TngHeaderComponent } from '../tng-header/tng-header.component';
import { LayoutGoldComponent } from './layout.component';
import { HeadComponent } from '../head/head.component';
import { MenuComponent } from '../menu/menu.component';
import { TngDashboardComponent } from '../../tng-dashboard/tng-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormBuscaComponent } from '../../busca/form-busca/form-busca.component';
import { DetalheBuscaComponent } from '../../busca/detalhe-busca/detalhe-busca.component';
import { FormDatasetComponent } from '../../dataset/form-dataset/form-dataset.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LayoutGoldComponent,
    TngHeaderComponent,
    TngSidenavComponent,
    HeadComponent,
    MenuComponent,
    TngDashboardComponent,
    FormBuscaComponent,
    DetalheBuscaComponent,
    FormDatasetComponent,
  ],
  exports: [
    LayoutGoldComponent,
    MatToolbarModule
  ]
})
export class LayoutGoldModule { }
