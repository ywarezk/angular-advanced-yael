/**
 * define how our todo section in the state looks like
 */

import { Task } from "./task.model";


export interface TodoState {
  tasks: Task[];
}
