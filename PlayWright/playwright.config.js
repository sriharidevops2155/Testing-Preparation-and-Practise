// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  retries :0,
  timeout:40*1000,  // Every test in the test folder should complete execution in 30 sec 
  expect : {  // assertion validation timeout 
    timeout: 5000,
  },
  reporter: 'html',
  use: {
      browserName: 'chromium',
      // browserName: 'firefox',
      // browserName: 'webkit',
      headless : true,  // headless:true will disbale live browser , headless:flase -->  npx playwright test --headed - It will show browsers  
      screenshot: 'on',  // Screenshot on every step 
      trace: 'on',  // details logs 'retain-only-failure' - Generate the traces only on failure
      actionTimeout: 10 * 1000,
      navigationTimeout: 30 * 1000, 
    },
});
module.exports = config
