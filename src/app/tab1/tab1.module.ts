import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ContentComponent } from "../component/content/content.component";
import { HealthyComponent } from "../component/healthy/healthy.component";
import { WorkComponent } from "../component/work/work.component";
import { LoveComponent } from "../component/love/love.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    ContentComponent,
    HealthyComponent,
    WorkComponent,
    LoveComponent
  ]
})
export class Tab1PageModule {}
