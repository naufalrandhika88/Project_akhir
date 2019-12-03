import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactPage } from "./contact.page";
import { AgmCoreModule } from "@agm/core";
// import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDqvejUkbbqph6J9c-IDG_MSSUrF9AjZ2Q"
    }),
    RouterModule.forChild([{ path: "", component: ContactPage }])
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
