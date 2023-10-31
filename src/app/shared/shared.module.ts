import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponentTsComponent } from 'src/app/sidebar.component.ts/sidebar.component.ts.component';

@NgModule({
  declarations: [
    SidebarComponentTsComponent,
  ],
  exports: [
    SidebarComponentTsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleTs { }
