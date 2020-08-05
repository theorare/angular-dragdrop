import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
 import { DragDropService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //implements OnInit
  title = 'angular-dragdrop';
  public personaldetails = [];
   constructor(private ddService: DragDropService) {}
   ngOnInit() {
      this.ddService.getData().subscribe((data) => {
         this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.personaldetails);
      });
   }

   onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, 
          event.previousIndex, event.currentIndex);
    } else {
       transferArrayItem(event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex);
    }
  }
}
