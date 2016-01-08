(function() {
    $("body").hide();
    $(document).ready(function() {
        var nav = $("nav").first();
        var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);

        nav.load("templates/nav.html", function () {
            nav.find("li").each(function(index, value) {
                var link = $(value).children("a").first();
                var href = link.attr("href");
                if (href == filename || (href == "./" && filename.length == 0)) {
                    $(value).addClass("active");
                    link.attr("href", "#");
                }
            });
            $("body").show();
        });
    });
})();
