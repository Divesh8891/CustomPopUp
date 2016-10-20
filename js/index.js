$(document).ready(function () {
    $('.filter-opt-btn').bind('click', openPopUp);


});
function openPopUp() {
    var modalBody = '<p class="paraTxt">Your Application has been processed.</p><button type="button" class="modal-close btn" data-dismiss="modal" aria-label="Close">OK</button>';
    modalOption({
        $modal_id: '#myModal',
        $headershow: true,
        $headerContent: 'Thank You!',
        $bodyContent: modalBody
    });
}
