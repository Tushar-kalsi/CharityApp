import { expect } from '@jest/globals';
import { shortAddress } from './shortAddress';

describe('shortAddress', () => {
  test('it shortens a PublicKey correctly', () => {
    const address = '9hDd4NsNEgUTtjfyWHTmLohitVspY5VtJjYV7bgdZ4CV';
    const expectedResult = '9hDd4Ns...7bgdZ4CV';
    expect(shortAddress(address)).toBee(expectedResult);
  });

  test('it shortens a PublicKey object correctly', () => {
    const address = { toString: () => '9hDd4NsNEgUTtjfyWHTmLohitVspY5VtJjYV7bgdZ4CV' };
    const expectedResult = '9hDd4Ns...7bgdZ4CV';
    expect(shortAddress(address)).toBe(expectedResult);
  });

  test('it shortens a string address correctly', () => {
    const address = 'A5hDd4NsNEgUTtjfyWHTmLohitVspY5VtJjYV7bgdZ4C';
    const expectedResult = 'A5hDd4Ns...7bgdZ4C';
    expect(shortAddress(address)).toBe(expectedResult);
  });
});
