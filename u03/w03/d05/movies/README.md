# Movies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Features

I have made several changes to the original db.json file. Now all movies are in a single array ('movies'), and during registration, users can select their preferred genres. These genres are dynamically created as checkboxes based on the genres present in the database. Using each user's preferred genres, a list of movies that they might like is shown upon login. Additionally, based on the overall number of times a movie is selected as a favorite by various users, a "Top-rated Movies" list is generated. This list is displayed to all users, with only movies having an above-average global favorite count included.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
