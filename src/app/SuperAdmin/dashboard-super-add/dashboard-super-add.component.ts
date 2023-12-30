import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import {Observable, Subscription, take} from 'rxjs';
import {NotificationService} from "../../_Services/Notification.service";
import {Notification} from "../../_models/Notification";
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard-super-add',
  templateUrl: './dashboard-super-add.component.html',
  styleUrls: ['./dashboard-super-add.component.css']
})
export class DashboardSuperAddComponent implements OnInit {
  showTooltip = false;



  @NgModule({
    imports: [
      // ... other imports
      NgbPopoverModule,
    ],
    // ... other module configurations
  })


  isNotificationDropdownOpen: boolean = false;
  isReadMoreClicked: boolean = false;
  isMenuOpen: boolean = false;
  subscription: any;
  notifications: Notification[] = []; // Make sure to import your Notification model


  ngOnInit() {

  }

  onReadMoreClick(): void {
    // Fetch all notifications
  }

  getNotificationContent(notification: Notification): string {
    // You can customize the content format based on your needs
    return `<strong>${notification.namesender}</strong><br>
    ${notification.content}`;
  }

  toggleNotificationDropdown() {
    this.isNotificationDropdownOpen = !this.isNotificationDropdownOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router, private notificationService: NotificationService) {
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




  goToPageSuivante(page: string): void {
    this.router.navigate([`/${page}`], {replaceUrl: true});
  }

}

