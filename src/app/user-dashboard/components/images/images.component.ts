import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedImages: Array<string | ArrayBuffer | null> = [];
  isRemoveClicked = false;

  onFilesSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.isValidImageFile(file)) {
        const imageUrl = URL.createObjectURL(file);
        this.selectedImages.push(imageUrl);
        this.saveImageToLocalStorage(imageUrl);
      } else {
        alert('Please upload valid image file(s) (JPEG or PNG).');
        this.fileInput.nativeElement.value = ''; // Reset file input value to clear selected files
        return; // Stop further processing
      }
    }
  }

  isValidImageFile(file: File): boolean {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    return allowedExtensions.includes(fileExtension);
  }

  saveImageToLocalStorage(imageUrl: string) {
    const images = JSON.parse(localStorage.getItem('uploadedImages') || '[]');
    images.push(imageUrl);
    localStorage.setItem('uploadedImages', JSON.stringify(images));
  }

  removeImage(index: number) {
    const removedImage = this.selectedImages[index];
    if (typeof removedImage === 'string') {
      this.selectedImages.splice(index, 1);
      this.removeImageFromLocalStorage(removedImage);
      this.isRemoveClicked = true;
      setTimeout(() => {
        this.isRemoveClicked = false;
      }, 0);
    }
  }
  getImageName(imageUrl: string): string {
    const startIndex = imageUrl.lastIndexOf('/') + 1;
    return imageUrl.substr(startIndex);
  }
  isStringImage(image: string | ArrayBuffer | null): image is string {
    return typeof image === 'string';
  }
  
  

  removeImageFromLocalStorage(imageUrl: string) {
    const images = JSON.parse(localStorage.getItem('uploadedImages') || '[]');
    const index = images.indexOf(imageUrl);
    if (index > -1) {
      images.splice(index, 1);
      localStorage.setItem('uploadedImages', JSON.stringify(images));
    }
  }
  AddProperty(){
    
  }
}
