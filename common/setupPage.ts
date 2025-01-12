import { BrowserContext, Page } from '@playwright/test';

export const setupPage = async (
  context: BrowserContext,
  page: Page,
  deviceToken: string
) => {
  await page.setExtraHTTPHeaders({
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept-Language': 'en-GB,en;q=0.8',
  });

  await context.addCookies([
    {
      name: 'dev',
      value: deviceToken,
      domain: process.env.COOKIE_DOMAIN!,
      path: '/',
      expires: 1771085277.72642,
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
    },
  ]);
};
