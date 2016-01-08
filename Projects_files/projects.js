(function() {

    var makeCarousels = function(html) {
        var projects = document.getElementsByClassName("project");
        for (var i = 0; i < projects.length; i++) {
            var proj = $(projects[i]);
            var div = $("<div></div>");
            div.html(html);
            var id = proj.attr("id");
            var holder = proj.children(".carousel-holder").first();
            var images = holder.children("img");

            div.find("#carousel").first().attr("id", id + "-carousel");
            var carouselIndicators = div.find(".carousel-indicators").first();
            var carouselInner = div.find(".carousel-inner").first();
            for (var j = 0; j < images.length; j++) {
                var indClass = j == 0 ? "active" : "";
                var indicator = "<li class='" + indClass + "' data-target='#" + id + "-carousel' data-slide-to='" + j + "'></li>";
                carouselIndicators.append($(indicator));
                var itemClass = j == 0 ? "item active" : "item";
                var item = $("<div class='" + itemClass + "'></div>");
                item.append(images[j]);
                carouselInner.append(item);
            }
            div.find(".carousel-control").attr("href", "#" + id + "-carousel");
            holder.append(div);
        }
    }

    var html;
    var ready;
    $.get("templates/carousel.html", function(data) {
        html = data;
        if (ready) makeCarousels(html);
    }, "html");
    $(document).ready(function() {
        ready = true;
        if (html) makeCarousels(html);
    });

})();
