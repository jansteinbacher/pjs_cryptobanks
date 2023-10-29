# Projektseminar Cryptobanks

**E-Learning Plattform für Bankmitarbeitende zum Thema Kryptoassets.**

**Die Seite ist über Netlify deployed und kann über diesen Link abgerufen werden: [Zur Webseite](https://bucolic-stardust-2f7b6f.netlify.app)**

###### von Konstanze Lang, Celina Fitzpatrick, Tim Thorwart-Gumpert und Jan Steinbacher


#### Table of Contents
- Einführung
- Übersicht über die Projektstruktur
- How to use the website





## Einführung
Die E-Learning-Plattform ist ein Projektseminar am Lehrstuhl für BWL und Wirtschaftsinformatik von Prof. Dr. A. Winkelmann an der Universität Würzburg. Sie hat zum Ziel, Bankmitarbeiter ein umfassendes Verständnis für die Integration von Kryptoassets in herkömmliche Bankensysteme zu vermitteln. 
Zur Erstellung der Webseite wurden [React](https://react.dev), [TailwindCSS](https://tailwindcss.com), [Airbnb Sytle Guide](https://airbnb.io/javascript/react/), [husky](https://typicode.github.io/husky/), [Prettier](https://prettier.io), [EsLint](https://eslint.org), [GNews API](https://gnews.io), [Netlify](https://www.netlify.com), [Dall-E 3](https://openai.com/dall-e-3) und [ElevenLabs](https://elevenlabs.io) verwendet.

## Übersicht über die Projektstruktur

- [App.jsx](src/App.jsx): Enthält alle permanenten Elemente (NavigationBar & Footer), sowie die Links zu den jeweiligen Seiten.
- [components](src/components): Enthält alle Komponenten der Webseite.
  - [LearningUnit](src/components/LearningUnit): Enthält die Kursinhalte aufgeteilt auf einzelne Artikel. Jeder Unterordner von LearningUnit enthält einen Artikel (unterteilt in kurze     einzelne Abschnitte und die Komponente, die einen eigenen Artikel unter dessen Link darstellt).
  - [Course](src/components/Course): Enthält die einzelnen Kurse.
    - [CourseBeginner](src/components/Course/CourseBeginner): Enthält eine [Einführungsdatei](src/components/Course/CourseBeginner/CourseBeginnerIntroduction.jsx), den Inhalt über           eine [Moduldatei](src/components/Course/CourseBeginner/CourseBeginnerModule.jsx), und die [Abschlussseite](src/components/Course/CourseBeginner/CourseBeginnerEnd.jsx)
  - [IndividualLearningPlan](src/components/IndividualLearningPlan): Enthält die Komponenten für den individuellen Lernplan, bei der ein [Modulkomponent](src/components/Module) den        Antworten auf die Fragen entsprechend gefüllt wird.
  - [Module](src/components/Module): Enthält die Komponente, die mit verschiedenen Artikeln aus [LearningUnit](src/components/LearningUnit) befüllt werden kann und einen Kursabschnitt     darstellt.
    - [Module.jsx](src/components/Module.jsx): Enthält die fertige Komponente und wird mit den Sections (Artikel) und einem pagePath befüllt.
    - [CompletionRedirect.jsx](src/components/CompletionRedirect.jsx): Enthält die Links, zu denen am Ende eines Kurses gesprungen wird (abhängig des übergebenen pagePath).
    - [NavigationButton.jsx](src/components/NavigationButton.jsx): Enthält die Logik der "Weiter" und "Zurück" Buttons unterhalb der Artikel.
    - [ProgressBar.jsx](src/components/ProgressBar.jsx): Enthält die Fortschrittsanzeige über dem jeweiligen Artikel / Kurs.
    - [RewardBanner.jsx](src/components/RewardBanner.jsx): Enthält den Banner, der kurz eingeblendet wird, sobald ein Artikel abgeschlossen wird.
  - [News](src/components/News): Enthält die einzelnen Komponenten für die News Seite. Abfrage der News passiert über die [GNews API](https://gnews.io)
  - [Overview](src/components/Overview): Enthält die Übersichtsseite mit der Logik, um einzelne Artikel zu suchen
    - [Quiz](src/components/Quiz): Enthält die einzelnen Komponenten für ein Quiz. 
    - [Quiz.jsx](src/components/Quiz/Quiz.jsx): Enthält die anderen Komponenten des Ordners und setzt diese zusammen.
    - [QuizProgress.jsx](src/components/Quiz/QuizProgress.jsx): Zeigt den Fortschritt in einem Quiz an
    - [QuizQuestion.jsx](src/components/Quiz/QuizQuestion.jsx): Enthält die Logik für das Anzeigen der einzelnen Fragen.
    - [QuizResult.jsx](src/components/Quiz/QuizResult.jsx): Enthält das Resultat der beantworteten Fragen.
  - [Sources](src/components/Sources): Enthält die Quellenkomponente, die am Ende eines Artikels angezeigt wird.




## How to use the website

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
