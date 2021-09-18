import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { EditArticleComponent } from './edit-article/edit-article.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles/new', component: NewArticleComponent },
  { path: 'articles', component: AllArticlesComponent },
  { path: 'articles/:id', component: ShowPageComponent},
  { path: 'articles/:id/edit', component: EditArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
