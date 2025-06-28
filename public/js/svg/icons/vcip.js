function setClassForPrintedPage(page, tab, isActiveClass) {
    switch (page) {
        case 0:
            document.getElementById(tab).className = isActiveClass + "printAllFirstPage";
            break;
        case 1:
            document.getElementById(tab).className = isActiveClass + "printAllSecondPage";
            break;
        default:
            document.getElementById(tab).className = isActiveClass + "printAllOtherPages";
            break;
    }
}

function changeTab(tabRel, tabId){
		$(".tabhover").removeClass('tabhover');
	tabRel = ($('#'+tabRel).length != 0)? tabRel : 'tabvhr';
	$('.tabactive').removeClass('tabactive');
	if($("#"+tabRel).attr("id") != $(".active").attr("id")){
		$(".active").fadeOut(300, function(){
			$(this).removeAttr("style");
			$(this).removeClass("active");
		});
		$("#"+tabId).addClass('tabactive');
		$("#"+tabRel).addClass("active").fadeIn(300, function() {
			$("#bottombracket").scrollTop(0);
		});
		loadPage(tabRel+"_url", tabRel, true);
	}
	window.scrollTo(0, 0);
	
	// tracking code
	trackTabChange(tabId);
}

function trackTabChange(tabId){
	var site = "";
	var event = "";
	var pageName = "";
	if(typeof hbx != 'undefined' && hbx!=null) {
		if(hbx.acct == 'DM500403EKSWDXEN3'){
			site = "carfaxonline";		
			
			if(tabId == 'tab_sbc'){
				event = "event3";
				pageName = "CIP Views Checklist";
			}else if(tabId == 'tab_vhr'){
				event = "event1";
				pageName = 'CIP Views VHR';
			}else if(tabId == 'tab_ws'){
				event = 'event2';
				pageName = 'CIP Views Highlights';
			}else if(tabId == 'tab_wc'){
				event = 'event4';
				pageName = 'CIP Views Warranty';
			}else if(tabId == 'tab_bbg'){
				event = 'event8';
				pageName = 'CIP Views BBG';
			}
			
		}else if(hbx.acct == 'DM59102262ED01EN3'){
			site = "carfaxcom";
			
			if(tabId == 'tab_sbc'){
				event = "event23";
				pageName = "CIP Views Checklist";
			}else if(tabId == 'tab_vhr'){
				event = "event21";
				pageName = 'CIP Views VHR';
			}else if(tabId == 'tab_ws'){
				event = 'event22';
				pageName = 'CIP Views Highlights';
			}else if(tabId == 'tab_wc'){
				event = 'event24';
				pageName = 'CIP Views Warranty';
			}else if(tabId == 'tab_bbg'){
				event = 'event26';
				pageName = 'CIP Views BBG';
			}
		}	
	}
	if ("true" == $('meta[name=subscriberWebsite]').attr("content")) {
		site = "carfaxsubscriberwebsite";
		if(tabId == 'tab_sbc'){
			event = "event45";
			pageName = "CIP Views Checklist";
		}else if(tabId == 'tab_vhr'){
			event = "event43";
			pageName = 'CIP Views VHR';
		}else if(tabId == 'tab_ws'){
			event = 'event44';
			pageName = 'CIP Views Highlights';
		}else if(tabId == 'tab_wc'){
			event = 'event46';
			pageName = 'CIP Views Warranty';
		}else if(tabId == 'tab_bbg'){
			event = 'event47';
			pageName = 'CIP Views BBG';
		}
	}
	if(site!="" && event!="" && pageName!="" && typeof s_gi == 'function') {
		var s=s_gi(site);
		s.linkTrackVars='events';
		s.linkTrackEvents=event;
		s.events=event;
		s.tl(this,'o',pageName);
	}
}

function loadPage(varName, tabName, async) {
	var url = $("#" + varName).text();
	if (url != "") {
		loadPageFromUrl(url, tabName, async);
		$("#" + varName).text("");
	}
}

