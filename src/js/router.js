m.route.mode = "hash";

m.route(document.getElementById("content"), "/", {
  "/": Home,
  "/umsokn": Umsokn
});
