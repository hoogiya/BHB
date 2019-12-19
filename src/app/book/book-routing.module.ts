import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [        
        { path: 'books', component: BookComponent },
        { path: 'add-books', component: AddBookComponent },
        { path: 'edit/:id', component: EditBookComponent}        
      ]
    )
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { } 
