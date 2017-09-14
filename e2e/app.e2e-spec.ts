import { CompleteGuidePage } from './app.po';

describe('complete-guide App', () => {
  let page: CompleteGuidePage;

  beforeEach(() => {
    page = new CompleteGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
