import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model';

//@model()
@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Order)
  orders?: Order[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
