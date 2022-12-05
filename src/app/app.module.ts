import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ButtonComponent,
        CardComponent,
        SearchComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
