import {Component, OnInit} from '@angular/core';
import {Banda} from "../banda";
import {BandaService} from "../banda.service";

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {
  bands: Array<Banda> = [];
  older!: Banda;
  selected: boolean = false;
  selectedBand!: Banda;
  constructor(private service:BandaService) {
  }

  ngOnInit(): void {
    this.service.getBands().subscribe({
      next: bands => this.bands = bands,
      error: e => console.error(e)
    });
    this.older = this.getOlder();
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBand = banda;
  }

  getOlder(): Banda {
    let older: Banda = this.bands[0];
    for (const item of this.bands) if (older.foundationYear < item.foundationYear) {
      older = item;
    }
    return older;
  }
}
