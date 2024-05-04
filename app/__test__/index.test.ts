
import { Donates } from '../Donates'; // Adjust the path accordingly
import { Program, web3 } from "@project-serum/anchor";
import { PDA } from "../pda";
import { expect, jest } from '@jest/globals';

// Mock the dependencies
jest.mock("@project-serum/anchor", () => ({
  Program: jest.fn(),
  web3: {
    PublicKey: jest.fn(),
    // Mock other methods or objects as needed
  }
}));

// Mock the PDA class
jest.mock("../pda", () => ({
  PDA: jest.fn(() => ({
    donatePlatform: jest.fn(),
    topDonators: jest.fn()
  }))
}));

describe('Donates', () => {
  let donates: Donates;

  beforeEach(() => {

    jest.clearAllMocks();

    // Mocks Program and web3.PublicKey constructors
    (Program as jest.Mock).mockReturnValue({
      account: {
        donates: {
          fetch: jest.fn()
        },
        donator: {
          fetch: jest.fn()
        },
        topDonators: {
          fetch: jest.fn()
        }
      },
      methods: {
        send: jest.fn(),
        withdraw: jest.fn(),
        initialize: jest.fn()
      }
    });
    (web3.PublicKey as jest.Mock).mockReturnValue({});

    // Creates a new instance of Donates
    donates = new Donates({ program: new Program(), systemProgram: {} as any });
  });

  test('Constructor sets up properties correctly', () => {
    // Ensures properties are initialized correctly
    expect(donates.program).toBeDefined();
    expect(donates.donates).toBeDefined();
    expect(donates.donator).toBeDefined();
    expect(donates.top).toBeDefined();
    expect(donates.systemProgram).toBeDefined();
    expect(donates.pda).toBeDefined();
  });

});
