$(document).ready(function(){  
	$(".btnPop").click(function(){
		loadPopup();
		// tracking code for video
		var eventReg = $(this).attr('rel');
		if(eventReg!=""){
			if(typeof s_gi == 'function') {
				var eventTitle = $(this).attr('title');	
				var s=s_gi('carfaxcom');
				s.linkTrackVars='events';
				s.linkTrackEvents= eventReg;
				s.events=eventReg;
				s.tl(this,'o',eventTitle);	
			}
		}
	});
	
	$(".closeModal").click(function(){
		disablePopup();
	});
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});
		
}); 

var popupStatus = 0;  
function loadPopup(){
	if(popupStatus==0){
			centerPopup();
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn(600, loadModal());
		
	}
}
function loadModal(){
	if (swfobject.hasFlashPlayerVersion("6")) {
		var att = { data: vhpaTutorialSwf, width:"518", height:"308" };
		var par = { menu:"false", wmode: "transparent", flashvars:"clipurl="+tutflv};				
				var id = "flashcontent";
				swfobject.createSWF(att, par, id);
				centerPopup();
	}
	popupStatus = 1;
	$("#modal").fadeIn();
}
function disablePopup(){
	$("#modal").hide();
	if(popupStatus==1){
		swfobject.removeSWF("flashcontent");
		$("#flashph").append('<div id="flashcontent"></div>');
		$("#backgroundPopup").fadeOut();
		popupStatus = 0;
	}
}

function centerPopup(){
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var scrolladj = $(window).scrollTop();
	var popupHeight = 310;
	var popupWidth = $("#modal").width();
	//centering
	$("#modal").css({
		"position": "absolute",
		"top": (windowHeight/2-popupHeight/2)+scrolladj,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
}