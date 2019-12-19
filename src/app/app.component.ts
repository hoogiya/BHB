import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router){}
  title = 'BHB';
  headerFooter = true;
  data = '[{"description":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe","fulldescription":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>","imageUrl":"book.png","price":300,"productCode":"BP-0011","productId":0,"productName":"Book 1","releaseDate":"March 19, 2019","url":"book","author":"Author 1","cate":"Thriller","edition":"I"},{"description":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe","fulldescription":"<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>","imageUrl":"book.png","price":350,"productCode":"GDN-0023","productId":1,"productName":"Book 2","releaseDate":"March 18, 2019","url":"book","author":"Author 2","cate":"History","edition":"II"},{"description":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe","fulldescription":"<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>","imageUrl":"book.png","price":250,"productCode":"TBX-0048","productId":2,"productName":"Book 3","releaseDate":"May 21, 2019","url":"book","author":"Author 3","cate":"Horror","edition":"II"}]';
  ngOnInit() {
    localStorage.loggedIn = "undefined";
    if(window.localStorage.books == undefined) {
      window.localStorage.books = this.data;
    }
  }
}
