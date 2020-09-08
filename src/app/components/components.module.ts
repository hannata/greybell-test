import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget1Component } from './widget1/widget1.component';
import { Widget2Component } from './widget2/widget2.component';
import { Widget3Component } from './widget3/widget3.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget6Component } from './widget6/widget6.component';
import { Widget7Component } from './widget7/widget7.component';
import { Widget8Component } from './widget8/widget8.component';
import { Widget9Component } from './widget9/widget9.component';
import { Widget10Component } from './widget10/widget10.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component,
    Widget6Component,
    Widget7Component,
    Widget8Component,
    Widget9Component,
    Widget10Component
  ],
  exports: [
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component,
    Widget6Component,
    Widget7Component,
    Widget8Component,
    Widget9Component,
    Widget10Component
  ]
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class ComponentsModule { }
