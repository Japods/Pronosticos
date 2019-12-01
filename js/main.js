$(document).ready(function() {
	setTimeout("fade()", 3000)
});

function fade() {
	$(".loader").css("display", "none");
}

$(window).on("scroll", function() {
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $('.markers').css('display', 'none');
    } else {
    	$('.markers').css('display', 'block');
    }
});