import { CyzaV2Page } from './app.po';

describe('cyza-v2 App', function() {
  let page: CyzaV2Page;

  beforeEach(() => {
    page = new CyzaV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
