const{test,expect} = require ('@playwright/test')

const loginURL = 'https://uat-dxn.aviatorsms.com/';
const dashboardURL = 'https://uat-dxn.aviatorsms.com/Menus.aspx';

const username = 'lsg_222';
const password = 'welcome';
//zoom size
    /**
 * @param {import('@playwright/test').Page} page
 */
async function setZoom80(page) {
    await page.evaluate(() => {
        document.documentElement.style.zoom = '90%';
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

    await setZoom80(page);
    
}
 function generateVehicleNumber(){
const state='AP';
const distrit='31';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letter1 = letters[Math.floor(Math.random()*26)];
const letter2 = letters[Math.floor(Math.random()*26)];
const number = Math.floor(Math.random()*1000).toString().padStart(4,'0');
return`${state} ${distrit} ${letter1}${letter2} ${number}`;
 }
    //login 
    /**
 * @param {import('@playwright/test').Page} page
 */
    async function login(page) {
      await page.goto(loginURL);
      await  setZoom80(page);
      await page.locator("//*[@id='txt_Username']").fill(username);
       await page.locator("//*[@id='txt_Password']").fill(password);
  await page.locator("//*[@id='btn_Login']").click();
  await expect(page).toHaveURL(dashboardURL);
//   await setZoom80(page);
  await  openEquipmentManagement(page);
    }
    test('login function', async ({ page }) => {
      await login(page);
    })
    test.describe('aviator sms', ()=>{
test.beforeEach(async ({page}) =>{
await login(page);
})

 test.only('Request Application', async ({ page }) => {

    const vehicleNumber = generateVehicleNumber();
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_3988_OF']").fill(vehicleNumber);
     await page.waitForTimeout(3000);
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5747_ME_842']").selectOption({index:2});
    await page.waitForTimeout(3000);
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5749_ME_844']").selectOption({index:2});
    await page.waitForTimeout(5000);
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_2157_OF']").pressSequentially('CRANE');
   await page.waitForTimeout(3000);
    await page.evaluate(() => {
    window.scrollBy(0,1100);
});
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Attach' }).click();
  const page1 = await page1Promise;
await page1.locator('#ctl00_ContentPlaceHolder1_txt_1992_OF').fill('Aadhar');
const fileInput = page1.locator('input[type="file"]');
await fileInput.waitFor({ state: 'attached', timeout: 15000 });
await fileInput.setInputFiles( 'C:\\Users\\niteeshi\\Pictures\\Screenshots\\Screenshot 2026-07-01 141938.png');
await page1.locator('#ctl00_ContentPlaceHolder1_btn_AddAttachment').click();
await page.goto('https://uat-dxn.aviatorsms.com/MainForm.aspx?hId=Td2JymWwcgX%2f7+3o%2fYKJmA%3d%3d&cId=T6Ia2UTKDsOMFLuHtWS53A%3d%3d&catID=QStsOI%2fExXVAhFe3B9H2Zg%3d%3d&pid=Td2JymWwcgX%2f7+3o%2fYKJmA%3d%3d&fid=3q1NX9aF9UV5LJyv+4yCbQ%3d%3d&RecordID=QStsOI%2fExXVAhFe3B9H2Zg%3d%3d&Module=aUao64M1406FsLsG4U77iQ%3d%3d&Mode=C9JBk%2fbs%2fvrFlXdmvmTEmQ%3d%3d&startup=QxBOUNf0JJJ%2f148VsXLtRg%3d%3d&strtfid=3q1NX9aF9UV5LJyv+4yCbQ%3d%3d&pName=oTuStdZzDdMbd2HKFqgP8A%3d%3d');
 await page.waitForTimeout(3000);
 await page.evaluate(() => {
    window.scrollBy(0,1100);
});
 await page.waitForTimeout(3000);
  const options = await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5750_ME_845']").allTextContents;
console.log(options);
    await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5750_ME_845']").selectOption({index:79});
 });
})

