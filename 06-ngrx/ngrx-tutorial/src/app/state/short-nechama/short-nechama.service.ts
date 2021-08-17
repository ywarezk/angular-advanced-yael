import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Task } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class ShortNechamaService extends EntityCollectionServiceBase<Task>{
  constructor(collectionFactory: EntityCollectionServiceElementsFactory) {
    super('Task', collectionFactory);
  }

  getSingleTask() {

  }
}
