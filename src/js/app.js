var home = {
  view: function() {
    return m('div', [
      m('div[class="left"]', [
        m('h2', 'Velkomin á heimasíðu Suzukipíanóskólans'),
        m('img', {id: "frontpage-img", src: "images/IMG_6551.jpg", alt:"Mynd úr starfinu"})
      ]),
      m('div[class="right"]', [
        m('h3', 'Frístundakortið'),
        m('a[href="http://reykjavik.is/thjonusta/fristundakortid"]', [
          m('img', {src: "images/fristundakortid_160.jpg", alt: "Frístundakortið"})
        ]),
        m('p', 'Suzukipíanóskólinn er aðili að Frístundakorti Reykjavíkur')
      ])
    ]);
  }
};

m.mount(document.getElementById("content"), home);
