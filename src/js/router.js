var m = require('mithril');
var pages = require('./pages');

m.route.mode = "hash";

m.route(document.getElementById("content"), "/", {
  "/": pages.Home,
  "/umsokn": pages.Umsokn,
  "/um_skolann": pages.UmSkolann,
  "/fyrirkomulag_kennslu": pages.FyrirkomulagK,
  "/suzuki_adferdin": pages.SuzukiAdferdin,
  "/myndir": pages.Myndir
});

m.mount(
  document.querySelector('nav'),
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
