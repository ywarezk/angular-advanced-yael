import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import { Task } from './task';
import { createAction, props } from '@ngrx/store';

/*
const myAction = createAction(
  '[data] some service',
  props<{tableName: string}>()
)

*/

/**
 *


 entityCache: {
   Adress: [ {id: 1, name: 'hello'}]
   City: [ {id: 1, name: 'hello'}]
   City: [ {id: 1, name: 'hello'}]
 }
 */

/*
export function serviceFactory(type: string) {
  return class SomeService extends EntityCollectionServiceBase<Task> {
    constructor(factory: EntityCollectionServiceElementsFactory) {
      // super('Task', factory)
      super(type, factory);
    }
  }
}

*/


@Injectable({
  providedIn: 'root'
})
export class TaskService extends EntityCollectionServiceBase<Task> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Task', factory)
    // super('Task', factory)
    // super('City', factory)
    // super('Address', factory)
  }

  // getAll() {
  //   super.getAll()
  // }
}

