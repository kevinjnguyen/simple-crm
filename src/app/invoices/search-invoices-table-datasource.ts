import { DataSource } from '@angular/cdk/collections';
import { Observable, of as observableOf } from 'rxjs';
import { Visit } from '../customer/customer.component';

/**
 * Data source for the CustomersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CustomersSearchTableDataSource extends DataSource<Visit> {

  constructor(private data: Visit[]) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Visit[]> {
    return observableOf(this.data);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void { }
}
