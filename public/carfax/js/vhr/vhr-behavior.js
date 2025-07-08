function clearField(textFieldId) {
    document.getElementById(textFieldId).value = "";
}

function jumpLink(toWhere) {
    window.location.hash = toWhere;
}

(function setupTooltips() {
    function toggle(id, remove, add) {
        if (id) {
            var tooltip = $("#" + id);
            tooltip.removeClass(remove);
            tooltip.addClass(add);
        }
    }

    function highlightRow(rowId) {
        toggle(rowId, "XDinactive", "XDactive");
    }

    function unhighlightRow(rowId) {
        toggle(rowId, "XDactive", "XDinactive");
    }

    function bindTooltips() {
        $('a[rel="tooltip"]').each(function bindTooltip() {
            var width = this.id == 'linkInstalledDetails' ? 'auto' : 400;

            var href = $(this).attr('href');
            if (href.length && href[0] !== '#') {
                var element = $('#' + href);
                if (element) {
                    var text = element.html();

                    $(this).qtip({
                        style: {
                            classes: 'tool-qtip',
                            width: width,
                            tip: {
                                corner: 'top left',
                                mimic: 'center',
                                offset: 10,
                                border: 1,
                                width: 20,
                                height: 10
                            }
                        },
                        position: {
                            my: 'top left',  // Position my top left...
                            at: 'bottom center', // at the bottom right of...
                            target: $(this),
                            adjust: {
                                x: -10,
                                y: 5
                            }
                        },
                        // offset: -30,
                        content: text,
                        show: 'mouseover',
                        // hide: 'click'
                        hide: {when: 'mouseout', effect: 'fade'}
                    }).click(function tooltipClick() {
                        return false;
                    });
                }
            }
        });
    }

    $(DocumentHelper.getDocument()).ready(function onDocumentReady() {
        $('#runReportTbh_vinId').select();
        var inactive = $(".XDinactive");
        inactive.mouseover(function activateTooltip() {
            highlightRow(this.id)
        });
        inactive.mouseout(function deactivateTooltip() {
            unhighlightRow(this.id)
        });
        bindTooltips();
    });
})();

$(function () {
    var externalUrl;

    $("a.external").click(function () {
        var externalSiteWarning = $('#externalsitewarning');
        externalSiteWarning.css('height', $(document).height() + 'px');
        externalUrl = this.getAttribute("href");
        $("#interstitialMessagePartnerName").text(this.getAttribute("partnerName"));
        centerEMModal();
        externalSiteWarning.fadeIn();
        return false;
    });

    function centerEMModal() {
        var externalSiteWarning = $('#externalsitewarning').find('.modalBox');
        var topAdjust = (($(window).height() - externalSiteWarning.height()) / 2) + $(window).scrollTop - 50;
        var leftAdjust = ($(window).width() / 2) - (externalSiteWarning.width() / 2);
        externalSiteWarning.css('left', leftAdjust);
        externalSiteWarning.css('top', topAdjust);
    }

    function hideModals() {
        $('#externalsitewarning').hide();
    }

    $('#externalsitewarning .modalClose, #externalsitewarning .modalFrost, #externalsitewarning .btnCancel').click(function () {
        hideModals();
    });
    $("#externalsitewarning").find("a.confirm").click(function () {
        window.open(externalUrl, '_blank');
        hideModals();
    });
});

function detailIconWindowCheck() {
    if($(window).width() < 800) {
        $(".detail-icon-with-date").addClass("detail-icon-show");
        $(".detail-icon-with-date").removeClass("detail-icon-hide");
        $(".detail-icon-column").addClass("detail-icon-hide");
        $(".detail-icon-column").removeClass("detail-icon-show");
    } else {
        $(".detail-icon-with-date").addClass("detail-icon-hide");
        $(".detail-icon-with-date").removeClass("detail-icon-show");
        $(".detail-icon-column").addClass("detail-icon-show");
        $(".detail-icon-column").removeClass("detail-icon-hide");
    }
}

$(document).ready(function() {
    function addToUrl(self, dataKey) {
        if ($(self).attr('data-' + dataKey.toLowerCase()) != undefined) {
            return '&' + dataKey + '=' + $(self).attr('data-' + dataKey.toLowerCase());
        }

        return "";
    }

    $('a.detailLineUrl').click(function serviceLinkClick(event) {
        var url = $(this).attr('data-webdomain') + 'phoenix/followDetailsLink.cfx?';
        url += addToUrl(this, 'vin') +
            addToUrl(this, 'rptDate') +
            addToUrl(this, 'permutationName') +
            addToUrl(this, 'key') +
            addToUrl(this, 'compCode') +
            addToUrl(this, 'slc') +
            addToUrl(this, 'tranDate') +
            addToUrl(this, 'ownerNumber') +
            addToUrl(this, 'reportCategory') +
            addToUrl(this, 'recordNumber');

        url += (url.indexOf('&') != -1 ? '&' : '') + 'linkUrl=' + $(this).attr('href');
        $.get(encodeURI(url), function(result) { console.log(result) });
    });
    detailIconWindowCheck();
    $(window).on('resize', function() {
        detailIconWindowCheck();
    });
});

$(function severityScaleModal() {
    $('.severity-scale-info-icon').click(function(){
        showSeverityScaleModal($(this).closest('.poi-right-column').find('.severity-scale-popup'));
    });
    $('.close-modal').click(function(){
        hideSeverityScaleModal();
    });
    $('.modal-overlay').click(function(){
        hideSeverityScaleModal();
    });
});

var showSeverityScaleModal = function(popup){
    popup.parent().find('.modal-overlay').fadeTo('slow', '0.7');
    $('#topbar').css('margin-top', '0');
    $('#bottombracket').css('position', 'absolute');
    popup.fadeIn('300');
};

var hideSeverityScaleModal = function(){
    // $('#bottombracket').css('position', 'fixed');
    $('.modal-overlay').hide();
    $('.severity-scale-popup').hide();
};

//SMOOTH SCROLLING
$(function() {
    $("a[href^='#']").click(function() {
        var position = $($(this).attr("href")).offset().top - 85;
        $("body, html").animate({
            scrollTop: position
        }, 500)
        return false;
    });
});