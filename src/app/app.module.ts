import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikitopListComponent } from './module/routes/wikitop-list/wikitop-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WikitopArticleComponent } from './module/component/wikitop-article/wikitop-article.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, WikitopListComponent, WikitopArticleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
