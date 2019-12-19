import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {

  editBookForm: FormGroup;
    submitted = false;
    alert= false;
    perData;

  constructor(public router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private service: ProductService,) { 
    this.editBookForm = this.formBuilder.group({
      productName: ['', Validators.required],
      author: ['', Validators.required],
      cate: ['', Validators.required],
      edition: ['', Validators.required], 
      price: ['', Validators.required]
    });
  }

 // convenience getter for easy access to form fields
 get f() { return this.editBookForm.controls; }

  ngOnInit() {
    if(!this.service.loggedIn()){
      this.router.navigate(['/login']);
      return;
    }
    const param = this.route.snapshot.paramMap.get("id");
    if(param) {
      const id = param;
      this.getProduct(id);
    }
  }
  getProduct(id: string) {
    let data = JSON.parse(window.localStorage.books);
    for(var i in data){
      if(data[i].productId == id) {
        this.editBookForm.patchValue(data[i]);
        this.perData = data[i].productId;
      }
    }
  }
  onSubmit(){
    let data = JSON.parse(window.localStorage.books);
    for(var i in data){
      if(data[i].productId == this.perData) {
         data[this.perData] = this.editBookForm.value;
         data[this.perData].description = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe";
         data[this.perData].fulldescription = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe";
         data[this.perData].imageUrl = "book.png";
         data[this.perData].productId = this.perData;
         data = JSON.stringify(data);
          window.localStorage.books = data;
          this.alert = true;
      }
    }
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
