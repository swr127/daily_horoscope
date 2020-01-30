# Daily Horoscope Overview

## Project Description

The **Daily Horoscope** is an application that leverages the Astrology API to provide users with their daily horoscope.

Live App: http://daily-horoscope.surge.sh/

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Whiteboard & code core application structure (REACT & CSS) | Complete
|Jan 27th| Fetch data from API & pass data to REACT components | Complete
|Jan 28th| Render data from REACT components onto webpage | Complete
|Jan 29th| Create routes and code CSS styling | Complete
|Jan 30th| Finish MVP and work on Post-MVP | Complete
|Jan 31st| Present | Incomplete

## Priority Matrix

<a href="https://imgur.com/9yuQgia"><img src="https://i.imgur.com/9yuQgia.jpg" title="source: imgur.com" /></a>

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Whiteboard & code app structure (REACT & CSS)  | H | 6hrs| 8hrs | 8hrs |
| Fetch data from API | H | 5hrs| 4hrs | 4hrs |
| Render data on webpage | H | 4hrs| 5hrs | 5hrs |
| Render conditional data on webpage | H | 3hrs| 4hrs  | 4hrs  |
| Create routes | H | 4hrs| 2hrs | 2hrs |
| Add basic CSS styling | M | 6hrs| 6hrs | 6hrs |
| Implement responsive design | M | 5hrs| 5hrs | 5hrs |
| Outsource images for horoscope cards | L | 3hrs| 2hrs | 2hrs |
| Total | H | 36hrs| 36hrs | 36hrs |

## Wireframes

### Homepage 
<a href="https://imgur.com/n7prEW4"><img src="https://i.imgur.com/n7prEW4.png" title="source: imgur.com" /></a>

### Horoscope Details Page
<a href="https://imgur.com/mw12MOR"><img src="https://i.imgur.com/mw12MOR.png" title="source: imgur.com" /></a>

## API Snippet

```
{
    "sign": "aquarius",
    "date": "2020-01-28",
    "horoscope": " Are you trying to make a decision? If it's taking too long for your liking, or if other people are pushing you to hurry up already, then you have to do what it takes to figure things out today. First, stop trying to see things so completely. Narrow your focus! You can't explore all ways of doing something. You have to pick just a few possibilities and flesh them out in your mind. Give up on the idea that the perfect answer is out there, because it's not. Close enough is good enough."
}

```

## MVP

- Create REACT app with at least:
	- Six components
	- A conditionally rendered component
	- Two functional routes
- Fetch and use Astrology API
- Render Astrology API data on page 
- Allow user to click on horoscope card and read their daily horoscope
- Styled with responsive design 

## Post-MVP

- Add social media share functionality to horoscope cards 
- Add advanced CSS features to the horoscope cards based on user interaction (i.e. hover animations)

## React Component Hierarchy

<a href="https://imgur.com/rLhnDex"><img src="https://i.imgur.com/rLhnDex.jpg" title="source: imgur.com" /></a>

## Components 

| Component | Description | Stateful | Type |
| --- | --- | --- | --- |
| App.js | The App component hosts the axios API call and sets state. It houses the Header, Main, and Footer component, and additionally uses React Router to route to the Main and Profile components. | Y | Class |
| Header.js | The Header component receives props from App to render the nav. It houses the Nav component. | N | Functional |
| Main.js | The Main component receives props from App to render horoscope cards. It houses the Profile component. | N | Funcitonal |
| Profile.js | The Profile component receives props from App to render horoscope details. | N | Functional |
| Nav.js | The Nav component uses React Router to route the user to the Main component. | N | Funcitonal |
| Footer.js | The Footer is strictly a UI component that provides information on the app. | N | Functional |

## Additional Libraries

- React Router Dom
- Axios 

## Issues and Resolutions

I experienced a lot of issues with my original API, and even when I switched to the second API I felt very limited. All of the good astrology APIs required payment, which forced me to work with a free API that had only three data points. This limited the functionality of my app, so I decided to dedicate a lot of my time to styling.

## Code Snippet

This is a fun code snippet that renders a loading GIF until the API call is made and renders data on the page. 

```
{ image ? <img className="Image" src={image} alt={sign}/> : 
<img className="Loading" src="https://i.imgur.com/H2NLeMT.gif" alt="Loading"/> }
}
```

## Change Log
- I changed my third party API from Aztro to Astrology due to limitations with the Aztro API.
- I decided to make my axios call and house state in the Profile component rather than the App component.
- Since I changed where I made my axios call, the Profile component became a class component and the App component became a functional component.