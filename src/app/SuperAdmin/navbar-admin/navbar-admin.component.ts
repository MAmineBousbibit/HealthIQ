import {Component, NgModule} from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_models/user';
import {NgbPopoverModule} from "@ng-bootstrap/ng-bootstrap";
import {Notification} from "../../_models/Notification";
import {NotificationService} from "../../_Services/Notification.service";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  AdminData=new User()
  ID:any

  @NgModule({
    imports: [
      // ... other imports
      NgbPopoverModule,
    ],
    // ... other module configurations
  })


  isNotificationDropdownOpen: boolean = false;
  isReadMoreClicked: boolean = false;
  notifications: Notification[] = [];
  constructor(private AuthService:AuthService ,private UserSevice:UserService,private notificationService:NotificationService){
   this.ID=this.AuthService.getIDUser()
 //console.log("Admin Id ", this.ID);
 this.UserSevice.getOneUser( this.ID).subscribe(
  (rep:any)=>{
    this.AdminData=rep
  //  console.log("admindaata",this.AdminData);

  }
 )

  }
  toggleNotificationDropdown() {
    this.isNotificationDropdownOpen = !this.isNotificationDropdownOpen;
  }





  onClickNotificationButton(): void {
    // Call the service method to get notifications
    this.notificationService.findAll().subscribe((notifications) => {
      // Handle the notifications as needed (e.g., update a property to display them)
      this.notifications = notifications;
      // Toggle the dropdown to open
      this.toggleNotificationDropdown();
    });
  }

  onDeleteNotification(notificationId: string): void {
    this.notificationService.deleteById(notificationId).subscribe(() => {
      this.notifications = this.notifications.filter(n => n.id !== notificationId);
    });
  }

}
