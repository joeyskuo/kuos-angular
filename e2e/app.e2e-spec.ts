import { KuosAngularPage } from './app.po';

describe('kuos-angular App', () => {
  let page: KuosAngularPage;

  beforeEach(() => {
    page = new KuosAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
