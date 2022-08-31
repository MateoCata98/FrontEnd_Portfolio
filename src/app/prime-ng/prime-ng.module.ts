import { NgModule } from "@angular/core";
import {ProgressBarModule} from 'primeng/progressbar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollerModule} from 'primeng/scroller';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

@NgModule({
 
  exports:[
    ProgressBarModule,
    ScrollPanelModule,
    ScrollerModule,
    VirtualScrollerModule
    
  ]
})
export class PrimeNgModule { }
