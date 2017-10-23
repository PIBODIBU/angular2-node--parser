import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatSlideToggleModule,
  MatToolbarModule, MatRadioModule, MatInputModule, MatCardModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class MaterialModuleModule {
}
