import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { ScrollDispatchModule } from '@angular/cdk/scrolling';
// Drag drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropService } from './app.service';

// import { CdkStepperModule } from '@angular/cdk/stepper';
// import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //ScrollDispatchModule,
    DragDropModule
    ,
    // CdkStepperModule,
    // CdkTableModule,
    CdkTreeModule
  ],
  // exports: [
  //   AppComponent,
  //   DragDropModule
  //   ,
  //   // CdkStepperModule,
  //   // CdkTableModule,
  //   CdkTreeModule
  // ],
  providers: [DragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
