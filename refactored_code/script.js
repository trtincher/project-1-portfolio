$(() => {
	//sheetUrl is shared url...anyone with that url canopen teh sheet in google sheets
	const sheetUrl =
		'https://docs.google.com/spreadsheets/d/1FlYxWf-DCBFPt55fm0Hyu5pLr2dgCr2RqA1LKfahF-A/edit?usp=sharing';

	//sheetAsJSON is how we will pull the data as JSON (javascript object notation)
	const sheetAsJSON =
		'https://spreadsheets.google.com/feeds/list/1FlYxWf-DCBFPt55fm0Hyu5pLr2dgCr2RqA1LKfahF-A/od6/public/values?alt=json';

	//.ajax returns a Promise and a Promise is resolved using .then()
	$.ajax({
		url: sheetAsJSON
	})
		.then((data) => {
			console.log('data', data);
			const projects = data.feed.entry.map((project) => {
				return {
					title: project.gsx$title.$t,
					description: project.gsx$description.$t,
					image: project.gsx$image.$t,
					url: project.gsx$url.$t
				};
			});
			makeProjectCards(projects);
		})
		//.catch ment to handle erros
		.catch((err) => console.log('err', err));

	//Function to make Project Cards
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

	$('nav  button').on('click', () => {
		$('nav').toggleClass('open');
	});

	$(window).on('resize', () => {
		if (window.innerWidth > 768) {
			$('nav').removeClass('open');
		}
	});

	$('.slideButton').on('click', () => {
		$('footer').toggleClass('footerOpen');
	});
});
