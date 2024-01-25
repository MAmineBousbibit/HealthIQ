import {Component, NgModule} from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
import { DoctorService } from 'src/app/_Services/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import {Notification} from "../../_models/Notification";
import {Router} from "@angular/router";
import {NotificationService} from "../../_Services/Notification.service";
import {NgbPopoverModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar-doc',
  templateUrl: './navbar-doc.component.html',
  styleUrls: ['./navbar-doc.component.css']
})
export class NavbarDocComponent {
  UserID:any
  Id:any
 /* Id="6593d95fe01ea7347c191052" ****************** */
  //**6599449e3c0530726e1d654b */
  DoctorData=new Doctor()

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


  constructor( private DocService:DoctorService,private AuthServices: AuthService,private notificationService:NotificationService){
 /**************************** */
 this.Id=AuthServices.getIDUser()

 this.DocService.getOneDoctor(this.Id).subscribe(
   (data:any)=>{
    // console.log("user-auth :", data);
     this.DoctorData=data

   }
 )
  }

  getNotificationContent(notification: Notification): string {
    // You can customize the content format based on your needs
    return `<strong>${notification.namesender}</strong><br>
    ${notification.content}`;
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
