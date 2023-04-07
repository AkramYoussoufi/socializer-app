import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from '../platform.component';
import { PlatformrouteModule } from './platform-route.module';
import { SidebaruserComponent } from '../components/sidebaruser/sidebaruser.component';
import { ChatComponent } from '../components/chat/chat.component';
import { SidebarfriendsComponent } from '../components/sidebarfriends/sidebarfriends.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [PlatformComponent, SidebaruserComponent, ChatComponent, SidebarfriendsComponent],
  imports: [
    CommonModule,
    PlatformrouteModule,
    NgxPaginationModule
  ]
})
export class PlatformModule { }
