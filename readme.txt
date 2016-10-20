# This is a plugin for Modal pop up

You can just pass modal body content and other option list as object.

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


Just Use or Override the above object property and create pop up