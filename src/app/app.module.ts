import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { CardTypeDirective } from './directives/card-type.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { DelayDirective } from './directives/delay.directive';
import { ChangePipe } from './pipes/change.pipe';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectorPipe } from './pipes/change-detector.pipe';
import { NewsPipe } from './pipes/news.pipe';
import { AsyncPromiseComponent } from './components/async-promise/async-promise.component';
import { AsyncObservableComponent } from './components/async-observable/async-observable.component';




@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    CardTypeDirective,
    CardHoverDirective,
    DelayDirective,
    ChangePipe,
    ChangeDetectorPipe,
    NewsPipe,
    AsyncPromiseComponent,
    AsyncObservableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [StocksService, CurrencyPipe, PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
