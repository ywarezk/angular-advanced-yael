import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends EntityCollectionServiceBase<Task> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Task', factory)
  }
}

