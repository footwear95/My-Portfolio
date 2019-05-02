var $grid = $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  horizontalOrder: true,
  gutter:'.gutter-sizer'

});

// layout Masonry after each image loads
  $grid.imagesLoaded().progress(function() {
	$grid.masonry();	
});