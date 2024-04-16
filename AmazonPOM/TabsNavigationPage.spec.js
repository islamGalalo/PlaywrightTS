import {test , expect} from '@playwright/test';
import { TabsNavigationPage } from './TabsNavigationPage';
test ('test', async ({page})=> {
const tabs = new TabsNavigationPage (page);
tabs.tap1();
tabs.tap2();
tabs.tap3();
tabs.tap4();
tabs.tap5();
tabs.tap6();
tabs.tap7();
tabs.tap8();
tabs.tap9();
tabs.tap10();
})

