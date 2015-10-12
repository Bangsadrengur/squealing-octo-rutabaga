// Widget for right side of screen displaying "Frístundakortið"
var Right = {
  view: function() {
    return m('div[class="right"]', [
      m('h3', 'Frístundakortið'),
      m('a[href="http://reykjavik.is/thjonusta/fristundakortid"]', [
        m('img', {src: "images/fristundakortid_160.jpg", alt: "Frístundakortið"})
      ]),
      m('p', 'Suzukipíanóskólinn er aðili að Frístundakorti Reykjavíkur')
    ])
  }
};

// Main content for greeter page
var Home = {
  view: function() {
    return m('div', [
      m('div[class="left"]', [
        m('h2', 'Velkomin á heimasíðu Suzukipíanóskólans'),
        m('img', {id: "frontpage-img", src: "images/IMG_6551.jpg", alt:"Mynd úr starfinu"})
      ]),
      m.component(Right)
    ]);
  }
};

// Main content for application page
var Umsokn = {
  view: function() {
    return m('div', [
      m('div[class="left"]', [
        m('h1', 'Umsókn'),
        m('p', [
	  'Umsóknareyðublöð um tónlistarnám í skólanum er að finna ',
	  m('a', {href: "Suzukipianoskolinn-Umsokn.pdf"}, 'hér'),
	  '. ',
	  'Frekari upplýsingar og skráning getur líka farið fram á netfanginu ',
          m('a', {href: "mailto:suzukipianoskolinn@gmail.com"}, 
	    'suzukipianoskolinn@gmail.com'
	  ),
	  ' og einnig í viðkomandi grunnskólum.'
	]),
	m('h3', [
	  'Reykvíkingar geta greitt hluta námsgjalds með Frístundakorti ',
	  'Reykjavíkur'
	]),
	m('p', [
	  'Smellið á mynd hér til hægri af kortinu til að fá frekari ',
	  'upplýsingar.'
	])
      ]),
      m.component(Right)
    ]);
  }
};
