# Project Overview
https://git.generalassemb.ly/trtincher/project-1-portfolio.git
## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| MVP & Bug Fixes | Complete
|Day 4| Final Touches | Complete
|Day 5| Present | Incomplete


## Project Description

https://brittanychiang.com/#about I like this simple clean design with small color pallet using one color for highlights and the rest is in black and grey.

## Google Sheet

[My Google Prject Sheet](https://docs.google.com/spreadsheets/d/1FlYxWf-DCBFPt55fm0Hyu5pLr2dgCr2RqA1LKfahF-A/edit?usp=sharing) 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://i.imgur.com/34kk8zV.png)
- [Tablet](https://i.imgur.com/LElsAOX.png)
- [Desktop](https://i.imgur.com/LElsAOX.png)

## Time/Priority Matrix 

[Travis Tincher Project 1 Time/Priority Matrix](https://i.imgur.com/8ZI42Ik.png)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- HTML Formating Mobile
- HTML Formating Tablet
- HTML Formating Desktop
- Css Styling Mobile
- Css Styling Tablet
- Css Styling Desktop
- Json Api Pull
- Render Elements with Json Mobile
- Render Json Tablet
- Render Json Desktop
- Working Links in NavBar and Footer

#### PostMVP 

- Animations/Transitions

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Mobile | H |  1hr | :---: | 1hr|
| HTML Tablet | H |  .2hr | :---: | .2hr |
| HTML Desktop | H |  .2hr | :---: | .2hr |
| Css Mobile | H |  3hr | :---:| 4hr|
| Css Tablet | H |  1hr | :---: | 1.5hr |
| Css Desktop | H |  1hr | :---: | 1.5hr |
| Responsive | H | 2hr | :---: | 5hr|
| Hamburger | H | 1hr | :---: | 1.5hr|
| Sliding Nav | H | 1H | :---: | 1.5hr|
| Sliding Contacts | H | 2H | :---: | 2hr|
| Import JSON/Render API | H | 3hrs| :---: | 2hr |
| Project Css/Responsive | H | .5hrs| :---: | .5hr |
| Social Media Icons | H | 1hr | :---: | .5hr|
| Total | H | 14.7hrs| :---: | 30.6hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | :---: | 2hr|
| Bootstrap | L | 4hr | :---: | 1hr|
| Total | L | 10hrs| :---: | 3hrs |

## Additional Libraries
 - Bootstrap (Did not end up using in final version)
 - JQuery
 - Font Awesome

## Code Snippet

The two primary jQuery funcitons one for populating and rendering teh cards and on for the side nav bar and contact bar took the most conceptual work.

```
	//Project Card Maker function
	function makeProjectCards(projectsArr) {
		projectsArr.forEach((project) => {
			//make project Card
			let projectCard = $('<div>');
			projectCard.addClass('projectCard');
			projectCard.html(
				`<div class="projectAnchorDiv">
					<a class="projectAnchor" href="${project.url}">${project.title}</a>
					<a class="projectLinkIcon" href="${project.url}"><i class="fas fa-external-link-square-alt"></i></a>
				</div>
				<h3 class="projectDescription">${project.description}
				<img class="projectImg" src="${project.image}" alt="projectimg">`
			);
			$('#portfolioContent').append(projectCard);
		});
	}
	//************************************************
	//nav bar slider (this piece was given in lecture)
	//*************************************************
	$('nav  button').on('click', () => {
		$('nav').toggleClass('open');
	});

	$(window).on('resize', () => {
		if (window.innerWidth > 768) {
			$('nav').removeClass('open');
		}
	});
	//*************************************************
	//contact form slider (this piece was my adaptation)
	//same idea but required some thinking and research
	//to figure out how to slide from other direction
	//really helped me understand how it works
	//*************************************************
	$('.slideButton').on('click', () => {
		$('footer').toggleClass('footerOpen');
	});
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: Didn't save the exact error but a syntax error with (minwidth: 768)                               
**RESOLUTION**: Missing px after number
