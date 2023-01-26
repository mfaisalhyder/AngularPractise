# TypeScript and Angular 15


## Install node:
------------
- https://nodejs.org/en/download/
- Go for LTS (Long Term Support)
- Select Windows Binary (.zip)
- UnZip in any directory, then set this directory in PATH of Environment Variables.
- e.g; D:\Development\node-v18.13.0-win-x64
- Now check; node -v from terminal, you should see version.
- Make sure prefix is correct here; 
- C:\Users\<name>\.npmrc


## Install Typescript:
------------------
- go to CMD of any directory where you want to store typescript.
- e.g; D:\Development\typescript-folder
- type; npm i typescript
- It will download typescript in the folder, now go to this folder e.g; 
- D:\Development\FrontEnd\typescript-4.9.4\node_modules\.bin
- Put above path in PATH of Environment Variables.
- Now check tsc -v from terminal, you should see version.
- ![image](https://user-images.githubusercontent.com/10468224/214754865-93f13e58-5e82-4ac9-a929-39e6faa7bf06.png)


## Install Angular:
------------------
- npm install @angular/cli
- Make sure to check version using 'ng version' from cmd
- ![image](https://user-images.githubusercontent.com/10468224/214754814-c9ba06f8-c1e0-45ca-b90c-d7f8c72749c1.png)


## Concepts/Points/Basics
-------------------------

### SPA - Single Page Application
---------------------------------
- Whole page is not refreshed like in aspx/jsp.
- On URL change page is not refreshed however it changes view as the resource is on the client side.


### SSR - Server Side Rendering
-------------------------------
- Angular has its own routing library; Angular/router
- Full reload does not happen.
- However partial reload of the view happens.


### Package Managers
--------------------
npm
yarn
pnpm


### Why node is required for Angular?
------------------------------------
- Node provides a lightweight web server to spin up the Angular Application.
- Node provides npm (comes by default with node) which manages all the dependencies of the application.
- npm provides Agular CLI which is used to build application easily


### == vs ===
-------------
- Loose equality check vs Strict equality check
- == does type conversion that's why not safe.
- === always returns false for different types.


### Named Function, Arrow Function, Function Expression.
- Optional Parameter can not be declared before a required param.
- Required Parameter can be declared at any position, as it contains a default value.
- Rest Parameter must be the last param of the method.


### Some points to consider
- If a method does not have a return type in signature, but it returns something, then this method will return the value.
- If a method is declared with void return type, then adding a return statement gives CTE.
- If arg-constructor is defined, then declaring a no-arg constructor will give CTE.
- Declaring a function inside a class does not need function keyword, it gives CTE.

- When a method (named function) is bound to the prototype, only one instance of that method is ever created, and is executed contextually by the caller instance.

- When using closures, the method (arrow function) is created per-instance and enclosed within the constructor function. Closure based methods have the advantage of being able to access private instance members outside the scope of their execution, which is not possible with prototype bound methods, however prototype bound methods tend to perform better.

- If no datatype is assigned to a variable then it becomes any, which we should avoid.


### To make a class property optional, put !
	- e.g: address!: string;


### # or private keyword to declate state as private. Accessible only inside the class
	- e.g: #id: number;


### To make an interface property optional, put ?
	- e.g: export interface User { id: number; age?: number; }


### CS Modules: declare objects with export, so they can be used outside that class. where we need to use, we need to import.


### interfaces and class
- Use classes when we want to retain the Type and interfaces when we don't.
- JavaScript does not have interface.
- It is advised to use class.


### Decorator
-------------
- It is an experimental feature. It is used interanlly by Angular. It is used to change behaviour of propterty, method or class at runtime.
- @NgModule, @Component


### some important properties in tsconfig.json;
	- noEmit = no output on transpiling ts files
	- outDir = output directory for js files
	- sourceMap = for debugging TS files in browser


### tsconfig.spec.json and tsconfig.app.json
- both extend tsconfig.json, 1 is used in test case compilation, 2 is used in application code compilation.


### package-lock.json
- it needs to be updated incase any packages are updated. It is used in CI processes.


### mono-repo:
- single repository/workspace with multiple projects/libraries. e.g., Admin Module and Customer Application in same workspace.


### declarations:
- [any directives, components, pipes need to be added here]


### imports:
- [any angular module to be used, needs to be added here as well]


### bootstrap:
- [Component, angular needs to know which component is to load first]


### @NgModule:
- angular needs at least 1 root module, that is why we use a Decorator @NgModule which tells Angular that our application used which components.


### @Component:
- angular also needs at least 1 root component. Component is a view that is rendered to the end user.
- With each component, we need 4 files;
	- app.component.ts
	- app.component.spec.ts
	- app.component.scss
	- app.component.html


### Why do we use prefix?
- To avoid conflict with any other tag, native, html or any library.


### Syntax Binding
- Interpolation
    - We can use Interpolation for basic Datatypes or even object
    - <p> Welcome, to <b>{{hotelName}} </b> <br /> {{hotelAddress}}, {{hotelPostalCode}}</p>

- Property Binding
    - It is to be used with a valid property of any valid HTML tag.
    - box syntax []
    - "<div [innerText]="hotelName"></div>"

- Event Binding
    - To interact with end user like to save, submit, toggle, etc
    - <button (click)="anyFunctionName()">I do magic!!</button>


### Directives
--------------
- A reusable function that can change the behaviour or appearance of a dom element.
- It can implement all lifecycle hooks.
- It does not have a template. It just contains logic.
	- Structural Directives:
		a- these are costlier, because they change/modify/add or remove the element in a DOM.
		b- can be identified with *, like; *ngIf, *ngFor, *ngSwitch
	- Attribute Directives:
		a- can modify/add/remove properties of an element or add some logic to it, but cant remove it from the DOM.

### Pipes
---------
- Used to transform the data at runtime.
- number pipe, uppercase pipe, lowercase pipe, titlecase pipe, currency pipe, date pipe, json pipe



### Some useful commands;

- ng new appName
- ng generate component componentName
- ng new appName --prefix prefixYouWantToUseInsteadOfDefault-app

To up and run the application:
- ng serve -o
