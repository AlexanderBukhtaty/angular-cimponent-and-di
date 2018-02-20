import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ItemComponent],
  exports: [ListComponent, ItemComponent]
})
export class TodoModule { }
