'use server';

import { sleep } from 'lib/utils/sleep';

export const removeItem = async (lineId: string): Promise<String | undefined> => {
  await sleep(1000);
  return undefined;
};
