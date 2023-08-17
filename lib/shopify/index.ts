import { Cart, Menu } from 'lib/shopify/types';
import { sleep } from 'lib/utils/sleep';

export async function getMenu(): Promise<Menu[]> {
  await sleep(1000);

  return [
    {
      title: 'title-1',
      path: 'path-1'
    },
    {
      title: 'title-2',
      path: 'path-2'
    },
    {
      title: 'title-3',
      path: 'path-3'
    }
  ];
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  await sleep(1000);

  return undefined;
}
