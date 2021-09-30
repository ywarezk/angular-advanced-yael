# Course Summary EX.

This is a short excersize that will summarize the topics covered in the course.  
You can create a git repository and submit the repository to my mail `yariv@nerdeez.com` and I will code review your work.  

## Pages

You need to create a website with the following url:

- `/` - the homepage will display a login form
- `/about` - about the author of the website
- `/todo` - display a list of the todo items

## OnPush

All the components created in the app should be set to change detection strategy `OnPush`.

## Server Side Rendering

Use server side rendering to prerender the static pages `/` and `/about`

## @angular/cli

you need to create a workspace using the flag `--create-application=false`

## Library

You need to create a library `@yael/auth` in the workspace.  
That library will contain the `LoginComponent` and the `JWTInterceptor`.  
No need to push the library to `npm`, use the `tsconfig.json -> types` to point to the library folder when doing import

## Testing

- You will need to create a test for the login
  - in the tests you will mock server response
  - create a test with success server response
  - create a test with error server response

## NgModules structure

The structure of your app folders should be the following:

- src
  - app
  - common
  - todo
  
You app will contain 3 `NgModule`:

- `AppModule` - contains the root module which will have the root component (`AppComponent`) the layout of the app, and the `HomePageComponent`.
- `CommonModule` - contains common `imports` that are shared between modules
- `TodoModule` - lazy loaded module that contains the `TodoListPage` page and service to query the server `TaskService`

## AppComponent

- src
  - app
    - header
	  - header.component.ts
    - app.component.ts
	
`AppComponent` should place a `HeaderComponent` that will display top bar with a navigation bar and the logo of the app.  
The `AppComponent` should also place the `<router-outlet>` directive

## HomePageComponent

- src
  - app
    - home-page
	  - HomePageComponent.ts
	- user.service.ts
	  
this component will place the `LoginComponent`, attach an event to the `@Output` of that component (the output is attached to the submit event) and send the following login request:

```
url: 'https://academeez-login-ex.herokuapp.com/api/users/login'
method: 'POST'
body: {
	email: 'yariv@nerdeez.com',
	password: '12345678'
}
headers: {
	Content-Type: 'application/json'
}
```

Sending that request with the credentials above will return this response:

```
{
	token: 'some jwt token'
}
```

You need to grab the token and save that token in `localStorage`

## @yael/auth

### LoginComponent

This component should be in the 

- apps
  - yael
    - auth
      - src
	    - login.component.ts


- create a form using `ReactiveForms` that contains an email field, and a password field.
- Add validation to the form fields.
- The form submit button should be disabled until the form is valid.
- The component will have an `@Output` that is emitted when the form pass validation and submits.
- The component will have an `@Input` to pass errors (after the server call)

### JWTInterceptor

- apps
  - yael
    - auth
	  - src
	    - jwt.interceptor

Create an interceptor that will check if `localStorage` has a `token` key, and if the `token` key exists, will grab it's value and create the header:

```
Authorization: Bearer <token grabbed from localStorage>
```

### AuthInterceptor

- apps
  - yael
    - auth
	  - src
	    - auth.interceptor

if getting from server a response with status code of `401`, the interceptor will use the `Router` to navigate the user back to the `HomePageComponent`.

## @ngrx/*

The application data will be managed using the `@ngrx/*` packages.  
You have to use `@ngrx/data` package to query the todo api and place them in the state

## TodoModule

- src
  - todo
    - todo.module.ts
	
- This module will be lazy loaded when entering the url: `/todo`
- contains one route to display a list of todo items that are grabbed from a server

### TodoListPageComponent

After the user logs in, he will be directed to this page.  
The page will query the server to get a list of todo items to place on the screen.  
To query the server you will have to use `@ngrx/data`.  
The API for grabbing the tasks is restricted and you have to send the request with a valid token.  
Example of the request:

```
url: 'https://academeez-login-ex.herokuapp.com/api/tasks'
method: 'GET'
headers: {
	Authorization: Bearer <the token i got in the login>
}
```

After you are finished you can submit the task to be code reviewed in the following mail: `yariv@nerdeez.com`