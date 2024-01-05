import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../../_Services/Notification.service";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router, private notificationService: NotificationService) {
  }

  // saveNotification1() {
  //   this.notificationService.save().subscribe(
  //     (response: number) => {
  //       console.log('Notification saved successfully. Response:', response);
  //       // Handle the response if needed
  //     },
  //     (error) => {
  //       console.error('Error saving notification:', error);
  //       // Handle the error if needed
  //     }
  //   );
  // }
  // saveNotification(): void {
  //   const newNotification = {
  //     // Your notification data here
  //   };
  //
  //   this.notificationService.saveNotification(newNotification).subscribe(response => {
  //     console.log('Notification saved successfully:', response);
  //   });
  // }

  notification = {
    namesender: '',
    emailsender: '',
    phone: '',
    content: '',
  };

  saveNotification(): void {
    // Assuming you have a NotificationService injected in your component
    this.notificationService.saveNotification(this.notification).subscribe(response => {
      console.log('Notification saved successfully:', response);

      // Reset the form after saving
      this.notification = {
        namesender: '',
        emailsender: '',
        phone: '',
        content: '',
      };
    });
  }

}
