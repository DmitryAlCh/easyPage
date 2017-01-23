import { EasyPagePage } from './app.po';

describe('easy-page App', function() {
  let page: EasyPagePage;

  beforeEach(() => {
    page = new EasyPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
