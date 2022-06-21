import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { NamesService } from 'src/services/names.service';
import { ToastService } from 'src/services/toast.service';

@Component({
  selector: 'app-system-names',
  templateUrl: './system-names.component.html',
  styleUrls: ['./system-names.component.scss']
})

export class SystemNamesComponent implements OnInit {

  public nameForm: FormGroup;
  public isNewName: boolean = false;
  public listOfNames: Array<any> = [];
  public searchString: string = '';
  public nameIndex: any;

  constructor(
    public dialogService: MatDialog,
    private formBuilder: FormBuilder,
    private namesService: NamesService,
    private toastService: ToastService
  ) {

    this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      details: [''],
    });
  }

  ngOnInit(): void {
    this.getNamesList();
  }

  // Get names list.
  public getNamesList(): void {
    this.namesService.getNames(this.searchString).subscribe(
      (res) => {
        this.listOfNames = res;
      },
      (err) => {
        this.toastService.errorMessage(err);
      }
    );
  }

  // Open add/edit name modal.
  public openNameModal(templateRef: TemplateRef<any>, isNewName: boolean, nameObject?: any, nameIndex?: number): void {
    this.isNewName = isNewName;
    if (!isNewName) {
      this.nameForm.setValue({
        name: nameObject?.name,
        details: nameObject?.details
      });
      this.nameIndex = nameIndex
    } else {
      this.nameForm.reset();
    }

    this.dialogService.open(templateRef, {
      width: '640px',
      height: `auto`,
      panelClass: 'add-name-modal',
      backdropClass: 'add-name-modal',
      autoFocus: false,
      disableClose: true
    })
  }

  // Add new name.
  public addName(): void {
    this.namesService.addNewName(this.nameForm.value).subscribe(
      (res) => {
        this.dialogService.closeAll();
        this.toastService.successMessage('تم اضافة الاسم بنجاح');
        this.getNamesList();
      },
      (err) => {
        this.toastService.errorMessage(err);
      }
    );
  }

  // Edit name.
  public editName(): void {
    this.namesService.editName(this.nameForm.value, this.nameIndex).subscribe(
      (res) => {
        this.dialogService.closeAll();
        this.toastService.successMessage('تم تعديل الاسم بنجاح');
        this.getNamesList();
      },
      (err) => {
        this.toastService.errorMessage(err);
      }
    );
  }

  // Delete name.
  public deleteName(nameIndex: number): void {
    this.namesService.deleteName(nameIndex).subscribe(
      (res) => {
        this.toastService.successMessage('تم حذف الاسم بنجاح');
        this.getNamesList();
      },
      (err) => {
        this.toastService.errorMessage(err);
      }
    );
  }
}
