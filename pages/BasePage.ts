import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async goto(path: string = '/') {
    const resp = await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(resp?.ok(), `GET ${path} should be 2xx`).toBeTruthy();
  }
}
