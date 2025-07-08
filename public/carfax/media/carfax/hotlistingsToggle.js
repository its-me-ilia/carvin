function reloadInventoryManagerFrame() {
	try {
      	var x = self.opener.parent.frames[0].document.getElementById('inventoryManagerLink').href;
      	self.opener.parent.frames[1].location.href=x;
 	}catch(err) { }
}

var UpdateMessages = {
	ADDED:'This vehicle has been added to your online listings!',
	REMOVED:'This vehicle has been removed from your online listings!'
};

function displayUpdateMessage(msg){
	$('#icr-updated-message').text(msg).fadeIn('slow').css('visibility', 'visible');
	var fadeOutCallback = function(){
		$(this).css({display:'inline', visibility:'hidden'});
	};
	var timedMethodCall = function(){
		$('#icr-updated-message').fadeOut('slow', fadeOutCallback);
	};
	setTimeout(timedMethodCall, 3000);
}

function switchInventoryStatus(vin, status) {
	$('#toggleIndicator').css('visibility', 'visible');
	var inventory = {listing: {online: status}};
	
	updateOnlineStatus(vin, {
		success: function(data) {
			var on = $('.toggleActivated');
			var off = $('.toggleDeactivated');
			on.attr('class', 'toggleDeactivated');
			off.attr('class', 'toggleActivated');
			reloadInventoryManagerFrame();
			$('#toggleIndicator').css('visibility', 'hidden');

			var msg = (status)?UpdateMessages.ADDED : UpdateMessages.REMOVED;
			displayUpdateMessage(msg);
		},
		data: inventory
	});	
}

function meta(name){
	var value = $('meta[name="'+name+'"]').attr('content');
	return (value) ? value : "";
}

function icrToggleOnClick(e) {
	var status;
	status = ($('#onlineListingsToggleOn').attr('class') == 'toggleActivated') ? false : true;
	switchInventoryStatus(meta('subscriberVin'), status);
}

function toggleButtonSetup() {
	$('#toggleButtonActivator a').click(icrToggleOnClick);
	$('.toggle-def').mouseover(function(){
		showtip(this, 'defOnlineListingsToggle');
	}).mouseout(function(){
		hidetip('defOnlineListingsToggle')
	});
}

function toggleButton(button){
	if (button=="off"){
		$("#onlineListingsToggleOn").attr('class',"toggleDeactivated");
		$("#onlineListingsToggleOff").attr('class',"toggleActivated");
	}else{
		$("#onlineListingsToggleOn").attr('class',"toggleActivated");
		$("#onlineListingsToggleOff").attr('class',"toggleDeactivated");
	}
}

$(DocumentHelper.getDocument()).ready(toggleButtonSetup);