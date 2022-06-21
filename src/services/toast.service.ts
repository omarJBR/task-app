import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

export class ToastService {

    constructor(
        private snackBar: MatSnackBar
    ) { }

    public successMessage(message: string): any {
        this.snackBar.open(message, 'إغلاق', {
            duration: 3000,
            panelClass: 'success-snackbar-message',
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }

    public errorMessage(message: string): any {
        this.snackBar.open(message, 'إغلاق', {
            duration: 3000,
            panelClass: 'error-snackbar-message',
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }
}
