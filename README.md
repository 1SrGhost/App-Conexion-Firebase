# App-Conexion-Firebase
pasos para conectar el firebase con una aplicación en angular, y algunos servicios base para  consultar, editar o borrar información de la base de datos.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Conf


1/ First, you have to connect your firebase account > `firebase login`

2/ Next, check if the connection is alright (you need to create your project on firebase in a first place to see it in the result) > `firebase projects:list`
 And now you can add the following command > `ng add @angular/fire`
3/ 

![image](https://user-images.githubusercontent.com/26114322/190281368-ec2ad2bb-a4cf-4e9d-814b-d73742570187.png)

select firebase by moving with the up or down arrows and space, then enter to continue

We respond as the case may be, and the necessary files for communication between firebase and the application are automatically updated.
![image](https://user-images.githubusercontent.com/26114322/190281879-854f5fff-42a1-4680-900e-0ca2d7dd8a68.png)

AngularFirestore path


import { AngularFirestore } from '@angular/fire/compat/firestore';

![image](https://user-images.githubusercontent.com/26114322/190282205-f26c481a-4177-46ad-befa-497211529e9d.png)

//

`firebase init`




