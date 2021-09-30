# DI in angular

## what is DI?

## Why DI?

- reduce coupling

UserService ---> HttpClient ---> X20 other angular services

```typescript
constructor(private _http: HttpClient)
```

```typescript
constructor() {
  const someservice = new SomeService1()
  this._http = new HttpClient(someservice)
}
```

## Wrong conception angular developers have about angular DI

Wrong
- Angular DI creates singleton of services

## DI angular is really

- Angular creates a singleton of a service per injector

## What is injector

Javascript `Map`

       key            |   value

class UserService     |  [instance of user service]
'hello'               |   'world'
10
function() {}

## DI

2 tree of injectors

- Module injectors

- Component injectors

      I

  I   I    I

I   I


##

Injector#AppModule

key       value
 
hello      world

Injector#ChildComponent

key       value
 
hello      foo bar

## Component injector tree 

every time you specify `providers` in a `Component` or a `Directive`

          Injector#AppComponent
          
          
                             Injector#ChildComponent


## Module injector tree

            Injector#AppModule  
            
                       Injector#LazyLoadedModule
            

## Search algo

first look in component tree
if i didnt find - search in module tree
