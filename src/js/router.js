m.route.mode = "hash";

m.route(document.getElementById("content"), "/", {
  "/": Home,
  "/umsokn": Umsokn,
  "/um_skolann": UmSkolann,
  "/fyrirkomulag_kennslu": FyrirkomulagK,
  "/suzuki_adferdin": suzukiAdferdin
});

