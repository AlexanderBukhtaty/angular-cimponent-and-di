import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ITodoItemData {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public isOpen: boolean = true;
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
