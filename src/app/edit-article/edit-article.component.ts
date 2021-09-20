import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  article : any;
  articles : any;
  public paramId;
  title="";
  author="";
  body="";
  

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 
    let paramId = this.route.snapshot.paramMap.get('id');
    this.paramId = paramId;
    var url = 'https://crudcrud.com/api/c65f8109eb1743299948e051823c9eed/unicorns/' + this.paramId;
    this.http.get<any>(url).subscribe(data => {
      this.article = data;
    }) 
  }
  updateData(){
    let newArticle = { title: this.article.title, author: this.article.author, body: this.article.body};
    var url = 'https://crudcrud.com/api/c65f8109eb1743299948e051823c9eed/unicorns/' + this.paramId;
    this.http.put<any>(url,newArticle).subscribe(data => {
      debugger
      this.articles = data;
      let showPageUrl = '/articles/' + this.paramId;
      this.router.navigateByUrl(showPageUrl)
    })
  }


}
