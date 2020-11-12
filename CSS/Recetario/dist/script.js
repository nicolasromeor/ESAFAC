$(document).ready(function() {
        var height = Math.max($(".texto1").height(), $(".texto2").height());
        $(".texto1").height(height);
        $(".texto2").height(height);
});