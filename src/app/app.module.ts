import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EditAppComponent } from "./edit-app/edit-app.component";
import { DndModule } from "ngx-drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { CommonModule, registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { AntdesignModule } from "./antdesign/antdesign.module";

registerLocaleData(en);

const appRoutes: Routes = [{ path: "", component: EditAppComponent }];

@NgModule({
  declarations: [AppComponent, EditAppComponent],
  imports: [
    CommonModule,
    AntdesignModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
