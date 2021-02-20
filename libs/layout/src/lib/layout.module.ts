import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { RouterModule } from '@angular/router'; // Added
import { MaterialModule } from '@demo-app/material';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
