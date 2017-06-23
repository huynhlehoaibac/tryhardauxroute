import { TryhardauxroutePage } from './app.po';

describe('tryhardauxroute App', () => {
  let page: TryhardauxroutePage;

  beforeEach(() => {
    page = new TryhardauxroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
