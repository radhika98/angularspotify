import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private client_id: string='8020b46a5e6649b79c957d591db09c8a';
    private searchUrl:string;
    private artistUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.client_id+'&q=';    
    private albumsUrl:string;
    private albumUrl:string;
    
    constructor(private http:Http){

    }
    searchMusic(searchTerm:string,type='artist'){
         let url = this.artistUrl + searchTerm;
         return this.http.get(url).map(res => res.json());
}

    getArtist(id:string){
        this.artistUrl='https://api.spotify.com/v1/artists/'+id;
        return this.http.get(this.artistUrl)
            .map(res => res.json());
}

     getAlbums(artistid:string){
        this.albumsUrl='https://api.spotify.com/v1/artists/'+artistid+'/albums';
        return this.http.get(this.albumsUrl)
            .map(res => res.json());
}
     getAlbum(id:string){
        this.albumUrl='https://api.spotify.com/v1/albums/'+id;
        return this.http.get(this.albumUrl)
            .map(res => res.json());
}


}