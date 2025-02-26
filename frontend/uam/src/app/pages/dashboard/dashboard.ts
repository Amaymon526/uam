import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { UserListWidget } from './components/userListWidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import {ApplicationListWidget} from "./components/applicationListWidget";

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, UserListWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget, ApplicationListWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-user-list-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-application-list-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
