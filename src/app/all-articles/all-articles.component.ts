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
    var url = 'https://crudcrud.com/api/c65f8109eb1743299948e051823c9eed/unicorns';
    this.count = this.count + 1;
    this.http.get<any>(url).subscribe(data => {
      this.articles = data;
    }) 
  }
  deleteArticle(id:string){
    var url = 'https://crudcrud.com/api/c65f8109eb1743299948e051823c9eed/unicorns/' + id;
    this.http.delete<any>(url).subscribe(data => {
      let homePageUrl = '';
      this.router.navigateByUrl(homePageUrl)
    }) 
  }

}
