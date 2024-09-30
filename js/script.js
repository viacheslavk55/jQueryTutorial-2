$(document).ready(function(){
    $('.swatch').on('mouseenter', function(){
        $("#product-photo").attr('src', 'img/chair-'+ $(this).attr('id') +'@2x.jpg');
    $('.swatch').removeClass('selected')
    $(this).addClass('selected')
    })
})