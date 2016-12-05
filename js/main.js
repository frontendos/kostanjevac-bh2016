
$( document ).ready(function() { 
	$('.js__person__vote').click(function() {
		$('.js__person__vote').addClass('hide');
		$('.js__person__results').addClass('show');
		$('.js__person__1').addClass('bg--green');
		$('.js__person__2').addClass('bg--red');
	});
});