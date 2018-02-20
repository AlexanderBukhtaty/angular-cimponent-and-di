import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { ITodoItemData } from '../..//services/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @HostBinding('class.isOpenDescription') public isOpen: boolean = true;
  @Input() data: ITodoItemData;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
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
