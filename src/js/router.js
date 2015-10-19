// Todo: This probably belongs somewhere else
initPages();

m.route.mode = "hash";

m.route(document.getElementById("content"), "/", {
  "/": Home,
  "/umsokn": Umsokn,
  "/um_skolann": UmSkolann,
  "/fyrirkomulag_kennslu": FyrirkomulagK,
  "/suzuki_adferdin": SuzukiAdferdin,
  "/myndir": Myndir
});

m.mount(
  document.querySelector('nav'),
  {
    view: function() {
      return m.component(Nav, {pages: pages});
    }
  }
);

m.render(
  document.getElementById('header-slideshow'),
  {
    view: function() {
      return m.component(
        Images,
        {
          slideshowConf: headerSlideshowConf,
          images: images
        }
      );
    }
  }
);
