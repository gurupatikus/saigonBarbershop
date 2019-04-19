import { SaigonBarbershopPage } from './app.po';

describe('saigon-barbershop App', function() {
  let page: SaigonBarbershopPage;

  beforeEach(() => {
    page = new SaigonBarbershopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
