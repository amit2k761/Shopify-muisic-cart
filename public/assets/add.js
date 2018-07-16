$(document).ready(function () {

    $('.add-to-cart').on('click', function () {
        var productName = $(this).data('productTitle');
        $.ajax({
            type: 'POST',
            url: '/shop/' + productName,
            success: function (data) {
                location.reload();
            }
        });
    });

    $('.li-selected').on('click', function () {
        var item = $(this).text();
        $.ajax({
            type: 'DELETE',
            url: '/shop/' + item,
            success: function (data) {
                location.reload();
            }
        });
    });

});