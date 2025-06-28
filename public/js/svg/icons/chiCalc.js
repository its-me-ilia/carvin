
function calcNew(myBase){
	var newTotal;
	var newBase = Math.abs(parseInt(stripEntry(myBase.value)));
	var newVal = addCommas(newBase + CHIamount);
	hideEntryBlock();	
	newTotal = (newVal != 'NaN')? newVal : '0';
	$('#total').text(newTotal);
	myBase.value = (addCommas(newBase) != 'NaN')? addCommas(newBase) : '';
	if(myBase.value == ''){resetVhpaInputField();}
}
function addCommas(nStr){
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
function stripEntry(ns) {
    var re = /^\$|,/g;
    return ns.replace(re,"");
}
function clearVhpaInputField(){
	if($('#base').attr('value') == '0'){
		$('#base').attr('value', '');
		$('#base').attr('maxlength', 7);
	}
}
function resetVhpaInputField(){
	$('#base').attr('maxlength', 7);
	$('#base').attr('value', '0');
	$('#base').blur();
	showEntryBlock();
}
function showEntryBlock(){
	$('#adjustedRetailText').html(box3Body);
	$('#adjustedRetailResultLabel').html("");
	$('#adjustedRetailText').removeClass('inputElements');
	$('#adjustedRetailText').addClass('noEntryMsg');
	$('#c3').addClass("preEntry");
}
function hideEntryBlock(){
	$('#adjustedRetailText').html('$<span id="total">999</span>');
	$('#adjustedRetailText').addClass('inputElements');
	$('#adjustedRetailText').removeClass('noEntryMsg');
	$('#adjustedRetailResultLabel').html(box3Title);
	$('#c3').removeClass("preEntry");
}

$(window).load(function(){
	resetVhpaInputField();
});

$(function() {
	$("#lhAdj").html(chiConnected);
	$("#chiVidTab").hover(
		function(){$(this).attr("src", mediaContentPath + "/vidtab_green.gif")},
		function(){$(this).attr("src", mediaContentPath + "/vidtab_blue.gif")}
	);
	chifading = false;
	$("#chiRow").click(function(){
		if(!chifading){
			chifading = true;
			$("#chiAdjBlock").css("background-color", "#fff1a8")
			$("#chiAdjBlock").animate({backgroundColor: "#ffffff"}, 2500, function(){
				chifading=false;
			});
		}
	});
	$("#chiRow").hover(
			function(){headerMO("#"+$(this).attr("id"), chiHdrText); },
			function(){$("#chiInfo").hide();}
	);
});

function headerMO(myElement, elementText){
	var windowWidth = document.documentElement.clientWidth;
	var moText = elementText;
	$("#vfContent").html(moText);
 	var offset = $(myElement).offset();
	var moTop = $(myElement).offset().top +37;
	var moLeft = $(myElement).offset().left - 72;
	$("#chiInfo").css('top', moTop);
	$("#chiInfo").css('left', moLeft);	
	$("#chiInfo").fadeIn();
}
