import { test, expect } from '@playwright/test';

test.describe('navigation', () => {

    test.beforeAll(async ({ page }) => {
        // Go to the starting url before each test.

    });
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://playwright.dev/');
    });

    test('main navigation', async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL('https://playwright.dev/');
    });
    test.afterEach(async ({ page }) => {
        page.close();
    });
    test.afterAll(async ({ page }) => {
        page.close();
    });
});