function loadPageFromUrl(url, tabName, async) {
	if (async) {
		$("#loadingBox").show(500);
	}
	$.ajax({type:"GET", url:url, dataType:"html", async:async, 
		success:function (data) {
		try {
			data = data.replace("src=\"/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://my.carfax.com/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://dvlp.carfax.com/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://alpha.carfax.com/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://www.carfax.com/phoenix/js/lib/jQuery.js\"", "");
			
			data = data.replace("src=\"http://my.carfaxonline.com/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://dvlp.carfaxonline.com/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://alpha.carfaxonline.com/phoenix/js/lib/jQuery.js\"", "");
			data = data.replace("src=\"http://www.carfaxonline.com/phoenix/js/lib/jQuery.js\"", "");
			
			data = data.replace("src=\"http://my.carfax.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			data = data.replace("src=\"http://dvlp.carfax.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			data = data.replace("src=\"http://alpha.carfax.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			data = data.replace("src=\"http://www.carfax.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");

			data = data.replace("src=\"http://my.carfaxonline.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			data = data.replace("src=\"http://dvlp.carfaxonline.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			data = data.replace("src=\"http://alpha.carfaxonline.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			data = data.replace("src=\"http://www.carfaxonline.com/phoenix/js/lib/jquery-1.6.2.min.js\"", "");
			$("#" + tabName).html(data);
			$('body').trigger("tabLoaded_" + tabName);
		}
		catch (e) {
//			alert(e);
		}}, 
		complete:function(jqXHR, textStatus) {
			if (async) {
				$('#loadingBox').hide(500);
		    }
		}
	});
}

function showPrintDialog() {
	if($("input.repchk").length==1)
		window.print();
	else {
		$("#printModal").fadeIn();	
	}
}



function modalsVisible(){
	return ($('#printModal').css('display')=='block')? true : false;
}

//printing
function getActiveTab() {
	return $("a[class='tabactive']");
}

function shouldPrintTab(tabId) {
	return  $("input[name='print_"+tabId+"']").attr("checked")=="checked";
}

function arrangeTabsForPrinting() {
	if(shouldPrintTab("tab_vhr")) { 
		$("#CADPrintBanner").removeClass("cipNoPrint");
	} else {
		$("#CADPrintBanner").addClass("cipNoPrint");
	}
	$("span[class='ciptabs'] a[id^='tab']").each(function() {
		var divId = $(this).attr("rel");
		$("#" + divId).removeClass("printPage cipNoPrint");
		if (shouldPrintTab($(this).attr("id"))) {
			$("#"+divId).addClass("printPage");
		} else {
			$("#" + divId).addClass("cipNoPrint");
		}
	});
	$("div[id^='tab']:not([class='cipNoPrint']):last").removeClass("printPage");
}
function bindPrintLink() {
	$("#printForm").submit(function () {
		if( $("input.repchk:checked").length == 0){
			$("#printError").fadeIn();
		} else{
			$("#printModal").fadeOut(function() {
				$("#printError").hide();
			});
			var loadingBox = $("#loadingBox");
			loadingBox.show(400, function () {
				loadPageForPrintingIfChecked("sbc");
				loadPageForPrintingIfChecked("wc");
				loadPageForPrintingIfChecked("bbg");
				arrangeTabsForPrinting();
				loadingBox.hide();
				window.focus();
				// Firefox 20 does not like calling window.print from within the 'show' callback.
//				window.print()
				setTimeout(function() {window.print()}, 10);
			});
		}
		return false;
	});
}

function loadPageForPrintingIfChecked(tab) {
	if($("input[name*='print_tab_" + tab + "']").is(':checked')){
		loadPage("tab" + tab + "_url", "tab" + tab, false);
	}
}

function CADexists(){
	var a = ($(".cadinfo").length)? true: false;
	return a;
}
function foxDisplayCheck(){
	var a = "none";
	if(CADexists()){
		if( $(window).height()>804 ){
			a = "block";	
		}
	}else if( $(window).height()>500){
		a = "block";
	}
	$("#navfox").css("display",a)
	
}
function updatePanelHeight(){
	var winheight = $(window).height() - 50;
	$("#nav").css("height", winheight);
}

function coolLookingWindowCheck() {
	if(($.browser.msie && $.browser.version=="7.0") || $(window).height() < 618) {
		$("#bottombracket").addClass("scrollingTabs");
		$("#bottombracket").removeClass("fixedTabs");
	} else {
		$("#bottombracket").removeClass("scrollingTabs");
		$("#bottombracket").addClass("fixedTabs");
	}
}

