import { Entity, hasMany, model, property } from '@loopback/repository';
import { Order } from './order.model';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Order, {keyTo: 'customerId'})
  orders?: Order[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
