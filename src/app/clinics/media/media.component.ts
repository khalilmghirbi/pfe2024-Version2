import { Component, OnDestroy } from '@angular/core';
import { ClinicService } from '../services/clinic.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Media } from '../models/media';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnDestroy {
  medias$!: Observable<Media[]>; // 1. Add the medias$ property
  formGroup!: FormGroup;
  selectedFile!: File;
  progress: number = 0;
  displayProgress: boolean = false;
  subscription!: Subscription;

  constructor(
    private clinicService: ClinicService,
    private activatedRoute: ActivatedRoute,
    private uploadService: FileUploadService,
    private formBuilder: FormBuilder
  ) {
    this.medias$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.clinicService.getMedias(id);
      })
    );
    this.formGroup = this.formBuilder.group({
      name: [{ value: '', disabled: true }],
    });
  }

  public get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  openDialog(): void {
    console.log('Open dialog');
  }

  setFileData(event: Event): void {
    const eventTarget: HTMLInputElement | null =
      event.target as HTMLInputElement | null;
    if (eventTarget?.files?.[0]) {
      this.selectedFile = eventTarget.files[0];
      this.nameControl.setValue(this.selectedFile.name);
    }
  }

  uploadFile(): void {
    this.subscription = this.uploadService.upload(this.selectedFile).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.displayProgress = true;
        if (event.total) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }
      } else if (event.type === HttpEventType.Response) {
        this.displayProgress = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
