import { Component, OnInit, Input } from '@angular/core';
import { NotesHistoryService } from '../../../../@core/interfaces/common/history';

@Component({
  selector: 'ngx-notes-history-tab',
  templateUrl: './notes-history-tab.component.html',
  styleUrls: ['./notes-history-tab.component.scss'],
})
export class NotesHistoryTabComponent implements OnInit {
  @Input() id: string;
  @Input() type: string;
  @Input() service: NotesHistoryService;
  databaseChanges: any[] = [];
  historyChanges: any[] = [];

  constructor() { }

  ngOnInit() {
    this.service.getHistoryNotes(this.id, this.type).subscribe(data => {
      const databaseChanges = data.filter(arr => {
        return arr.category === 'Database Change';
      });
      const historyChanges = data.filter(arr => {
        return arr.category !== 'Database Change';
      });

      this.databaseChanges = databaseChanges;
      this.historyChanges = historyChanges;
    });
  }

}
