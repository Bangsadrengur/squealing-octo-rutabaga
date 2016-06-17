var m = require('mithril');
var Images = {
  view: {},
  vm: {},
  controller: {}
};

function cycleImages(args) {
  return args.images['file-names'].slice(1).map(function(imageFile) {
    return "<img src='" + imageFile + "' alt='" + args.images['alt-text'] + "'>"
  });
}

function view(ctrl, args) {
  return m(
    'div',
    {
      class: "cycle-slideshow",
      'data-cycle-loader': true,
      'data-cycle-progressive': '#slides',
      config: args.slideshowConf
    },
    m('img', { src: args.images['file-names'][0], alt: args.images['alt-text'] })
  );
}

function controller(args) {
  global.slides = cycleImages(args);
}

Images.controller = controller;

Images.view = view;

module.exports = Images;
