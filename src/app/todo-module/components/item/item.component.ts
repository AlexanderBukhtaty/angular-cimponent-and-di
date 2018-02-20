import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveItemClick() {
    this.onRemove.emit(this.data);
  }
}
