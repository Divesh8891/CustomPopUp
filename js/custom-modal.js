function modalOption(obj) {
    var modal = $.extend({
        backdrop: true,
        keyboard: true,
        $modal_id: '#myModal',
        $modal_class: '',
        $dialog: '.modal-dialog',
        $dialogWidth: '',
        $header: '.modal-header',
        $headershow: true,
        $headerCloseIcon: true,
        $title: '.modal-title',
        $headerContent: '',
        $header_empty_class: 'modal-header-show',
        $body: '.modal-body',
        $bodyContent: '',
        $body_custom_class: '',
        $footer: '.modal-footer',
        $footerContent: '',
        $footer_custom_class: ''


    }, obj);

    /*---------------modal - dialog----------------*/
    $(modal.$dialog).css('max-width', modal.$dialogWidth)
    

    /*---------------$Id----------------*/
    $(modal.$modal_id).modal('show').modal({
        keyboard: modal.keyboard
    }).addClass(modal.$modal_class);

    /*---------------header----------------*/
    if (modal.$headershow) {
        $(modal.$header).show();
        if (modal.$headerCloseIcon) {
            $(modal.$header + ' button').show();
        }
        else {
            $(modal.$header + ' button').hide();
        }
        if (modal.$headerContent == '') {
            $(modal.$header).addClass(modal.$header_empty_class);
            $(modal.$body).addClass('body-p-t-0');
        }
        else {
            $(modal.$header).removeClass(modal.$header_empty_class);
            $(modal.$title).html(modal.$headerContent);
        }
    }
    else {
        $(modal.$header).hide();
    }

    /*---------------body----------------*/
    if (modal.$bodyContent != '') {
        $(modal.$body).show();
        $(modal.$body).html(modal.$bodyContent);
        $(modal.$body).addClass(modal.$body_custom_class);
    }
    else {
        $(modal.$body).removeClass(modal.$body_custom_class);

        $(modal.$body).empty().hide();
    }

    /*---------------footer content----------------*/
    if (modal.$footerContent != '') {
        $(modal.$footer).show();
        $(modal.$footer).html(modal.$footerContent);
        $(modal.$footer).addClass(modal.$footer_custom_class);
    }
    else {
        $(modal.$footer).removeClass(modal.$footer_custom_class);

        $(modal.$footer).empty().hide();
    }

    if ($(modal.$modal_id + ' .modal-dialog').height() > $(modal.$modal_id).height()) {
        $(modal.$modal_id + ' .modal-dialog').css('height', '100%')
    }
    else {
        $(modal.$modal_id + ' .modal-dialog').css('height', '')
    }

}