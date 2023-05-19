import {HttpClient} from "@angular/common/http";
import {Banda} from "./banda";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class BandaService {
  protected url: string = 'https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/cde4429166d6e1aac42fedbb7f657291b7621583/music-bands.json';

  constructor(private http: HttpClient) {
  }

  getBands(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.url)
      .pipe(catchError((err) => throwError(() => new Error('error en el servicio'))));
  }
}
