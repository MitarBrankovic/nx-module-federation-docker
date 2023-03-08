import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NavbarComponent, SidenavComponent ],
  imports: [CommonModule,
            NavbarRoutingModule,
            MatIconModule,
            MatToolbarModule,
            MatMenuModule,
            MatListModule,
            MatSidenavModule,
            FlexLayoutModule,
            
  ],
  exports: [NavbarComponent,
            SidenavComponent],
})
export class NavbarModule {}
