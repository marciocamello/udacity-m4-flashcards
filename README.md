# FlashCards Project 

### UDACITY React Developer

## Description

FlashCards is an application where you can register your decks and add letters with question and answer, 
where the user can start QUIZ and try to hit the correct alterantiva. 
You can create as many decks as you like and add as many cards to the deck as you need. 
At the end of QUIZ you will see the result with the percentage of your hits.

## Features

* List Decks
* Create a new Deck
* Add cards to deck
* Start QUIZ with deck and yours cards
* View your result after finish QUIZ
* Show a correct answer

## Platforms

* Android - tested
* IOS - dont tested

## Expo application

[https://expo.io/@marciocamello/FlashCards](https://expo.io/@marciocamello/FlashCards)

## Developer

### Structure

```
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── App.js # This is the root of your app. Contains static HTML right now.
├── api
│   ├──_DATA.js
│   ├──index.js
├── components 
│   ├── About
│   │   ├──About.js
│   │   ├──styles.js
│   ├── AddCard
│   │   ├──AddCard.js
│   │   ├──styles.js
│   ├── AddCard
│   │   ├──AddCard.js
│   │   ├──styles.js
│   ├── AddDeck
│   │   ├──AddDeck.js
│   │   ├──styles.js
│   ├── ListDecks
│   │   ├──ListDecks.js
│   │   ├──styles.js
│   ├── Main
│   │   ├──Main.js
│   │   ├──styles.js
│   ├── ScoreQuiz
│   │   ├──ScoreQuiz.js
│   │   ├──styles.js
│   ├── ShowDeck
│   │   ├──ShowDeck.js
│   │   ├──styles.js
│   ├── ShowQuiz
│   │   ├──ShowQuiz.js
│   │   ├──styles.js
```

## Instructions to Run Application

### Install Dependencies

```bash
npm i or yarn
```

### Run application

- Development

```bash
npm run start OR yarn start OR expo r -c
```

