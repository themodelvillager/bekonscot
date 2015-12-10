$(function() {
	$('.gallery').each(function() {
		$(this).find('img').each(function() {
			var img = $(this);
			var div = $('<div class="gallery__item"><a class="gallery__image" href="' + img.attr('src') + '"></a></div>');
			img.wrap(div);
		});
	});
	$('.breadcrumb').each(function() {
		var links = $(this).find('a');
		if (links.length == 1) {
			$(this).css('visibility', 'hidden');
		}
	});
});