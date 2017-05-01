import { GlGantteChartClientPage } from './app.po';

describe('gl-gantte-chart-client App', () => {
  let page: GlGantteChartClientPage;

  beforeEach(() => {
    page = new GlGantteChartClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
