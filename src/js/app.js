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
    ])
  }
};

// Main content for info about school
var UmSkolann = {
  view: function() {
    return m('div', [
      m('div[class="left"]', [
        m('h1', 'Um skólann'),
	m('p', [
          'Suzukipíanóskólinn var stofnaður árið 2009 af Elínu Hannesdóttur ',
          'píanókennara.  Elín stundaði réttindanám Evrópska ',
          'Suzukisambandsins, er einn af fyrstu Suzukipíanókennurum landsins ',
          'og hefur starfað við Suzukipíanókennslu frá árinu 1989.'
	]),
	m('p', [
          'Suzukipíanóskólinn byggir á áralangri reynslu á kennslu eftir ',
          'móðurmálsaðferð Shinichi Suzuki og tekur mið af þörfum og veruleika ',
          'íslenskra barna og foreldra þeirra. Rækt er lögð við jákvæða ',
          'samvinnu og samveru foreldra og barna í markvissu tónlistarnámi. ',
          'Skólinn er til húsa að Langarima 21, 112 Reykjavík en hefur auk ',
          'þess starfsstöðvar í nokkrum grunnskólum á höfuðborgarsvæðinu.'
	]),
	m('p', [
          'Suzukipíanóskólinn hefur tekið upp þá nýbreytni að bjóða upp á ',
          'Suzukipíanókennslu í grunnskólum á skólatíma í samvinnu við ',
          'hlutaðeigandi skóla. Suzukipíanóskólinn býður einnig upp á ',
          'hefðbundna píanókennslu í grunnskólum á skólatíma. Áhugasömum ',
          'skólastjórnendum um þetta námsframboð er bent á að senda fyrirspurn ',
          'á ',
	  m('a', {href: "mailto:suzukipianoskolinn@gmail.com"}, 
	    'suzukipianoskolinn@gmail.com'),
	  '.'
	])
      ]),
      m.component(Right)
    ])
  }
};

var FyrirkomulagK = {
  view: function() {
    return [
      m('div[class="left"]', [
        m('h1', 'Fyrirkomulag kennslu'),
	m('p', [
          'Í Suzukipíanóskólanum fylgja foreldrar barni sínu í einkatíma ',
          'fyrstu árin og eins lengi og þeir kjósa, oft einnig í hóptíma og fá ',
          'þar tækifæri til að kynnast öðrum foreldrum og börnum í sama námi. ',
          'Fjölskyldan mætir svo gjarnan öll á tónleika sem haldnir eru í það ',
          'minnsta tvisvar á ári.'
	]),
	m('h2', 'Námið byggist upp á:'),
	m('div', {id: "nam_byggist_a"}, [
	  m('h3', 'Einkatímum einu sinni í viku'),
	  m('p', [
            'Þar er unnið með þróun hljóðfæra-/spilatækni, músíkalitets og ',
            'persónulegs þroska. Kennsla í tónfræði og nótnalestri hefst á ',
            'öðru til þriðja ári.'
	  ]),
	  m('h3', 'Hóptímum aðra hverja viku'),
	  m('p', [
           'Hér liggur megináherslan á einleiks- og framkomuþjálfun, ',
           'samspil, tónfræði/ tónheyrn, nótnalestur svo og félagsleg ',
           'samskipti.'
	  ]),
          m('h3', 'Heimaspilatímum 6 daga vikunnar'),
	  m('p', [
            'Ástundun við heimaæfingar er forsenda árangurs  og gleði í ',
            'tónlistarnáminu. Reglubundnar æfingar leggja góðan grunn að ',
            'færni, uppbyggingu líkamlegs styrks og samhæfingar, spilatækni, ',
            'þróun tóneyra og skemmtilegri samveru barna og foreldra í ',
            'krefjandi og ánægjulegu verkefni.'
	  ])
	])
      ]),
      m.component(Right)
    ]
  }
};
