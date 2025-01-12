import { Page, expect } from '@playwright/test';

export const loginUser = async (
  page: Page,
  username: string,
  password: string,
  totpCode: string
) => {
  await page.goto(process.env.URL! + '/sign-in');
  await page.getByLabel('Email or username').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByText('Continue').click();
  twoFactorAuthentication(page, totpCode);
};

export const twoFactorAuthentication = async (page: Page, totpCode: string) => {
  await expect(page.getByTestId('TwoFactorAuthentication')).toBeVisible();
  await page.getByText('Authenticator app').click();
  await page.getByLabel('2FA code').pressSequentially(totpCode, { delay: 100 });
  await page.getByRole('button', { name: 'Enter' }).click();
};
