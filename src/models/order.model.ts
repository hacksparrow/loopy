import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Customer } from './customer.model';

@model()
export class Order extends Entity {
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

  // @property({
  //   type: 'number',
  // })
  // customerId?: number;

  @belongsTo(() => Customer)
  customerId: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}
