import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

interface User {
    image: string;
    name: string;
    status: string;
}

@Component({
    standalone: true,
    selector: 'app-recent-sales-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Benutzer Liste Simple</div>
        <p-table [value]="users" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th>Image</th>
                    <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="status">Status <p-sortIcon field="status"></p-sortIcon></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-user>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">
                        <img [src]="user.image" class="shadow-lg" width="50" />
                    </td>
                    <td style="width: 35%; min-width: 7rem;">{{ user.name }}</td>
                    <td style="width: 35%; min-width: 8rem;">{{ user.status }}</td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" icon="pi pi-user" class="p-button p-component p-button-text p-button-icon-only"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`
})
export class UserListWidget {
    users: User[] = [
        { image: 'https://via.placeholder.com/50', name: 'Max Mustermann', status: 'Aktiv' },
        { image: 'https://via.placeholder.com/50', name: 'Anna Schmidt', status: 'Inaktiv' },
        { image: 'https://via.placeholder.com/50', name: 'Jürgen Huber', status: 'Aktiv' },
        { image: 'https://via.placeholder.com/50', name: 'Lisa Berger', status: 'Inaktiv' },
        { image: 'https://via.placeholder.com/50', name: 'Peter Meier', status: 'Aktiv' }
    ];
}
