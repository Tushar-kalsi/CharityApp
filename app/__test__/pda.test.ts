// __tests__/pda.test.ts
import { expect } from '@jest/globals';
import { PDA } from '../pda';
import { PublicKey } from "@project-serum/anchor";

jest.mock("@project-serum/anchor", () => ({
  web3: {
    PublicKey: jest.fn(),
  }
}));

describe('PDA', () => {
  let pda: PDA;

  beforeEach(() => {
    jest.clearAllMocks();
    (PublicKey.findProgramAddress as jest.Mock).mockImplementation(async (seeds: Buffer[], programId: PublicKey) => {
      // Mocking PublicKey.findProgramAddress method
      return [new PublicKey(), 0];
    });

    // Creating a new instance of PDA with a mock programId
    pda = new PDA(new PublicKey());
  });

  test('donatePlatform method', async () => {
    const authority = new PublicKey();
    const result = await pda.donatePlatform(authority);
    expect(result).toBeDefined();
    // Add more assertions as needed
  });

  test('topDonators method', async () => {
    const authority = new PublicKey();
    const result = await pda.topDonators(authority);
    expect(result).toBeDefined();
    // Add more assertions as needed
  });

  test('donatorAcc method', async () => {
    const donatePlatform = new PublicKey();
    const id = 123;
    const result = await pda.donatorAcc(donatePlatform, id);
    expect(result).toBeDefined();
    // Add more assertions as needed
  });
});
