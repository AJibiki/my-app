import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent
//  , AdditionCalculateWindow 
} from './hero-search.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
/*
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
*/

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,
//    ModalModule.forRoot(), BootstrapModalModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [ AppComponent,  HeroSearchComponent ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ],
//  entryComponents: [ AdditionCalculateWindow ]
})
export class AppModule { }
