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
selecciona firebase moviendose con las flechas arriba o abajo y espacio, luego enter para continuar
respondemos segun sea el caso, y automaticamente se actualizan los archivos necesarios para la comunicacion entre firebase la aplicacion.
![image](https://user-images.githubusercontent.com/26114322/190281879-854f5fff-42a1-4680-900e-0ca2d7dd8a68.png)

ruta del AngularFirestore

import { AngularFirestore } from '@angular/fire/compat/firestore';

![image](https://user-images.githubusercontent.com/26114322/190282205-f26c481a-4177-46ad-befa-497211529e9d.png)

//

4/ Then, you need to initialize firebase > `firebase init`

![image](https://user-images.githubusercontent.com/26114322/190281726-049d6018-62ba-495d-bf10-47e3e37175b7.png) // para configurar otros modulos de firestore.



