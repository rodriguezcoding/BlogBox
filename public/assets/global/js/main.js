!(function(t, a, o) {
  "use strict";
  var i = {
    owlCarousel: {
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: !0,
      autoPlay: !1
    },
    switchry: { color: "#188ae2", jackColor: "#ffffff", size: "default" }
  };
  (t.site = {
    initHeaderCharts: function() {
      if ("function" == typeof o.fn.sparkline) {
        var t = function(t, a, i) {
          (i.type = "bar"),
            (i.height = 30),
            (i.barColor = o.colors.primary),
            (i.barSpacing = 2),
            (i.chartRangeMin = 0),
            o(t).sparkline(a, i);
        };
        t("#jumbotron_chart_1", [5, 4, 2, 7, 8, 5, 6, 7, 10, 9], {
          highlightColor: o.colors.warning
        }),
          t("#jumbotron_chart_2", [5, 4, 2, 7, 8, 5, 6, 7, 10, 9], {
            highlightColor: o.colors.danger
          }),
          t("#jumbotron_chart_3", [5, 4, 2, 7, 8, 5, 6, 7, 10, 9], {
            highlightColor: o.colors.success
          });
      }
    },
    initPlugins: function() {
      o("[data-plugin]").each(function() {
        var t = o(this),
          a = t.data("plugin");
        if ("function" == typeof o.fn[a]) {
          var n = i[a] || {};
          o.fn[a].call(t, o.extend({}, n, t.data()));
        }
      }),
        o('[data-toggle="class"]').each(function() {
          var t = o(this),
            a = t.data("target") || t.attr("href"),
            i = o(a),
            n = t.data("class") || "show";
          t.on("click", function(t) {
            i.toggleClass(n), t.preventDefault();
          });
        }),
        o('[data-plugin="switchery"]').each(function() {
          var t = i.switchry || {};
          new Switchery(this, o.extend({}, t, o(this).data()));
        }),
        // o('[data-toggle="video-modal"]').videoModal(),
        o('[data-toggle="tooltip"]').tooltip();
    }
  }),
    (o.colors = {
      primary: "#39527b",
      success: "#60c84c",
      info: "#58d9e1",
      warning: "#ffc952",
      danger: "#ff7473",
      white: "#ffffff"
    });
})(window, document, jQuery);
