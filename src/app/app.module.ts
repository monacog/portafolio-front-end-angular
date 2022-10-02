import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/top-bar/top-bar.component';
import { RedSocialComponent } from './componentes/red-social/red-social.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { BtnEditComponent } from './componentes/btn-edit/btn-edit.component';
import { SectionComponent } from './componentes/section/section.component';
import { BtnDeleteComponent } from './componentes/btn-delete/btn-delete.component';
import { ItemExpEduComponent } from './componentes/item-exp-edu/item-exp-edu.component';
import { ImgBigComponent } from './componentes/img-big/img-big.component';
import { ItemHardSoftComponent } from './componentes/item-hard-soft/item-hard-soft.component';
import { ItemProjectComponent } from './componentes/item-project/item-project.component';
import { BtnExitComponent } from './componentes/btn-exit/btn-exit.component';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,HeaderComponent, RedSocialComponent, PortadaComponent, AcercaDeComponent, BtnEditComponent, SectionComponent, BtnDeleteComponent, ItemExpEduComponent, ImgBigComponent, ItemHardSoftComponent, ItemProjectComponent,BtnExitComponent],
  imports: [BrowserModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
