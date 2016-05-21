var m = require('mithril');
var pages = require('./pages');
m.route.mode = "hash";

m.route(document.querySelector("div.container"), "/", {
  "/": pages.Home,
  "/umsokn": pages.Umsokn,
  "/um_skolann": pages.UmSkolann,
  "/fyrirkomulag_kennslu": pages.FyrirkomulagK,
  "/suzuki_adferdin": pages.SuzukiAdferdin,
  "/myndir": pages.Myndir
});

m.mount(
  document.querySelector('div.collapse.navbar-collapse'),
  {
    view: function() {
      return m.component(pages.Nav, {pages: pages.pages});
    }
  }
);

m.render(
  document.getElementById('header-slideshow'),
  {
    view: function() {
      return m.component(
        pages.Images,
        {
          slideshowConf: pages.headerSlideshowConf,
          images: pages.images
        }
      );
    }
  }
);
