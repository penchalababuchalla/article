import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent {
  articles:any;
  openArticle:any;
  count = 0;

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 
    var url = 'https://crudcrud.com/api/eef79ab2ecf24ef2ad529abd7786633e/unicorns';
    this.count = this.count + 1;
    this.http.get<any>(url).subscribe(data => {
      this.articles = data;
    }) 
  }
  deleteArticle(){

  }

}
