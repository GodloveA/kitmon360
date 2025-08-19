import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BookingPage } from '../pages/BookingPage';

test('“Jetzt buchen” CTA opens the booking page', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.clickAnyJetztBuchenCTA();

  const booking = new BookingPage(page);
  await booking.expectOnBookingPage();
});
