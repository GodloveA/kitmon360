import { BasePage } from './BasePage';
import { Header } from './components/Header';
import { expect, Page } from '@playwright/test'; // <-- add Page

export class HomePage extends BasePage {
  readonly header: Header;

  constructor(page: Page) {               // <-- type the parameter
    super(page);
    this.header = new Header(page);
  }

  async open() { await this.goto('/'); }

  async clickAnyJetztBuchenCTA() {
    await this.page.getByRole('link', { name: /Jetzt buchen/i }).first().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectLoaded() {
    await expect(this.page.locator('header.site-header')).toBeVisible();
    // pick a single, unambiguous element
    await expect(this.page.locator('section.header-hero h1').first()).toBeVisible();
    await expect(this.page).toHaveTitle(/kitmon|360|photo|booth/i);
  }
}
