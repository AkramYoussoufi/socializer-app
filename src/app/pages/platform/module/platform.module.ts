import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from '../platform.component';
import { PlatformrouteModule } from './platform-route.module';
import { SidebaruserComponent } from '../components/sidebaruser/sidebaruser.component';
import { ChatComponent } from '../components/chat/chat.component';
import { SidebarfriendsComponent } from '../components/sidebarfriends/sidebarfriends.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MymessageComponent } from '../components/chat/mymessage/mymessage.component';
import { HismessageComponent } from '../components/chat/hismessage/hismessage.component';




@NgModule({
  declarations: [PlatformComponent, SidebaruserComponent, ChatComponent, SidebarfriendsComponent,MymessageComponent, HismessageComponent],
  imports: [
    CommonModule,
    PlatformrouteModule,
    NgxPaginationModule
  ]
})
export class PlatformModule { }
