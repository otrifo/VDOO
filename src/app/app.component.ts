import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { Dropdown } from './models/dropdown.model';
import { Album } from './models/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  albumsDropdown:Dropdown;

  selectedAlbumData:Album;

  constructor(private _soptifyService:SpotifyService){

  }

  ngOnInit(){
    this.albumsDropdown = new Dropdown(this._soptifyService.getAlbums(),'selectedAlbum');
  }

  getSelectedItem(itemName){
    this.selectedAlbumData = this._soptifyService.getAlbumObj(itemName);
  }
}
