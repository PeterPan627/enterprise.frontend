import { Component, OnInit, OnDestroy, Renderer2, HostListener, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Notification } from '../../../@core/interfaces/common/notification';
import { NotificationsRealTimeService } from '../../../@services/notifications.realtime.service';
import { NotificationService } from '../../../@core/backend/common/services/notifications.service';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-alerts',
    styleUrls: ['./alerts.component.scss'],
    templateUrl: './alerts.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
  })
  export class AlertsComponent implements OnInit, OnDestroy {

    public showAlertsPane = false;

    public notifications: Notification[] = [];

    @HostListener('document:click', ['$event'])
    clickout(event) {
      if (!this.eRef.nativeElement.contains(event.target)) {
        this.showAlertsPane = false;
      }
    }

    constructor(
        private notificationService: NotificationService,
        private notificationRealTimeService: NotificationsRealTimeService,
        private router: Router,
        private eRef: ElementRef) {
            this.notificationService.get().subscribe(notification => {
                notification.forEach(n => {
                    n.date = new Date(n.created + 'Z');
                    this.notifications.push(n);
                });
            });
    }
    ngOnDestroy(): void {
        this.notificationRealTimeService.notifications.unsubscribe();
        this.notificationRealTimeService.stopConnection();
    }
    ngOnInit(): void {
        this.notificationRealTimeService.startConnection();
        this.notificationRealTimeService.notifications.subscribe(n => {
            n.date = new Date(n.date);
            this.notifications.push(n);
        });
    }

    hasUnAcknowledgedNotifications(): boolean {
        return this.getUnAcknowledgedNotificationsSize() > 0;
    }

    getUnAcknowledgedNotificationsSize(): number {
    const unAcknowledgedNotifications = this.notifications.filter( n => {
        return !n.acknowledged;
    });

    return unAcknowledgedNotifications.length;
    }
    showAlerts() {
        this.showAlertsPane = !this.showAlertsPane;
    }

    acknowledge(i) {
        const maxIndex = this.notifications.length - 1;
        const index = maxIndex - i;
        if (index >= 0) {
            const notification = this.notifications[index];
            this.notificationService.acknowledgeNotification(notification.id).subscribe(n => {
                notification.acknowledged =  true;
            });
            if (notification.action != null && notification.action !== '') {
                this.router.navigateByUrl(notification.action);
            }
        }
    }
  }
