import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ITransferencia } from 'src/app/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<ITransferencia>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    this.service
      .transferir({ valor: this.valor, destino: this.destino })
      .subscribe({
        next: (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        error: (erro) => {
          console.log(erro);
        }
      });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
