import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  headerFooter = true;
  constructor(private service: ProductService, private router: Router) { 

  }
  books = [];
  ngOnInit() {
    if(!this.service.loggedIn()){
      this.router.navigate(['/login']);
      return;
    }
    if(window.localStorage.books != undefined){
      this.books = JSON.parse(window.localStorage.books)
    }
  }
  deleteBook = function(id: any){
    let data = JSON.parse(window.localStorage.books);
    for(var i in data){
      if(data[i].productId == id) {
        data.splice(i, 1)
      }
    }

    data = JSON.stringify(data);
    window.localStorage.books = data;
    this.books = JSON.parse(window.localStorage.books)

  }

  logout(){
    this.router.navigate(['/login']);
  }

} 
