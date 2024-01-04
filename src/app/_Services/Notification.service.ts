
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../_models/Notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // @ts-ignore
  private _notificaton: Notification;
  // @ts-ignore
  private _notifications: Array<Notification>;
  private _apiUrl = 'http://localhost:8080/api/v1/notification';

  constructor(private _http: HttpClient) {
  }

  findAll(): Observable<Array<Notification>> {
    return this._http.get<Array<Notification>>(`${this._apiUrl}/`);
  }





  saveNotification(notification: { namesender: string; phone: string; emailsender: string; content: string }): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/save`, notification);
  }

  deleteById(id: string): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/delete/${id}`);
  }


  get notificaton(): Notification {

    return this._notificaton;
  }

  set notificaton(value: Notification) {
    this._notificaton = value;
  }

  get notifications(): Array<Notification> {
    return this._notifications;
  }

  set notifications(value: Array<Notification>) {
    this._notifications = value;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  set apiUrl(value: string) {
    this._apiUrl = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
