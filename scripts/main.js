$(document).ready(function () {
	$('#image2').hide();

	$('.navbarPlaceholder').load("navbar.html");

	$('#13thwitness1').hover(function () {
		$('#image1').show();
		$('#image2').hide();
	});

	$('#13thwitness2').hover(function () {
		$('#image2').show();
		$('#image1').hide();
	});
});