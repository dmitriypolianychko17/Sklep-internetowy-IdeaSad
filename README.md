# IdeaSad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Cel projektu:

Celem projektu jest utworzenie aplikacji webowej, a szczególnie sklepu online, ponieważ zakupy w sieci stają coraz bardziej popularne. Aplikacje webowe dzięki swojej uniwersalności obslugują wiele urządzeń takich jak smartfony, laptopy, tablety i komputery stacjonarne.

## Wykorzystane środowiska:

Aplikacja została napisana z użyciem frameworku Angular.io (dynamika na stronie klienta i administratora). Baza danych została wykonana w jednej z najnowszych narzędzi: Google Firebase, ona została wybrana dzięki swojej ważnej funkcji – możliwości bezpiecznej autoryzacji administratora w danym projekcie. Także oczywiście były wykorzystane pliki html, JavaScript, SCSS,  HTTP zapytania a także technologia ng-bootstrap.

## Logowanie administartora:

Administrator loguje się za pomocą loginu i hasła, po naciśnięciu na przycisk „Zaloguj” informacja idzie do firebase, i w przypadku gdy dane są wpisane poprawnie aplikacja przenosi nas na stronę z tabeła, która przechowywa informacje o dostępnych produktach (drzewach) w sklepie.

Login: administrator@gmail.com 
Hasło: 123456 

![image](https://user-images.githubusercontent.com/61449911/118398462-77a02900-b661-11eb-8490-33aff5889897.png)

![image](https://user-images.githubusercontent.com/61449911/118398471-7e2ea080-b661-11eb-877d-52bca05433ae.png)

Strona logowania zawiera w sobie validatory dla maila (jeżeli nie zostanie wpisana @) i długości hasła (hasło ma być o długości 6 liter albo cyfr).

## Menu administratora:

![image](https://user-images.githubusercontent.com/61449911/118398500-9d2d3280-b661-11eb-90fd-e40d11c3d3ed.png)

Wyżej jest podane menu administratora, po zalogowaniu widzimy tablicę produktów naszego sklepu, każdy produkt można zmienić i usunąc (przechodzimy na stronę edytowania drzewek). Także ta strona zawiera pajpy (pipes) do szybkiego wyszukiwania produktu, i do transformacji typu wyświetlanej daty. 

![image](https://user-images.githubusercontent.com/61449911/118398521-ad451200-b661-11eb-8e48-753cfca2c37c.png)

Strona aktualizacji informacji o drzewie zawiera w sobie formę, w jakiej można zmienić typ drzewa, nazwę, zdjęcie, i informację o drzewie.

![image](https://user-images.githubusercontent.com/61449911/118398526-b504b680-b661-11eb-84c5-8a99706795e9.png)

Strona dodania produktu.

Po przejściu na stronę zamówień my widzimy listę, która zawiera wszystkie informacje o już utworzonych zamówieniach przez klientów. Po naciśnięciu na przycisk „Zrealizowany” my poprostu usuwamy zamówienie, oznacza to że ono jest już zrealizowane przez sklep. Także przy nasiśnięsiu w prawej górnej stronie my wylogujemy jako administrator.

![image](https://user-images.githubusercontent.com/61449911/118398558-d796cf80-b661-11eb-8ab5-db9392194a59.png)

## Menu klienta:

Po naciśnięciu na „IdeaSad” ze strony administratora my przechodzimy do głownej strony (ze strony klienta), która zawiera w sobie już katalog drzewek. Każdy produkt zawiera pod zdjęciem dwa przyciski (otwórz i dodanie do koszyka)

![image](https://user-images.githubusercontent.com/61449911/118398583-f006ea00-b661-11eb-9ac0-83790d095251.png)

![image](https://user-images.githubusercontent.com/61449911/118398592-00b76000-b662-11eb-8442-283d7740c3c2.png)

W pasku navbar istnieją także inne kategorie drzewek (Jabłonie, grusze, czereśnie i wiśnie, morele i śliwy), po kliknięciu na tą kategorie my przechodzimy do katalogu tego typu drzewka, który wkazaliśmy.

Koszyk:

Po naciśnięciu przycisku „Do koszyka” albo po przejściu do kategorii koszyk w navbarze, my przechodzimy do strony koszyka. Koszyk mieści w sobie informację o zamówionych drzewach, także wylicza sumę zamówienia. Potem my przechodzimy do formy „Dane dostawy”, gdzie wpisujemy informację o siebie. Po naciśnięciu na przycisk „Zrealizuj zamówienie” nam wyświetla się informacją, że nasze zamówienie zostało zrealizowane. (Jak pamiętamy potem ono pojawia się w tablicy zamówień, ale to już ze strony sdministratora). 

![image](https://user-images.githubusercontent.com/61449911/118398611-13319980-b662-11eb-9228-5073004a731c.png)

## Uruchomienie projektu

https://console.firebase.google.com/u/1/project/ideasad-3739f/database/ideasad-3739f/data
google account: sklep.IdeaSad@gmail.com
Hasło: Samsung2000













