// MODEL -----------------------------------------------------------------------
var pages = [
  {path: '', text: 'Forsíða'},
  {path: 'umsokn', text: 'Umsókn'},
  {path: 'um_skolann', text: 'Um skólann'},
  {path: 'fyrirkomulag_kennslu', text: 'Fyrirkomulag kennslu'},
  {path: 'suzuki_adferdin', text: 'Suzukiaðferðin'},
  {path: 'myndir', text: 'Myndir'}
];

// Use   : initPages();
// Before: pages is a array of objects, each containing keys path and text.
//          path: string -- url component
//          text: string -- Text to display for path
// After : Each object in pages has a property span.
//          span: Mithril getter/setter set to false by default
//        span property for pages[0] set to true, others to false.
var initPages = function() {
  pages.map(function(page) {
    page.span = m.prop(false);
  });
  //pages[0].span(true);
};

var images = {
  'alt-text': "Mynd úr starfinu",
  'path': 'images',
  'file-names': [
    "IMG_6530.jpg",
    "IMG_6537.jpg",
    "IMG_6551.jpg",
    "IMG_6603.jpg",
    "IMG_6615.jpg",
    "IMG_6643.jpg",
    "IMG_6666.jpg",
    "IMG_6689.jpg",
    "IMG_6702.jpg",
    "IMG_6716.jpg",
    "IMG_6739.jpg",
    "image_1.jpg",
    "image_2.jpg",
    "image_3.jpg",
    "image_4.jpg",
    "image_5.jpg",
    "image_6.jpg",
    "image_7.jpg",
    "image_8.jpg",
    "image_9.jpg",
    "image_10.jpg"
  ]
};
// MODEL ENDS ------------------------------------------------------------------

// Widget for right side of screen displaying "Frístundakortið"
var Right = {
  view: function() {
    return m('div[class="right"]', [
      m('h3', 'Frístundakortið'),
      m('a[href="http://reykjavik.is/thjonusta/fristundakortid"]', [
        m('img', {
          src: "images/fristundakortid_160.jpg",
          alt: "Frístundakortið"
        })
      ]),
      m('p', 'Suzukipíanóskólinn er aðili að Frístundakorti Reykjavíkur')
    ]);
  }
};

// Main content for greeter page
var Home = {
  vm: {
    init: function() {
      // Set corresponding nav as active
      initPages();
      pages[0].span(true);
    }
  },
  controller: function() {
    Home.vm.init();
  },
  view: function() {
    return m('div', [
      m('div[class="left"]', [
        m('h2', 'Velkomin á heimasíðu Suzukipíanóskólans'),
        m('img', {
          id: "frontpage-img",
          src: "images/IMG_6551.jpg",
          alt:"Mynd úr starfinu"
        })
      ]),
      m.component(Right)
    ]);
  }
};

