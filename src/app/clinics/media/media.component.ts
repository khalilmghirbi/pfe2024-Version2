import { Component, OnDestroy } from '@angular/core';
import { NEVER, Observable, Subscription, switchMap } from 'rxjs';
import { Media } from '../models/media';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { HttpEventType } from '@angular/common/http';
import { MediaService } from '../services/media.service';
import { ClinicService } from 'src/app/shared/services/clinic.service';

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
  hopitalId!: string;

  constructor(
    private mediaService: MediaService,
    private clinicService: ClinicService,
    private uploadService: FileUploadService,
    private formBuilder: FormBuilder
  ) {
    this.medias$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.mediaService.getMedias(this.hopitalId);
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
        this.mediaService.addMedia(this.hopitalId, {
          desc: this.selectedFile.name,
          path: event.body?.url,
          type: this.selectedFile.type,
        }).subscribe(() => {
          this.medias$ = this.mediaService.getMedias(this.hopitalId);
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  remove(media: Media): void {
    media.id && this.mediaService.deleteMedia(media.id).subscribe(() => {
      this.medias$ = this.mediaService.getMedias(this.hopitalId);
    });
  }
}
