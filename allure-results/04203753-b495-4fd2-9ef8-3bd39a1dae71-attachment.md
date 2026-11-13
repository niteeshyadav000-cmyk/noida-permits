# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login_codegen.spec.js >> Negative Login Tests >> Login with incorrect password
- Location: tests\login_codegen.spec.js:78:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/invalid credentials|incorrect password/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/invalid credentials|incorrect password/i) with timeout 5000ms
  - waiting for getByText(/invalid credentials|incorrect password/i)

```

```yaml
- heading "Login" [level=2]
- paragraph: Sign in to continue
- text: Email Address
- textbox "Email Address": niteesh.negative@example.com
- text: Password
- textbox "Password":
  - /placeholder: Enter Password
  - text: WrongPassword@123
- button
- button "Login"
- text: Don't have an account? SignUp
- heading "Signup" [level=2]
- paragraph: Create your AeroSlot account
- text: Select Operator
- combobox "Select Operator"
- text: Username
- textbox "Username"
- text: Email Address
- textbox "Email Address"
- text: Phone Number
- textbox "Phone Number"
- text: Password
- textbox "Password"
- text: Confirm Password
- textbox "Confirm Password"
- button "Signup"
- text: Already have an account? Login
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
  8   |   test.beforeEach(async ({ page }) => {
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
> 86  |     await expect(page.getByText(/invalid credentials|incorrect password/i)).toBeVisible();
      |                                                                             ^ Error: expect(locator).toBeVisible() failed
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
  109 |   await page.getByRole('button', { name: 'Signup' }).click();
  110 | 
  111 |   // Wait for the first registration to complete.
  112 |   // Add an assertion here for your application's actual success message.
  113 | 
  114 |   // Second registration with the same details
  115 |   await page.getByText('SignUp', { exact: true }).click();
  116 | 
  117 |   await page.getByText('Select Option', { exact: true }).click();
  118 | 
  119 |   // Replace SECOND_OPTION with the exact name of your second dropdown option.
  120 |   await page.getByText('SECOND_OPTION', { exact: true }).click();
  121 | 
  122 |   await page.getByRole('textbox', { name: 'Username' }).fill(username);
  123 |   await page.getByPlaceholder('Email Address').fill(email);
  124 |   await page.getByRole('textbox', { name: 'Phone Number' }).fill(phone);
  125 |   await page.getByPlaceholder('Password', { exact: true }).fill(password);
  126 |   await page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);
  127 | 
  128 |   await page.getByRole('button', { name: 'Signup' }).click();
  129 | 
  130 |   // Verify duplicate email validation
  131 |   await expect(
  132 |     page.getByText(/email.*already|already.*email|email.*exists/i)
  133 |   ).toBeVisible();
  134 | 
  135 | });
  136 | 
  137 | });
  138 | 
```