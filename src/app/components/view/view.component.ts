import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {

  @Input() selectedAlbum:{name:''};

  constructor() { }

  ngOnInit() {
  }

}
