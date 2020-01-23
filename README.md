# Daily Horoscope Overview

## Project Description

The **Daily Horoscope** is an application that leverages the Aztro API to provide users with their daily horoscope.

Live App: TBC!

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Whiteboard & code core application structure (REACT & CSS) | Incomplete
|Jan 27th| Fetch data from API & pass data to REACT components | Incomplete
|Jan 28th| Render data from REACT components onto webpage | Incomplete
|Jan 29th| Create routes and code CSS styling | Incomplete
|Jan 30th| Finish MVP and work on Post-MVP | Incomplete
|Jan 31st| Present | Incomplete

## Priority Matrix

<a href="https://imgur.com/9yuQgia"><img src="https://i.imgur.com/9yuQgia.jpg" title="source: imgur.com" /></a>

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Whiteboard & code app structure (REACT & CSS)  | H | 6hrs|  |  |
| Fetch data from API | H | 5hrs|  |  |
| Render data on webpage | H | 3hrs|  |  |
| Render conditional data on webpage | H | 2hrs|  |  |
| Create routes | H | 4hrs|  |  |
| Add basic CSS styling | M | 3hrs|  |  |
| Implement responsive design | M | 4hrs|  |  |
| Outsource images for horoscope cards | L | 3hrs|  |  |
| Total | H | 30hrs|  | |

## Wireframes

### Homepage 
<a href="https://imgur.com/n7prEW4"><img src="https://i.imgur.com/n7prEW4.png" title="source: imgur.com" /></a>

### Horoscope Details Page
<a href="https://imgur.com/mw12MOR"><img src="https://i.imgur.com/mw12MOR.png" title="source: imgur.com" /></a>

## API Snippet

```
{
    "date_range": "Jan 20 - Feb 18",
    "current_date": "January 24, 2020",
    "description": "Just in time for the weekend, you've been inspired in the department of romance. You're in the mood to try anything at least once, and any lucky companion won't think twice about going along with whatever you suggest.",
    "compatibility": "Virgo",
    "mood": "Curious",
    "color": "Purple",
    "lucky_number": "13",
    "lucky_time": "5am"
}

```

## MVP

- Create REACT app with at least:
	- Six components
	- A conditionally rendered component
	- Two functional routes
- Fetch and use Astro API
- Render Astro API data on page 
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

Use this section to list of all major issues you anticipate encountering during development and how you plan to tackle them. Be sure to update this section during development, documenting the actual resolutions you inacted, as well as any other unexpected obstacles you encountered along the way.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
