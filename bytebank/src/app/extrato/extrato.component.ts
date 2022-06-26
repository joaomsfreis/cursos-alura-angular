import { Component, Input, OnInit } from '@angular/core';
import { ITransferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: ITransferencia[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: ITransferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }
}
