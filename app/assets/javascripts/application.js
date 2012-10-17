// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

	var url = window.location.href;
	url = url.substr(url.lastIndexOf("/") + 1);
	$('#main-nav ul li a.active').removeClass('active');
	$("#main-nav ul li").find("a[href='/" + url + "']").addClass("active");

	if (url == ''){
		$('body').css({'background':'#88cccd', 'background-image':'url(/assets/bkgtexture.png)', 'background-repeat':'no-repeat'});
	}else if (url == 'mistery_box'){
		$('body').css('background','#d04524');
	}else if (url == 'store'){
		$('body').css('background','#DDD');
	}

	$('#main-nav ul li a').click(function(e){
		if ($(this).hasClass('active')){
			e.preventDefault();
		}
	});
});