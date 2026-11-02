const{test,expect} = require ('@playwright/test')

const loginURL = 'https://uat-dxn.aviatorsms.com/';
const dashboardURL = 'https://uat-dxn.aviatorsms.com/Menus.aspx';

const username = 'lsg_222';
const password = 'welcome';
//zoom size
    /**
 * @param {import('@playwright/test').Page} page
 */
async function setZoom75(page) {
    await page.evaluate(() => {
        document.documentElement.style.zoom = '75%';
    });
}
// Equipment Management navigation
/**
 * @param {import('@playwright/test').Page} page
 */
async function openEquipmentManagement(page) {

    await page.locator('xpath=//*[@id="form1"]/div[4]/div[4]').click();

    await page.locator('xpath=//*[@id="div5_Liparent1"]/a').click();

    await page.locator('xpath=//*[@id="div5_ul1"]/li[1]/a/span').click();

    await setZoom75(page);
    
}
 function generateVehicleNumber(){
const state='AP';
const distrit='31';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letter1 = letters[Math.floor(Math.random()*26)];
const letter2 = letters[Math.floor(Math.random()*26)];
const number = Math.floor(Math.random()*1000).toString().padStart(4,'0');
 }
    //login 
    /**
 * @param {import('@playwright/test').Page} page
 */
    async function login(page) {
      await page.goto(loginURL);
      await  setZoom75(page);
      await page.locator("//*[@id='txt_Username']").fill(username);
       await page.locator("//*[@id='txt_Password']").fill(password);
  await page.locator("//*[@id='btn_Login']").click();
  await expect(page).toHaveURL(dashboardURL);
  await setZoom75(page);
  await  openEquipmentManagement(page);
    }
    test('login function', async ({ page }) => {
      await login(page);
    })
    test.describe('aviator sms', ()=>{
test.beforeEach(async ({page}) =>{
await login(page);
})

 test('Request Application', async ({ page }) => {

    const vehicleNumber = generateVehicleNumber();

    // console.log('Vehicle Number:', vehicleNumber);

    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_3988_OF']").fill('vehicleNumber');
     await page.waitForTimeout(3000);
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5747_ME_842']").selectOption({index:2});
    await page.waitForTimeout(3000);
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_2157_OF']").pressSequentially('CRANE');
   
    })
})


  



