import {test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
    //Here goes the test code
    await page.goto('https://www.example.com/')//load the testing website
    const pageTitle = await page.locator('h1')//to store an element into a variable
    await expect(pageTitle).toContainText('Example Domain') //verification
})

test('Clinking on Elements', async ({ page }) =>{
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})