// Main content for application page
var Umsokn = {
  vm: {
    init: function() {
      // Set corresponding nav as active
      initPages();
      pages[1].span(true);
    }
  },
  controller: function() {
    Umsokn.vm.init();
  },
  view: function() {
    return m('div', [
      m('div[class="left"]', [
        m('h1', 'Umsókn'),
        m('p', [
          'Umsóknareyðublöð um tónlistarnám í skólanum er að finna ',
          m('a', {href: "assets/Suzukipianoskolinn-Umsokn.pdf"}, 'hér'),
          '. ',
          'Frekari upplýsingar og skráning getur líka farið fram á netfanginu ',
          m(
            'a', {href: "mailto:suzukipianoskolinn@gmail.com"},
            'suzukipianoskolinn@gmail.com'
          ), '.'
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

// Main content for info about school
var UmSkolann = {
  vm: {
    init: function() {
      // Set corresponding nav as active
      initPages();
      pages[2].span(true);
    }
  },
  controller: function() {
    UmSkolann.vm.init();
  },
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
          'móðurmálsaðferð Shinichi Suzuki og tekur mið af þörfum og ',
          'veruleika ',
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
          'skólastjórnendum um þetta námsframboð er bent á að senda ',
          'fyrirspurn á ',
          m(
            'a', {href: "mailto:suzukipianoskolinn@gmail.com"},
            'suzukipianoskolinn@gmail.com'
          ),
          '.'
        ])
      ]),
      m.component(Right)
    ]);
  }
};

var FyrirkomulagK = {
  vm: {
    init: function() {
      // Set corresponding nav as active
      initPages();
      pages[3].span(true);
    }
  },
  controller: function() {
    FyrirkomulagK.vm.init();
  },
  view: function() {
    return [
      m('div[class="left"]', [
        m('h1', 'Fyrirkomulag kennslu'),
        m('p', [
          'Í Suzukipíanóskólanum fylgja foreldrar barni sínu í einkatíma ',
          'fyrstu árin og eins lengi og þeir kjósa, oft einnig í hóptíma og ',
          'fá ',
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
    ];
  }
};

var SuzukiAdferdin = {
  vm: {
    init: function() {
      // Set corresponding nav as active
      initPages();
      pages[4].span(true);
    }
  },
  controller: function() {
    SuzukiAdferdin.vm.init();
  },
  view: function() {
    return [
      m('div[class="left"]', [
        m('h1', 'Suzukiaðferðin'),
        m(
          'p',
          'Það var Japaninn Shinichi Suzuki (1898-1998) sem þróaði ',
          'tónlistarkennsluaðferð er hann nefndi móðurmálsaðferðina. Hafandi ',
          'velt því fyrir sér hvað börn virtust eiga auðvelt með að læra og ',
          'tileinka sér sitt móðurmál komst hann að þeirri niðurstöðu að það ',
          'væru ákveðnir þættir í umhverfi barna sem hvettu til þessa góða ',
          'árangurs. Það voru þættir eins og fyrirmyndir, hrós, hljóðumhverfi ',
          'barns og endurteknar æfingar þess við myndun hljóða/orða.  Þessa ',
          'þætti taldi Suzuki að væri hægt að nýta í öðru námi og heimfærði ',
          'aðferðina upp á tónlistarnám. Þannig þróaði hann kennsluaðferð sem ',
          'byggir á tengslum barnsins við leiðbeinandi foreldra og skapaði um ',
          'leið einstaka aðferð fyrir foreldra að öðlast ánægjulega upplifun ',
          'með barni sínu á vegferð þroska og samveru við tónlistariðkun.'
        ),
        m('h2', 'Suzukinemandinn'),
        m('ul', [
          m('li', 'Hefur gjarnan námið á aldrinum 4-6 ára'),
          m('li', 'Lærir námsefnið fyrstu árin með hlustun af geisladiskum'),
          m('li', [
            'Lærir fyrst grunnatriði í hljóðfæraleiknum áður en hann lærir ',
            'að lesa nótur (eins og börn læra fyrst að tala, svo lesa).'
          ]),
          m('li', [
            'Býr við nærandi, jákvæðar kringumstæður til náms þar sem ',
            'foreldrið tekur þátt í náminu.'
          ]),
          m('li', [
            'Fær vandaða og uppbyggilega kennslu frá vel menntuðum ',
            'kennara.'
          ]),
          m('li', [
            'Lærir frá upphafi góða spilatækni og vinnur með fallega ',
            'tónmyndun.'
          ]),
          m('li', [
            'Safnar upp námsforða, kann mörg lög sem hann hefur gaman af að ',
            'spila fyrir sjálfan sig og aðra.'
          ]),
          m('li', [
            'Hittir reglulega önnur börn í sama námi þar sem myndast gjarnan ',
            'vinatengsl auk þess sem börnin iðka tónlistina saman.'
          ])
        ]),
        m('h2', 'Árangur af Suzukinámi'),
        m('p', [
          'Árangur af þessu námi er gjarnan mjög góður, sem sýnir sig ekki ',
          'síst í því að brottfall úr námi er áberandi lítið. Stór hluti ',
          'nemenda nær verulega góðum tökum á hljóðfæri sínu og býr að ',
          'víðtækri þekkingu á tónlist. Algengasti aldur byrjenda er 4-6 ára ',
          'en við 14-16 ára aldur er algengt að nemendur fari í hefðbundna ',
          'tónlistarskóla til framhaldnáms.'
        ]),
        m('h2', [
          'Nánari upplýsingar um sögu og hugmyndafræði Suzukiaðferðarinnar er ',
          'meðal annars að finna í eftirfarandi bókum'
        ]),
        m('ul', [
          m('li', [
            'Nurtured by Love – The Classic Approach to Talent Education ',
            'eftir Shinichi Suzuki og Waltraud Suzuki. A Senzay ',
            'Publications, 1983.'
          ]),
          m('li', [
            'To Learn With Love – A Companion for Suzuki Parents eftir ',
            'Constance Starr og William Starr. Kingston Ellis Press, 1984.'
          ]),
          m('li', [
            'Ability Development from Age Zero (Suzuki Method International) ',
            'eftir Shinichi Suzuki. Warner Bros. Publications Inc., 1981.'
          ]),
          m('li', [
            'Indföring í Suzukiundervisning – mest for klaver, eftir Peter ',
            'Hagn-Meincke. PS.Musik, Danmark, 1990.'
          ]),
          m('li', [
            'Suzukitónlistaruppeldi. Handbók fyrir kennara, foreldra og aðra ',
            'uppalendur eftir Kristin Örn Kristinsson. Reykjavík 1998.'
          ]),
          m('li', [
            'Studying Suzuki Piano -  More Than Music – A Handbook for ',
            'Teachers, Parents and Students (Suzuki Method International) ',
            'eftir Carole L. Bigler og Valery Lloyd-Watts. Summy-Birchard ',
            'Ind., 1979.'
          ]),
          m('li', [
            'Introducing Suzuki Piano eftir Doris Koppelman. Dichter Press, ',
            '1978.'
          ]),
        ]),
        m('h2', [
          'Suzukitónlistarkennsla fer fram um heim allan og eru öflug samtök ',
          'aðstandenda aðferðarinnar sem halda úti athyglisverðum ',
          'heimasíðum'
        ]),
        m('h3', 'Asia Suzuki Association'),
        m('p', 'Asía (fyrir utan Japan)'),
        m('a', {href: "www.asiasuzuki.org"}, 'www.asiasuzuki.org'),
        m('h3', 'European Suzuki Association (ESA)'),
        m('p', 'Evrópa, Afríka og Miðausturlönd'),
        m('a', {href: "www.europeansuzuki.org"}, 'www.europeansuzuki.org'),
        m('h3', 'Pan-Pacific Suzuki Association (PPSA)'),
        m('p', 'Ástralía, Nýja Sjáland og Kyrrahafseyjar'),
        m('a', {href: "www.suzukimusic.com.au"}, 'www.suzukimusic.com.au'),
        m('h3', 'Suzuki Association of the Americas (SAA)'),
        m('p', 'Norður og Suður Ameríka'),
        m(
          'a', {href: "www.suzukiassociation.org"}, 'www.suzukiassociation.org'
        ),
        m('h3', 'Talent Education Research Institute (TERI)'),
        m('p', 'Japan'),
        m('a', {href: "www.suzukimethod.or.jp"}, 'www.suzukimethod.or.jp'),
        m('h3', 'Alþjóða Suzukisambandið (International Suzuki Association)'),
        m(
          'a', {href: "www.internationalsuzuki.org"},
          'www.internationalsuzuki.org'
        )
      ]),
      m.component(Right)
    ];
  }
};

var Myndir = {
  vm: {
    init: function() {
      // Set corresponding nav as active
      initPages();
      pages[5].span(true);
    }
  },
  controller: function() {
    Myndir.vm.init();
  },
  view: function() {
    return [
      m('div', {id: 'fyrri-mynd'}, [
        m('strong', 'Fyrri mynd')
      ]),
      m(
        'div',
        {id: 'myndarammi'},
        m.component(
          Images,
          {
            slideshowConf: mainSlideshowConf,
            images: images
          }
        )
      ),
      m('div', {id: 'naesta-mynd'}, [
        m('strong', 'Næsta mynd')
      ])
    ];
  }
};

var mainSlideshowConf = function() {
  $('#myndarammi .cycle-slideshow').cycle({
    fx: 'scrollHorz',
    centerHorz: true,
    centerVert: true,
    prev: "#fyrri-mynd",
    next: "#naesta-mynd",
    swipe: true
  });
};

var headerSlideshowConf = function() {
  $('#header .cycle-slideshow').cycle({
    centerHorz: true,
  });
};

var Images = {
  view: function(ctrl, args) {
    return m(
      'div[class="cycle-slideshow"]',
      {
        config: args.slideshowConf
      },
      args.images['file-names'].map(function(imageFile) {
        return m(
          'img',
          {
            src: args.images.path + '/' + imageFile,
            alt: args.images['alt-text']
          }
        );
      })
    );
  }
};

var Nav = {
  vm: {
    init: function() {
      Nav.vm.pages = pages;
    },
    changeActiveNavTo: function(nav) {
      //Nav.vm.pages.map(function(page) {
      //  page.span(false);
      //});
      //nav.span(true);
    }
  },
  controller: function(args) {
    Nav.vm.init();
  },
  view: function(ctrl, args) {
    return m('ul', [
      args.pages.map(function(page) {
        var urlText = page.text;
        if(page.span()) {
          urlText = m('span', page.text);
        }

        return m('li', m(
          'a', {
            href: '#/' + page.path,
            onclick: Nav.vm.changeActiveNavTo.bind(Nav.vm, page)
          }, urlText
        ));
      })
    ]);
  }
};
