describe('pages', function() {
  beforeEach(function() {
    this.pages = require('../src/js/pages');
  });

  it('should have a Home page', function() {
    expect(this.pages.Home).toBeDefined();
  });
});
