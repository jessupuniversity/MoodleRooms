$('header.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
$('.right a .one').attr('src', 'https://jessupuniversity.github.io/img/view_topic.png');
$('span.arrow.sep').text('›');
$('.block_conduit li:first-child .icon img').attr('src', 'http://jessup.mrooms.net/theme/image.php/clean/core/1427737283/i/report');
$('.block_conduit .r1 .icon img').attr('src', 'http://jessup.mrooms.net/theme/image.php/clean/core/1427737283/i/settings');

if( $('#page-header h1').text() != 'WJU Online Learning'){
	$('#page-header h1').addClass('show');
}

var backgrounds = [
	'url(https://jessupuniversity.github.io/img/wjuMoodleHeader01.jpg)', 
	'url(https://jessupuniversity.github.io/img/wjuMoodleHeader02.jpg)', 
	'url(https://jessupuniversity.github.io/img/wjuMoodleHeader03.jpg)'
];
var index = Math.floor(Math.random() * (3 - 0)) + 0;

$('#page-site-index #page-header h1').css('background-image', backgrounds[index]);
//$('#page-mod-turnitintooltwo-view #accreditation, #page-mod-turnitintooltwo-view #footer-credits').remove();
