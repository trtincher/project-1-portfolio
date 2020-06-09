//sheetUrl is shared url...anyone with that url canopen teh sheet in google sheets
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1FlYxWf-DCBFPt55fm0Hyu5pLr2dgCr2RqA1LKfahF-A/edit?usp=sharing';

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
		projectCard.addClass('card');
		//make project Img
		let projectImg = $('<img>');
		projectImg.addClass('card-img-top');
		projectImg.attr('src', project.image).attr('alt', 'project image');
		//append Img to Card
		projectCard.append(projectImg);
		//make project title
		let projectTitle = $('<h3>');
		projectTitle.addClass('card-title');
		projectTitle.text(project.title);
		//append title to card
		projectCard.append(projectTitle);
		//make URL icon
		let projectAnchor = $('<a>');
		projectAnchor.attr('href', project.url);
		projectAnchor.html('<i class="fas fa-external-link-alt"></i>');
		projectAnchor.addClass('card-title text-right');
		//append URL icon to card
		projectCard.append(projectAnchor);
		//append card to Portfolio Body
		$('#portfolioBody').append(projectCard);
	});
}

const $content = $('.content');
const $about = $('#about');
const $experience = $('#experience');
const $portfolio = $('#portfolio');
const $contact = $('#contact');

const contentArr = [ $about, $experience, $portfolio, $contact ];

contentArr.forEach((element, index) => {
	element.on('click', () => {
		$content.empty();
		$content.addClass('infoFormat');
		$content.append(element);
	});
});
