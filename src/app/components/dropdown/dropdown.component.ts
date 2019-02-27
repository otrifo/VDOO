import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dropdown } from 'src/app/models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {

  @Input() dropdownObj:Dropdown;

  @Output() selectedItem:EventEmitter<any> = new EventEmitter();

  lastSelected:string = '';

  constructor() { }

  ngOnInit() {
    // get last value from local storage and trriger selectItem() to get details
    if(localStorage.getItem(this.dropdownObj.nameInStorage) !== null){
     this.lastSelected = localStorage.getItem(this.dropdownObj.nameInStorage);
     this.selectItem(this.dropdownObj.list.indexOf(this.lastSelected)); 
    }
  }

  selectItem(index){
  this.selectedItem.emit(this.dropdownObj.list[index]);
  localStorage.setItem(this.dropdownObj.nameInStorage, this.dropdownObj.list[index]);
  }

}
