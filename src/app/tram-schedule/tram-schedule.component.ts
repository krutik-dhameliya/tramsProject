import { Component, OnInit } from '@angular/core';
import { TramService } from '../services/tram.service';
import { TRAM_STATIONS, TramStation } from 'src/assets/stations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tram-schedule',
  templateUrl: './tram-schedule.component.html',
  styleUrls: ['./tram-schedule.component.scss']
})
export class TramScheduleComponent implements OnInit {
  stations: TramStation[] = TRAM_STATIONS;
  from: string = '';
  to: string = '';
  trams: any[] = [];
  buses: any[] = [];
  searched = false;
  displayedColumns: string[] = [];

  constructor(private tramService: TramService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.displayedColumns = ['destination', 'scheduled', 'expected', 'state', 'display'];
  }

  searchTrams() {

    if (!this.from || !this.to) {
      this.showError("Please select both From and To stations.");
      return;
    }
    if (this.from === this.to) {
      this.showError("From and To stations must be different.");
      return;
    }

    this.tramService.searchTrams(this.from, this.to).subscribe(result => {
      console.log(result);
      this.trams = result.trams;
      this.buses = result.buses;
      this.searched = true;

      if (this.trams.length === 0 && this.buses.length === 0) {
        this.showError("No trains or buses found.");
      }
    });
  }

  showError(message: string) {
    this.snackBar.open(message, "Close", {
      duration: 3000,
      panelClass: ["error-snackbar"]
    });
  }
}
