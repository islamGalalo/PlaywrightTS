/* 
codegen : npx playwright codegen  https://hqdev.it-cores.com:4400/

npx playwright test

npx playwright test --ui

npx playwright test --headed

Run tests on different browsers :
             npx playwright test --project webkit

To specify multiple browsers 
             npx playwright test --project webkit --project firefox


Run specific tests
             npx playwright test landing-page.spec.ts
To run a set of test files from different directories
             npx playwright test tests/todo-page/ tests/landing-page/

To run a test with a specific title
             npx playwright test -g "add a todo item"


Debug tests with the Playwright Inspector
             npx playwright test --debug

             npx playwright test example.spec.ts --debug

            

npx playwright show-report
npx playwright test --trace on

























*/