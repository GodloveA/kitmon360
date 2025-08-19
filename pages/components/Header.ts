import { Locator, Page } from '@playwright/test';

export type HeaderLink = { name: string; href: string; pathname: string };

export class Header {
  readonly page: Page;
  readonly root: Locator;
  readonly desktopMenuLinks: Locator;
  readonly mobileMenuLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator('header.site-header');
    this.desktopMenuLinks = this.root.locator('#menu-header a[href]');
    this.mobileMenuLinks  = this.root.locator('#menu-header-1 a[href]');
  }

  async getHeaderLinks(): Promise<HeaderLink[]> {
    const source = (await this.desktopMenuLinks.count()) ? this.desktopMenuLinks : this.mobileMenuLinks;
    return await source.evaluateAll((as: HTMLAnchorElement[]) => {
      const out: { name: string; href: string; pathname: string }[] = [];
      const seen = new Set<string>();
      for (const a of as) {
        const href = a.getAttribute('href') || '';
        const name = (a.textContent || '').trim();
        if (!href || !name) continue;
        try {
          const u = new URL(href, 'https://kitmon360.de');
          if (!seen.has(u.pathname)) {
            seen.add(u.pathname);
            out.push({ name, href: u.toString(), pathname: u.pathname });
          }
        } catch { /* ignore */ }
      }
      return out;
    });
  }

  async clickNavByName(name: string) {
    const rx = new RegExp(`^${name}$`, 'i');
    const desktop = this.root.locator('#menu-header').getByRole('link', { name: rx });
    if (await desktop.count()) {
      await desktop.first().click();
    } else {
      const mobile = this.root.locator('#menu-header-1').getByRole('link', { name: rx });
      await mobile.first().click();
    }
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickBuchenFromHeader() {
    await this.clickNavByName('Buchen');
  }
}
