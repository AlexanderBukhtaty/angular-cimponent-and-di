import { Component, OnInit, Input, Output, EventEmitter, HostBinding, ContentChild, AfterContentInit } from '@angular/core';

import { ITodoItemData } from '../..//services/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  exportAs: 'todoItem'
})
export class ItemComponent implements OnInit, AfterContentInit {
  @HostBinding('class.isOpenDescription') public isOpen: boolean = true;
  @Input('testData') data: ITodoItemData;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @ContentChild('todoItemChild') todoItemChild;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit-------------------');
    console.log(this.todoItemChild);
  }

  toggleDescription() {
    this.isOpen = !this.isOpen;
  }

  onToggleDescriptionClick() {
    this.toggleDescription();
  }

  onRemoveItemClick() {
    this.onRemove.emit(this.data);
  }
}
