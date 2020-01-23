# Daily Horoscope Overview

## Project Description

The **Daily Horoscope** is an application that leverages the Aztro API to provide users with their daily horoscope.

Live App: TBC!

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Whiteboard & code core application structure (REACT & CSS) | Incomplete
|Jan 27th| Fetch data from API & pass to data to REACT components | Incomplete
|Jan 28th| Render data from REACT components onto webpage | Incomplete
|Jan 29th| Create routes and code CSS styling | Incomplete
|Jan 30th| Finish MVP and work on Post-MVP | Incomplete
|Jan 31st| Present | Incomplete

## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Whiteboard & code app structure (REACT & CSS)  | H | 6hrs|  |  |
| Fetch data from API | H | 5hrs|  |  |
| Render data on webpage | H | 3hrs|  |  |
| Render conditional data on webpage | H | 2hrs|  |  |
| Create routes | H | 4hrs|  |  |
| Add basic CSS styling | H | 4hrs|  |  |
| Implement responsive design | H | 5hrs|  |  |
| Outsource images for horoscope cards | H | 5hrs|  |  |
| Total | H | 30hrs|  | |

## Wireframes

Display all wireframes here with any neccessary descriptions.

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
- Render data on page 
- Allow user to click on horoscope card and read their daily horoscope
- Styled with responsive design 

## Post-MVP

- Add social media share functionality to horoscope cards 
- Add advanced CSS features to the horoscope cards based on user interaction (i.e. hover animations)

## React Component Hierarchy

Include an image of your component hierarchy that shows the data flow and architectural design of your app.

## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component | Description |Type |
| --- | --- | --- |
| Header | The Header receives props that render multiple nav titles and links | Functional |
| Main | This component houses multiple rendered views through React Router and controls data received from the initial API call in state | Class |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

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
