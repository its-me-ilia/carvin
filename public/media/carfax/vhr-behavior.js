function clearField(textFieldId){
	document.getElementById(textFieldId).value = "";
}


function jumpLink(toWhere){
	window.location.hash = toWhere;
}

(function(){
	function toggle(id, remove, add){
		if(id){
		$("#" + id).removeClass(remove);
		$("#" + id).addClass(add);
		}
	} 
	function rowHilite(rowId){
		toggle(rowId, "XDinactive","XDactive");
	};
	
	function unHilite(rowId){
		toggle(rowId, "XDactive","XDinactive");
	};
	function bindTooltips(){
		$('a[rel="tooltip"]').each(function(){
			
			var width = this.id == 'linkInstalledDetails'? 'auto' : 250;

			var text = $('#'+$(this).attr('href')).html();
			
			$(this).qtip({
				style: {name:'cream', width:width, border: { width: -5, radius: 5, color: '#fff1a8' },background: '#fff1a8', color:'#000'},
				position: { adjust: { screen: true} },
				content: text,
   				show: 'mouseover',
   				hide: {when:'mouseout', effect:'fade'}
			}).click(function(){return false;});
		});
	}
	
	$(DocumentHelper.getDocument()).ready(function(){
		$('#runReportTbh_vinId').select();		
		$(".XDinactive").mouseover(function() {rowHilite(this.id)});
		$(".XDinactive").mouseout(function() {unHilite(this.id)});
		bindTooltips();
	});
})();

$(function() {
	var externalUrl;
	
	$("a.external").click(function(){
		$('#externalsitewarning').css('height', $(document).height() + 'px');
		externalUrl = this.getAttribute("href");
		$("#interstitialMessagePartnerName").text(this.getAttribute("partnerName"));
		centerEMModal();
		$('#externalsitewarning').fadeIn();
		return false;
	});
	
	function centerEMModal(){
		var topadjust =  (($(window).height() - $('#externalsitewarning .modalBox').height()) /2) + $(window).scrollTop() - 50;
		var leftadjust = ($(window).width() / 2) -  ($('#externalsitewarning .modalBox').width() / 2);		
		$('#externalsitewarning .modalBox').css('left', leftadjust);	
		$('#externalsitewarning .modalBox').css('top', topadjust);	
	}
	function hideModals(){$('#externalsitewarning').hide();}
	$('#externalsitewarning .modalClose,#externalsitewarning .modalFrost').click(function(){	
		hideModals();
	});
	$("#externalsitewarning a.btnCancel").click(function(){
		hideModals();	
	});
	$("#externalsitewarning a.confirm").click(function(){
		window.open( externalUrl, '_blank');
		hideModals();
	});
});