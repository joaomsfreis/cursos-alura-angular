import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MensagemModule, ReactiveFormsModule],
  exports: [CommonModule, MensagemModule, ReactiveFormsModule],
})
export class SharedModule {}
