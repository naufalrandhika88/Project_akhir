import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "news", loadChildren: "./news/news.module#NewsPageModule" },
  {
    path: "news-single",
    loadChildren: "./news-single/news-single.module#NewsSinglePageModule"
  },
  {
    path: "add-news",
    loadChildren: "./add-news/add-news.module#AddNewsPageModule"
  },
  {
    path: "profile",
    loadChildren: "./profile/profile.module#ProfilePageModule"
  },
  { path: "auth", loadChildren: "./auth/auth.module#AuthPageModule" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
