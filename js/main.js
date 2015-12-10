$(function() {
	$('.gallery').each(function() {
		$(this).find('img').each(function() {
			var img = $(this);
			var div = $('<div class="gallery__image"></div>');
			div.css('background-image', 'url(' + img.attr('src') + ')');
			img.wrap(div);
			img.remove();
		});
	});
});