function cipInit(){
	foxDisplayCheck();
	changeTab('tabvhr', 'tab_vhr');
	updatePanelHeight();
	$("input[class='repchk']").prop("disabled", false);
	$("input.repchk").attr("checked", false);
	$("input[name='print_tab_vhr']").attr("checked", true);
	bindPrintLink();
	coolLookingWindowCheck();
	positionShareLinks();
}

//This function is safe to run even if #shareBtn is not on the page.
function positionShareLinks() {
	 var btnOffset = $("#shareBtn").offset();
	 
	 if($("#shareMenu").size() > 0){
		 $("#shareMenu").css("left",btnOffset.left).css("top",btnOffset.top + 37);
	 }
}

$(document).ready(function() { 
	
	//Hides the print button on escape keyboard press
	$(document).keydown(function(e){ 
		var code = (e.keyCode ? e.keyCode : e.which);
		if(code == 27 && modalsVisible()){
			$("#printModal").hide();
		} 
	});

	//The actual tab navigation
	$(".ciptabs a:not(.tabactive)").live('mouseleave', function(){ $(this).removeClass('tabhover'); });
	$(".ciptabs a:not(.tabactive)").live('mouseenter', function(){ $(this).addClass('tabhover'); });
	$(".ciptabs a:not(.tabactive)").live('click', function(){ 
		changeTab($(this).attr("rel"), $(this).attr("id"));
		return false;
	 });

	$(".ciptabs a.tabactive").live('click', function(){ 
		return false;
	});

	//This cancels the URL from loading anything, and allows it to close the window, and then has the code to show/hide the print button
	$(".disabledBtn").click(function(e){
		e.preventDefault();
	});
	$("#cipPrintBtn").live('mouseenter mouseleave', function(event){ $(this).toggleClass('printhover'); });
	
	$("#cipPrintBtn").click(showPrintDialog);
	$("#printFauxLink").click(showPrintDialog);
	
	//Cancel printing
	$("#cancelPrint").click(function(){
		$("#printModal").fadeOut(function() {
			$("input[class='repchk']").prop("disabled", false);
			$("input.repchk").attr("checked", false);
			$("input[name='print_tab_vhr']").attr("checked", true);
			$(".printOption:eq(0)").addClass("printactive");
			$(".printOption:eq(1)").removeClass("printactive");
			$("#printError").hide();
		});	
	});
	
	$(window).resize(function(){
		updatePanelHeight();
		foxDisplayCheck();
		coolLookingWindowCheck();
		positionShareLinks();
	});
		
	
	cipInit();
	$("#checkAll").click(function(){
		$("input.repchk").attr("checked", true);
		return false;
	});
	
	$('body').bind("tabLoaded_tabsbc", function(){
    	$(".print-checklist").attr('onclick','');
		$(".print-checklist").click(function(e) {
			
			$("#CADPrintBanner").addClass("cipNoPrint");
			var tabs = $("div[id^='tab']").each(function() {
				$(this).removeClass("printAllFirstPage printAllSecondPage printAllOtherPages cipNoPrint");
				$(this).addClass("cipNoPrint");
			});
			setClassForPrintedPage(0, "tabsbc");
			$("#tabsbc").removeClass("cipNoPrint");
			window.focus();
			window.print();
			
		});
    });
	
	$("#textRecalculateWarranty").click(function() { changeTab("tabwc", "tab_wc"); return false;});
	$("#textViewInfo").click(function() { changeTab("tabwc", "tab_wc"); return false;});
	
	if ($("#tab_sbc:not(.tablocked)").length) {
		$("#checklistLink").click(function() { changeTab("tabsbc", "tab_sbc"); return false; });
	}
	
	$("#bbgLinkToTab").click(function() { changeTab("tabbbg", "tab_bbg"); return false;});
	$("#bbgImageLink").click(function() { changeTab("tabbbg", "tab_bbg"); return false;});
	$(".upgradeToCip").click(function () {
		try {
			if (cfo && cfo.upgradeVhrToCip) {
				cfo.upgradeVhrToCip();
			}
		}catch (e) {}
		return false;
	});

	if ($.browser.msie) {
		try {
			document.execCommand("BackgroundImageCache", false, true);
		} catch (e) {}
	}
	
});
