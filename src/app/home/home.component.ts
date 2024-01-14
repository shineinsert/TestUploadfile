import { Component } from '@angular/core';
import { UploadService } from '../core/uploadService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  
  selectedFile: File | null = null;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe(
        fileId => {
          console.log('File uploaded successfully. File ID:', fileId);
        },
        error => {
          console.error('File upload failed:', error);
        }
      );
    }
  }
}
