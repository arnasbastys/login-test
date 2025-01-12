import { test, expect } from '@playwright/test';
import {
  loginUser,
  otpCode,
  setupPage,
  getPortfolioCurrency,
  getPortfolioValue,
  validCurrenciesRegex,
  validNumberFormatRegex,
} from '../common';

test.beforeEach(async ({ context, page }) => {
  await setupPage(context, page, process.env.COOKIE_DEVICE_TOKEN!);
  await loginUser(
    page,
    process.env.USERNAME!,
    process.env.PASSWORD!,
    otpCode()
  );
});

test('Portfolio value', async ({ page }) => {
  const currency = await getPortfolioCurrency(page);
  const value = await getPortfolioValue(page);
  expect(currency).toMatch(validCurrenciesRegex);
  expect(value).toMatch(validNumberFormatRegex);
});
