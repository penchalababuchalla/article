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
    var url = 'https://crudcrud.com/api/c65f8109eb1743299948e051823c9eed/unicorns/' + this.paramId;
    this.http.get<any>(url).subscribe(data => {
      this.article = data;
    }) 
  }
  deleteArticle(){
    var url = 'https://crudcrud.com/api/c65f8109eb1743299948e051823c9eed/unicorns/' + this.paramId;
    this.http.delete<any>(url).subscribe(data => {
      let homePageUrl = '';
      this.router.navigateByUrl(homePageUrl)
    }) 
  }
}
