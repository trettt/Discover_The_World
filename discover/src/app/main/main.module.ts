import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdventureComponent } from './header/adventure.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ServicesWrapperComponent } from './services-wrapper/services-wrapper.component';
import { CitiesWrapperComponent } from './cities-wrapper/cities-wrapper.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdventureComponent,
    SearchBarComponent,
    ServicesWrapperComponent,
    CitiesWrapperComponent,
    BodyComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
