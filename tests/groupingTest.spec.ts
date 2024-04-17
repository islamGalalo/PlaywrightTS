import test, { expect } from "@playwright/test";

test.describe('testsuite', async ()=>{
    test('should first',async ({page}) => {
        await page.goto('https://hqdev.it-cores.com:8800/')
      })
     test('should second',async ({page}) => { 
        await page.goto('https://clouddev.it-cores.com:8800/')
      })
      test('tag test @smoke',async ({page}) => { 
        await page.goto('https://clouddev.it-cores.com:8800/')
     //npx playwright test --grep 'smoke'
      })
})