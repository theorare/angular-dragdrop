import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DragDropService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   todo = [
      'Date of Exam',
      'Exam Start Time',
      'Place of Exam'
    ];
  
    done = [
      'Examiner Name',
      'Here is an example note',
      'Examiner Degree',
      'Examiner NPI'
    ];
  // implements OnInit
  title = 'angular-dragdrop';
  public personaldetails = [];
   constructor(private ddService: DragDropService) {}

   ngOnInit() {
      this.ddService.getData().subscribe((data) => {
         this.personaldetails = Array.from(Object.keys(data), k => data[k]);
         console.log(this.personaldetails);
      });
   }

   // tslint:disable-next-line: typedef
   onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
       this.mapEvent(event);
       moveItemInArray(event.container.data,
          event.previousIndex, event.currentIndex);

    } else {
       transferArrayItem(event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex);
    }
  }

  // tslint:disable-next-line: typedef
  mapEvent(event){
   event.previousContainer.data[event.previousIndex].idm = event.previousIndex + 1;
  }

  // horizontal + vertical drop
  // tslint:disable-next-line: typedef
  drop(event: CdkDragDrop<string[]>) {
   if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   } else {
     transferArrayItem(event.previousContainer.data,
                       event.container.data,
                       event.previousIndex,
                       event.currentIndex);
   }
 }
}
