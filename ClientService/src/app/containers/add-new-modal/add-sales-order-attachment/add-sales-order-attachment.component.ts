import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { type } from 'os';
import { Attachement } from 'src/app/data/NewSalesOrder';
import { CompanyServiceService } from 'src/app/views/app/customer-portal/customer-company/company-service.service';

@Component({
  selector: 'app-add-sales-order-attachment',
  templateUrl: './add-sales-order-attachment.component.html'
})
export class AddSalesOrderAttachmentComponent implements OnInit {

  configForDropzone = {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 160,
    // tslint:disable-next-line: max-line-length
    previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>'
  };

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  files:File[]=[];
  attachmentForm:FormGroup;
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @Input() custObjectID:any;
  @Output() newAttachment = new EventEmitter<any>();

  constructor(private fb:FormBuilder,private modalService: BsModalService,private comapanyAccService:CompanyServiceService) { }

  ngOnInit() {
    this.createAtttachmentForm();
  }
  showModal(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  createAtttachmentForm(){
    this.attachmentForm= this.fb.group({
      title: new FormControl(),
      attachmentDocument: new FormControl(),
  });
  }
  onSubmit(){
    if(this.attachmentForm.valid)
    {
      let temp = this.files.toString().split(',')
      let split1 = temp[0].split(':')
      let split2 = split1[1].split(';')
      let attachement:Attachement={
        title:this.attachmentForm.value.title,
        attachmentDoc:temp[1],
      }
      console.log("attachement",attachement)
      // this.comapanyAccService.addAttachement(attachement).subscribe()
      this.newAttachment.emit(attachement);
      this.modalRef.hide();
    }
  }
  onUploadError(event): void {
    console.log("Error",event);
  }

  onUploadSuccess(event): void {
    console.log("Success",event);
    console.log("file",event[1].files.file);
    this.files=event[1].files.file;
    }

}
