import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('each header link opens successfully', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();

  const links = await home.header.getHeaderLinks();
  expect(links.length).toBeGreaterThan(0);

  for (const link of links) {
    await home.open();
    await home.header.clickNavByName(link.name);

    const currentPath = new URL(page.url()).pathname.toLowerCase();
    expect(currentPath).toContain(link.pathname.toLowerCase());

    // basic content presence on destination
    await expect(page.getByRole('heading', { level: 1 }).or(page.locator('#content'))).toBeVisible();
  }
});
