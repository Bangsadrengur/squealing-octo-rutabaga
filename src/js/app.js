global.$ = global.jQuery = require('jquery');
require('mithril');

require('../jquery/jquery.cycle2.js');
require('../jquery/jquery.cycle2.center.min.js');
require('../jquery/jquery.cycle2.swipe.min.js');

var pages = require('./pages');

pages.initPages();

require('./router');
