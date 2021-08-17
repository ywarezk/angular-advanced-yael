# NGRX

Reactive State for Angular

number of libraries @ngrx/*  
helps us manage our data

Redux

## State

state === data

state is our data in some time

s0

```javascript
// s0
{
  user: null
}

// s1
{
  user: 'yariv'
}

// s2
{
  user: null
}
```

our state is organized in an object

the state is immutable


```
{
  user: {
    firstName: 'yariv',
    lastName: 'Katz'
  },
  todo: {
    tasks: [],
    selectedTask
  },
  settings: {
    user: {
      alerts: true,
      email: ''
    }
  }
}


{
  greeting: {
    message: 'hello world',
    foo: 'bar',
    user: null
  },
  todo: {
    tasks: []
  }
}
```

## Store

in redux our state is held in a service called `Store`
@ngrx/store

store is observable 

```
store: Observable<State>
```

-----s0-----s1-----s2------s3-------->

## @ngrx/store-devtools

debug to examine the state the our store is holding

## Reducer

## Action

Action describes a change we want to do in our state

Action is the result of something async that is happening: server,timer, websocket, events.

```
{
  type: 'some action happened',
  payload: some data needed for the change in the state - the new message
}
```

## Flow Summary


![Redux flow](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)


## @ngrx/entity

helping us arrange arrays in our store like nechama tasks

## @ngrx/data

solves a common problem with data managment.  

data from server

grab nechama tasks from server place it in the state - @ngrx/data

## Proxy

https://angular.io/guide/build#proxying-to-a-backend-server
