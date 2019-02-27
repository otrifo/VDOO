import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  demoAlbums = [
    {
      name:'Album1',
      releaseDate:'October 13, 2014',
      albumCover:'../../../../assets/images/bruno1.jpg'
    },
    {
      name:'Album2',
      releaseDate:'December 17, 2012',
      albumCover:'../../../../assets/images/bruno2.jpg'
    },
    {
      name:'Album3',
      releaseDate:'December 17, 2012',
      albumCover:'../../../../assets/images/bruno3.jpg'
    }
  ];

  constructor(private http:HttpClient) { 
  }

  getAlbums(){ 
    return this.demoAlbums.map( album => album.name);
  } 

  getAlbumObj(albumName){
    return this.demoAlbums.find( album => album.name === albumName);
  }

}