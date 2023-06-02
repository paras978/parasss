import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormService } from './form.service';
import { Form } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit { 
  data!: any[];
  form: FormGroup;
  isEdit: boolean;
  editId: number;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.isEdit = false;
    this.editId = -1;
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.formService.getMessages().subscribe((response: any) => {
      this.data = response;
      });
  }

  onSubmit() {
    if (this.isEdit) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.formService.addMessage(this.form.value)
      .subscribe(() => {
        console.log('Message sent successfully');
        this.getMessages();
        this.form.reset();
      });
  }

  edit(message: any) {
    this.isEdit = true;
    this.editId = message.id;
    this.form.patchValue({
      name: message.name,
      email: message.email,
      message: message.message
    });
  }

  update() {
    this.formService.updateMessage(this.editId, this.form.value)
      .subscribe(() => {
        console.log('Message updated successfully');
        this.isEdit = false;
        this.editId = -1;
        this.getMessages();
        this.form.reset();
      });
  }
  delete(message: any) {
    if (confirm('Are you sure you want to delete this message?')) {
      this.formService.deleteMessage(message.id).subscribe(() => {
        console.log('Message deleted successfully');
        this.getMessages();
      });
    }
  }


  // form!: FormGroup;
  // submitted: boolean = false;
  // data: Form[] = [];
  // newData: Form = new Form();
  // isEdit= false;


  // constructor(private fb: FormBuilder, private http: HttpClient, private formService: FormService) { }

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(2)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     message: ['', Validators.required]
  //   });
  //   this.getMessages();
  // }

  // getMessages() {
  //   this.formService.getData().subscribe(messages => {
  //     this.data = messages;
  //   });
  // }

  // add() {
  //   this.submitted = true;
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.http.post('http://localhost:3000/form', this.form.value)
  //     .subscribe((response) => {
  //       console.log('Message sent successfully', response);
  //       this.getMessages;

  //       setTimeout(() => {
  //         location.reload();
  //       }, 1000);
  //     });
  // }

  // edit(form: Form): void {
  //   this.isEdit = true;
  //   this.newData = { ...form };
  // }
  
  // update(): void {
  //   this.formService.updateData(this.newData).subscribe(() => {
  //     const index = this.data.findIndex(p => p.id === this.newData.id);
  //     this.data[index] = { ...this.newData };
  //     this.newData = new Form();
  //     this.isEdit = false;
  //   });
  // }
}
