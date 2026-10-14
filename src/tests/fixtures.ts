import { test as base } from 'playwright-bdd';
import rawData from './data/dataEntry.json';
import { OrderData } from './models/DataEntryModels';

const testData: OrderData = { ...(rawData as OrderData) };
const [user, domain] = testData.user_info.email.split('@');
testData.user_info.email =  `${user}_${Date.now()}@${domain}`;

export const test = base.extend<{ testData: OrderData }>({
  testData: async ({}, use) => {
    // const data = { ...(rawData as OrderData) };
    // const [user, domain] = data.user_info.email.split('@');
    // data.user_info = { ...data.user_info, email: `${user}_${Date.now()}@${domain}` };
    await use(testData);
  },
});