import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleDetailsComponent } from './screens/article-details/article-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FadeCardComponent } from './components/fade-card/fade-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ButtonComponent,
        CardComponent,
        SearchComponent,
        ArticleDetailsComponent,
        FadeCardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgCircleProgressModule.forRoot({
            radius: 27,
            outerStrokeWidth: 8,
            innerStrokeWidth: 8,
            space: -8,
            outerStrokeColor: "#4882c2",
            outerStrokeGradientStopColor: "#53a9ff",
            innerStrokeColor: "#c8c8cf",
            animationDuration: 0,
            showUnits: false,
            showSubtitle: false,
            showTitle: false,
            showBackground: false,
            showZeroOuterStroke: true,
            outerStrokeGradient: true,
            outerStrokeLinecap: "round",
          })
    ]
})
export class AppModule { }
