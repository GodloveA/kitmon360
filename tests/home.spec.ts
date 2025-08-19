import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('homepage loads', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.expectLoaded();
});
