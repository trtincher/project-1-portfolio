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
		let $p = $('<p>');
		$p.text(
			'Cache LLVM OTP homebrew minification observer pattern compilation casting parent. Infrastructure dependency injection imagemagick domain specific language strongly typing contribute. Developer avocado test double domain UX site reliability engineer npm ELF optimize backend.'
		);
		$content.append($p);
		$p.addClass('backgroundColor');
		$homeIcon = $('<i>').addClass('fas fa-home');
		$content.append($homeIcon);
	});
});
