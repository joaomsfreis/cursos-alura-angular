export interface ITransferencia {
  id?: number | string;
  valor: number;
  destino: number | string;
  data?: Date;
}
