import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: ITransferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(): ITransferencia[] {
    return this.listaTransferencias;
  }

  todas(): Observable<ITransferencia[]> {
    return this.httpClient.get<ITransferencia[]>(this.url);
  }

  transferir(transferencia: ITransferencia): Observable<ITransferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<ITransferencia>(this.url, transferencia);
  }

  private hidratar(tranferencia: ITransferencia) {
    tranferencia.data = new Date();
  }
}
