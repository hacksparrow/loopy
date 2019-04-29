import { Getter, inject } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Customer, Order } from '../models';
import { OrderRepository } from './order.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id
> {

  public readonly orders: HasManyRepositoryFactory<
    Order,
    typeof Customer.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('OrderRepository')
    getOrderRepository: Getter<OrderRepository>,
  ) {
    super(Customer, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor(
      'orders',
      getOrderRepository,
    );
  }
}
