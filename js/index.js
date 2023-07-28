$(function () {
    var mobile = $('.mobile').find('i');
    mobile.click(function () {
        $('.mobile').find('ul').slideToggle();
    });

    var currentValue = 0;
    var isDrag = Boolean;
    var preco_atual = 0;
    var preco_maximo = 70000;

    $('.pointer-barra').mousedown(function () {
        isDrag = true;
    });

    $('.pointer-barra').mouseup(function () {
        isDrag = false;
    });

    $('.barra-preco').mousemove(function (e) {
        if (isDrag == true) {
            let elBase = $(this);
            let mouseX = e.pageX - elBase.offset().left;
            currentValue = mouseX / elBase.width() * 100;
            preco_atual = (currentValue / 100) * preco_maximo;
            preco_atual = formatar_preco(preco_atual);
            if (mouseX < 0) {
                mouseX == 0;
            } else if (mouseX > elBase.width()) {
                mouseX == elBase.width();
            }
            $('.pointer-barra').css('left', (mouseX - 13) + 'px');
            $('.barra-preco-fill').css('width', currentValue + '%');
            $('.preco-pesquisa').html('R$'+ preco_atual);
        };
    });

    function formatar_preco(preco_atual) {
        preco_atual = preco_atual.toFixed(2);
        preco_arr = preco_atual.split('.');
        var novo_preco = formatarPreco(preco_arr);
        return novo_preco;
    }

    function formatarPreco(preco_arr) {
        if (preco_arr[0] < 10000) {
            return preco_arr[0] + ',' + preco_arr[1];
        } else if (preco_arr[0] > 9999) {
            return preco_arr[0][0] + preco_arr[0][1] + '.' + preco_arr[0].substr(2, preco_arr[0].length) + ',' + preco_arr[1];
        }
    }
});