# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login_codegen.spec.js >> Negative Signup Tests >> Signup with invalid email
- Location: tests\login_codegen.spec.js:22:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e7]:
    - generic [ref=e8]:
      - heading "Login" [level=2] [ref=e9]
      - paragraph [ref=e10]: Sign in to continue
    - generic [ref=e11]:
      - generic [ref=e14]:
        - generic [ref=e15]:
          - generic [ref=e16]:
            - text: Email Address
            - generic [aria-hidden] [ref=e17]: "*"
          - textbox "Email Address" [ref=e18]
        - generic [ref=e19]:
          - img [aria-hidden]: email
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - text: Password
            - generic [aria-hidden] [ref=e26]: "*"
          - textbox "Password" [ref=e27]:
            - /placeholder: Enter Password
        - button [ref=e29] [cursor=pointer]:
          - img [aria-hidden] [ref=e30]: visibility_off
      - button "Login" [ref=e34]
      - generic [ref=e38] [cursor=pointer]:
        - text: Don't have an account?
        - generic [ref=e39]: SignUp
  - generic [ref=e40]:
    - generic [ref=e41]:
      - heading "Signup" [level=2] [ref=e42]
      - paragraph [ref=e43]: Create your AeroSlot account
    - generic [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e49] [cursor=pointer]:
          - generic [ref=e50]:
            - text: Select Operator
            - generic [aria-hidden] [ref=e51]: "*"
          - combobox "Select Operator" [ref=e52]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - text: Username
            - generic [aria-hidden] [ref=e66]: "*"
          - textbox "Username" [ref=e67]
      - generic [ref=e69]:
        - generic [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]:
              - text: Email Address
              - generic [aria-hidden] [ref=e75]: "*"
            - textbox "Email Address" [ref=e76]
          - generic [ref=e77]:
            - img [aria-hidden]: email
        - generic [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]:
              - text: Phone Number
              - generic [aria-hidden] [ref=e84]: "*"
            - textbox "Phone Number" [ref=e85]
          - generic [ref=e86]:
            - img [aria-hidden]: phone
      - generic [ref=e88]:
        - generic [ref=e91]:
          - generic [ref=e92]:
            - generic [ref=e93]:
              - text: Password
              - generic [aria-hidden] [ref=e94]: "*"
            - textbox "Password" [ref=e95]
          - img [aria-hidden] [ref=e97] [cursor=pointer]: visibility
        - generic [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e103]:
              - text: Confirm Password
              - generic [aria-hidden] [ref=e104]: "*"
            - textbox "Confirm Password" [ref=e105]
          - img [aria-hidden] [ref=e107] [cursor=pointer]: visibility
      - button "Signup" [ref=e109]
      - generic [ref=e113] [cursor=pointer]:
        - text: Already have an account?
        - generic [ref=e114]: Login
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | 
  4   | const URL = 'https://allocate.prospacta.org/uat/auth';
  5   | 
  6   | test.describe('Negative Signup Tests', () => {
  7   | 
> 8   |   test.beforeEach(async ({ page }) => {
      |        ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  9   |     await page.goto(URL);
  10  |     await page.getByText('SignUp', { exact: true }).click();
  11  |     await page.getByText('Select Option', { exact: true }).click();
  12  |     await page.getByText('Airport Operater', { exact: true }).click();
  13  |   });
  14  | 
  15  |   test('Signup with all fields empty', async ({ page }) => {
  16  |     await page.getByRole('button', { name: 'Signup' }).click();
  17  | 
  18  |     // Verify required-field validation appears
  19  |     await expect(page.getByText(/required/i).first()).toBeVisible();
  20  |   });
  21  | 
  22  |   test('Signup with invalid email', async ({ page }) => {
  23  |     await page.getByRole('textbox', { name: 'Username' }).fill('Niteesh');
  24  | 
  25  |     await page.getByPlaceholder('Email Address').fill('niteesh123');
  26  | 
  27  |     await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');
  28  | 
  29  |     await page.getByPlaceholder('Password', { exact: true }).fill('Niteesh@222');
  30  | 
  31  |     await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Niteesh@222');
  32  | 
  33  |     await page.getByRole('button', { name: 'Signup' }).click();
  34  | 
  35  |     await expect(page.getByText(/valid email/i)).toBeVisible();
  36  |   });
  37  | 
  38  |   test('Signup with password mismatch', async ({ page }) => {
  39  |     await page.getByRole('textbox', { name: 'Username' }).fill('Niteesh');
  40  | 
  41  |     await page.getByPlaceholder('Email Address').fill('niteesh.negative@example.com');
  42  | 
  43  |     await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');
  44  | 
  45  |     await page.getByPlaceholder('Password', { exact: true }).fill('Niteesh@222');
  46  | 
  47  |     await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Different@222');
  48  | 
  49  |     await page.getByRole('button', { name: 'Signup' }).click();
  50  | 
  51  |     await expect(page.getByText(/password.*match|match.*password/i)).toBeVisible();
  52  |   });
  53  | 
  54  | });
  55  | 
  56  | test.describe('Negative Login Tests', () => {
  57  | 
  58  |   test.beforeEach(async ({ page }) => {
  59  |     await page.goto(URL);
  60  |   });
  61  | 
  62  |   test('Login with empty fields', async ({ page }) => {
  63  |     await page.getByRole('button', { name: 'Login' }).click();
  64  | 
  65  |     await expect(page.getByText(/required/i).first()).toBeVisible();
  66  |   });
  67  | 
  68  |   test('Login with invalid email', async ({ page }) => {
  69  |     await page.locator('#mat-input-0').fill('invalidemail');
  70  | 
  71  |     await page.getByPlaceholder('Enter Password').fill('Niteesh@222');
  72  | 
  73  |     await page.getByRole('button', { name: 'Login' }).click();
  74  | 
  75  |     await expect(page.getByText(/valid email/i)).toBeVisible();
  76  |   });
  77  | 
  78  |   test('Login with incorrect password', async ({ page }) => {
  79  |     await page.locator('#mat-input-0').fill('niteesh.negative@example.com');
  80  | 
  81  |     await page.getByPlaceholder('Enter Password').fill('WrongPassword@123');
  82  | 
  83  |     await page.getByRole('button', { name: 'Login' }).click();
  84  | 
  85  |     // Replace this with the actual error message shown by your application
  86  |     await expect(page.getByText(/invalid credentials|incorrect password/i)).toBeVisible();
  87  |   });
  88  | 
  89  | test('Same email should not register with another dropdown option', async ({ page }) => {
  90  | 
  91  |   const username = 'Niteesh';
  92  |   const email = 'niteesh.duplicate@example.com';
  93  |   const phone = '1234567890';
  94  |   const password = 'Niteesh@222';
  95  | 
  96  |   // First registration
  97  |   await page.goto(URL);
  98  | 
  99  |   await page.getByText('SignUp', { exact: true }).click();
  100 |   await page.getByText('Select Option', { exact: true }).click();
  101 |   await page.getByText('Airport Operater', { exact: true }).click();
  102 | 
  103 |   await page.getByRole('textbox', { name: 'Username' }).fill(username);
  104 |   await page.getByPlaceholder('Email Address').fill(email);
  105 |   await page.getByRole('textbox', { name: 'Phone Number' }).fill(phone);
  106 |   await page.getByPlaceholder('Password', { exact: true }).fill(password);
  107 |   await page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);
  108 | 
```