//----------------------------------------- app.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule  } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent }
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, AboutComponent, NavbarComponent, SearchComponent ],
  providers:    [ SpotifyService ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }