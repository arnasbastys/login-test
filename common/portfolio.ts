import { Page } from '@playwright/test';

const selectors = {
  portfolioCurrency:
    '[class*=Portfolio_headerWrapper] div > .text-ds-neutral:first-child',
  portfolioValue: '[class*=Portfolio_headerWrapper] div > .text-ds-primary',
};

export const getPortfolioCurrency = async (page: Page): Promise<string> => {
  return await page.locator(selectors.portfolioCurrency).innerText();
};

export const getPortfolioValue = async (page: Page): Promise<string> => {
  return await page.locator(selectors.portfolioValue).innerText();
};

export const validCurrenciesRegex: RegExp = /^(?:\$|€|£|CA\$|CHF|A\$)$/;

export const validNumberFormatRegex: RegExp =
  /^\d{1,3}(?:[.,\u202F]\d{3})*[.,]\d{2}$/;
