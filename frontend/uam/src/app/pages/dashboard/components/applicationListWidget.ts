import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';

interface Application {
    name: string;
    lastUpdate: string;
    status: 'Online' | 'Updating' | 'Offline' | 'Error';
}

@Component({
    standalone: true,
    selector: 'app-application-list-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule, TagModule],
    template: `<div class="card shadow-lg p-4 rounded-lg bg-gray-100">
        <p class="font-bold text-xl mb-4 text-gray-800">Applikationsübersicht</p>
        <p-table [value]="applications" [paginator]="true" [rows]="5" responsiveLayout="scroll" class="rounded-md">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="lastUpdate">Letztes Update <p-sortIcon field="lastUpdate"></p-sortIcon></th>
                    <th pSortableColumn="status">Status <p-sortIcon field="status"></p-sortIcon></th>
                    <th>Übersicht</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-app>
                <tr>
                    <td class="py-2 px-3"><p>{{ app.name }}</p></td>
                    <td class="py-2 px-3"><p>{{ app.lastUpdate }}</p></td>
                    <td class="py-2 px-3">
                        <p-tag [severity]="getStatusSeverity(app.status)" [value]="app.status"></p-tag>
                    </td>
                    <td class="py-2 px-3">
                        <button pButton pRipple type="button" icon="pi pi-external-link" class="p-button p-button-text"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`
})
export class ApplicationListWidget {
    applications: Application[] = [
        { name: 'App Manager', lastUpdate: '2025-02-25 14:30', status: 'Online' },
        { name: 'Database Sync', lastUpdate: '2025-02-24 10:15', status: 'Updating' },
        { name: 'Backup Service', lastUpdate: '2025-02-23 22:45', status: 'Offline' },
        { name: 'Auth Server', lastUpdate: '2025-02-22 18:20', status: 'Error' },
        { name: 'Web Dashboard', lastUpdate: '2025-02-26 08:10', status: 'Online' }
    ];

    getStatusSeverity(status: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | undefined {
        switch (status) {
            case 'Online': return 'success';
            case 'Updating': return 'warn';
            case 'Offline': return 'info';
            case 'Error': return 'danger';
            default: return 'info';
        }
    }
}
