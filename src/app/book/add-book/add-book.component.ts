import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.less']
})
export class AddBookComponent implements OnInit {

    addBookForm: FormGroup;
    submitted = false;
    alert= false;

    constructor(private formBuilder: FormBuilder, private service: ProductService, private router: Router) { }

    ngOnInit() {
      if(!this.service.loggedIn()){
        this.router.navigate(['/login']);
        return;
      }

        this.addBookForm = this.formBuilder.group({
          productName: ['', Validators.required],
          author: ['', Validators.required],
          cate: ['', Validators.required],
          edition: ['', Validators.required],
          price: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.addBookForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addBookForm.invalid) {
            return;
        }
        let data = JSON.parse(window.localStorage.books);
        this.addBookForm.value.description = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe";
        this.addBookForm.value.fulldescription = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe";
        this.addBookForm.value.imageUrl = "book.png";
        this.addBookForm.value.productId = data.length;

        data.push(this.addBookForm.value);
        data = JSON.stringify(data);
        window.localStorage.books = data;
        this.alert= true;
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addBookForm.value))
    }
    logout(){
      this.router.navigate(['/login']);
    }
}
