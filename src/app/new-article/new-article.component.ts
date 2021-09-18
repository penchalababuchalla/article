import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {

  article: any;
  title ="";
  author ="";
  body ="";

  constructor(private http: HttpClient, private router: Router) { 
    // this.http = http
  }

  saveArticle(){
    var url = 'https://crudcrud.com/api/eef79ab2ecf24ef2ad529abd7786633e/unicorns'
    let newArticle = { title: this.title, author: this.author, body: this.body};
    this.http.post<any>(url, newArticle).subscribe(data => {
          let showPageUrl = '/articles/' + data._id;
          this.router.navigateByUrl(showPageUrl)
      }) 
  }
}
