import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
  async expectOnBookingPage() {
    await expect(this.page).toHaveURL(/\/360-photobooth-buchungsanfrageformular\/?/i);
  }
}
