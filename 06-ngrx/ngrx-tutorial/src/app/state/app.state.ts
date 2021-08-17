/**
 * I want to define the structure of my state in an interface
 */

import { GreetingState } from "./greeting/greeting.state";
import { NechamaState } from "./nechama/nechama.state";
import { TodoState } from "./todo/todo.state";

export interface AppState {
  greeting: GreetingState;
  todo: TodoState,
  nechama: NechamaState
}
