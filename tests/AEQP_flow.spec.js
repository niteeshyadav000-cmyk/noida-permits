  
import { test, expect } from '@playwright/test';

const loginURL = 'https://uat-dxn.aviatorsms.com/';
const dashboardURL = 'https://uat-dxn.aviatorsms.com/Menus.aspx';

const username = 'lsg_222';
const password = 'welcome';

// Reusable login function
async function setZoom75(page) {
  await page.evaluate(() => {
    document.documentElement.style.zoom = '75%';
  });
}
async function login(page) {
  await page.goto(loginURL);
   await setZoom75(page);
  await page.locator("//*[@id='txt_Username']").fill(username);
  await page.locator("//*[@id='txt_Password']").fill(password);
  await page.locator("//*[@id='btn_Login']").click();

  await expect(page).toHaveURL(dashboardURL);
   await setZoom75(page);
}

// TC01 - Test login
test('Login with valid credentials', async ({ page }) => {
  await login(page);
});

// Tests that need an authenticated session
test.describe('request Permit Tests', () => {

  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  // TC02 - Navigate to ADP Request
  test('Click on ADP Request', async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.locator("//*[@id='form1']/div[4]/div[4]").click();
    await page.waitForTimeout(3000);
    await page.locator("//*[@id='div5_Liparent4']/a").click();
   await page.waitForTimeout(3000);
   await page.locator("//*[@id='div5_ul4']/li[1]/a/span").click();
   await page.waitForTimeout(3000);
      await setZoom75(page);
    await expect(page).toHaveURL(/Mainform%20for%20Permitpasses\.aspx/);
  });
 // TC03 - requesting AEQP
  test('request', async ({ page }) => {
    
 });

});




