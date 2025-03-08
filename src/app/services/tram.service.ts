import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TRAM_STATIONS, TramStation } from 'src/assets/stations';

@Injectable({
  providedIn: 'root'
})
export class TramService {
  private dataUrl = 'assets/tram-data.json';
  private readonly stations: string[] = TRAM_STATIONS.map(station => station.name);

  constructor(private http: HttpClient) {}

  getTramDepartures(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  searchTrams(from: string, to: string): Observable<{ trams: any[]; buses: any[] }> {
    return this.getTramDepartures().pipe(
      map(data => {
        if (!data?.departures) {
          console.error('Invalid or missing data:', data);
          return { trams: [], buses: [] };
        }

        const fromIndex = this.stations.indexOf(from);
        const toIndex = this.stations.indexOf(to);
        if (fromIndex === -1 || toIndex === -1) {
          console.warn('Invalid station names:', { from, to });
          return { trams: [], buses: [] };
        }

        const direction = fromIndex < toIndex ? 2 : 1;
        const departures = data.departures.filter((departure: any) => departure.direction_code === direction);
        console.log(departures);
        return {
          trams: departures.filter((departure: any) => departure.line?.transport_mode === 'TRAM'),
          buses: departures.filter((departure: any) => departure.line?.transport_mode === 'BUS')
        };
      })
    );
  }
}
