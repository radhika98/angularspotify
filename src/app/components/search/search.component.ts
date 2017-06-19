import { Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';


@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers:[SpotifyService]
})
export class SearchComponent implements OnInit {
  inputField: string;
  searchResults: any[] = [];

    constructor(private spotifyService:SpotifyService){

    }

  ngOnInit() {
    this.spotifyService.searchMusic(this.inputField)
      .subscribe(result => {
        if(result.status === 400) {return;}
        else { this.searchResults = result.artists.items; }
      });
  }

}