import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent {
   article: any;
   public paramId;
   title ="";
   author ="";
   body ="";

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 
    let paramId = this.route.snapshot.paramMap.get('id');
    this.paramId = paramId;
    var url = 'https://crudcrud.com/api/eef79ab2ecf24ef2ad529abd7786633e/unicorns/' + this.paramId;
    this.http.get<any>(url).subscribe(data => {
      this.article = data;
    }) 
  }
  editArticle(){

  }
  deleteArticle(){
    var url = 'https://crudcrud.com/api/eef79ab2ecf24ef2ad529abd7786633e/unicorns/' + this.paramId;
    this.http.delete<any>(url).subscribe(data => {
      let homePageUrl = '';
      this.router.navigateByUrl(homePageUrl)
    }) 
  }
}
