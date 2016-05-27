var pages = require('../src/js/pages');

describe('pages', function() {
  it('should have a Home page', function() {
    expect(pages.Home).toBeDefined();
  });
});
