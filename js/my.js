function checkSlide(imgs) {
	let newSrc = $(imgs).find("img").prop('src');
	$(".fullImage").prop('src', newSrc);
	$(".thumbs li").removeClass('active');
	$(imgs).addClass('active');


	let optSelected = $(imgs).find("img").prop('alt');
	let optArr = [];
	for (i = 0; i < $("option").length; i++) {
		optArr.push($("option")[i]);
	}
	for (j = 0; j < optArr.length; j++) {
		if (optSelected == $(optArr[j]).prop('value')) {
			$(optArr[j]).prop('selected', 'selected');
		}
	}
}

function changeOption() {
	let select = $("select").prop('selectedIndex');
	let imgArr = [];
	for (i = 0; i < $(".thumbs img").length; i++) {
		imgArr.push($(".thumbs img")[i]);
	}
	for (j = 0; j < imgArr.length; j++) {
		if (j == select) {
			let newSrc = $(imgArr[j]).prop('src');
			$(".fullImage").prop('src', newSrc);
			$(".thumbs li").removeClass('active');
			$(imgArr[j]).parent("li").addClass('active');
		}
	}
}

function increaseImg() {
	$(".fullImage").css('transition-duration','1s').css('transform','scale(1.5, 1.5)');
	$("audio").trigger('play');
};

function decreaseImg() {
	$(".fullImage").css('transform','scale(1, 1)');
}


