$(document).ready(function() {
    $('[data-modal]').on('click', function(e) {
        var target = $(this);
        var modalId = '#' + target.data('modal');
        $(modalId).fadeIn('fast', function() {
            $(modalId + ' .modal-dialog').slideDown('fast');
        });
    });

    $('.modal .close').on('click', function(e) {
        var target = $(e.currentTarget);
        target.closest('.modal-dialog').slideUp('fast', function() {
            target.closest('.modal').fadeOut('fast');
        });
    });
});