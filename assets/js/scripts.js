
// Shuffle function
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

// Mix up list
$('.mix-it-up').click(function(){
	
	// Save list contents
	var myList = [];
	
	$("ul.naughty-list li").each(function(){ 
		myList.push($(this).text()) 
	});
	
	Shuffle(myList);
	
	// Clear list
	$('.output').empty();
	
	// Print as new list
	var vPool="";
	
	jQuery.each(myList, function(i, val) {
		vPool += "<li>" + val + "</li>";
	});

	$('.output').html(vPool);
		vPool="";
});

$('input.add-input');
$('p.add-to-list');

$('p.add-to-list').click(function(){
	
	if ( $('input.add-input').val().length == 0 ) {
		
	}
	
	else {
		newValue = $('input.add-input').val();

		$('ul.naughty-list li:last').after("<li>" + newValue + "</li>");
		$('input.add-input').val("");
	}

});

