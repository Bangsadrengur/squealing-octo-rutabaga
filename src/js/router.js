m.route.mode = "hash";

m.route(document.getElementById("content"), "/", {
  "/": Home,
  "/umsokn": Umsokn,
  "/um_skolann": UmSkolann,
  "/fyrirkomulag_kennslu": FyrirkomulagK,
  "/suzuki_adferdin": suzukiAdferdin,
  "/myndir": Myndir
});

initPages();
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
