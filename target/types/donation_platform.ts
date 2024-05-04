/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/donation_platform.json`.
 */
export type DonationPlatform = {
  "address": "92yBtPmAVtLPnqxvsQ1cMbkgM5DonthohKGZHf1CBkft",
  "metadata": {
    "name": "donationPlatform",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "donatePlatform",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  111,
                  110,
                  97,
                  116,
                  101,
                  95,
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "topDonators",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  112,
                  95,
                  100,
                  111,
                  110,
                  97,
                  116,
                  111,
                  114,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "target",
          "type": "u64"
        }
      ]
    },
    {
      "name": "send",
      "discriminator": [
        102,
        251,
        20,
        187,
        65,
        75,
        12,
        69
      ],
      "accounts": [
        {
          "name": "donator",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "donatorAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  111,
                  110,
                  97,
                  116,
                  101,
                  95,
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  95,
                  100,
                  111,
                  110,
                  97,
                  116,
                  111,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "donatePlatform"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "donatePlatform",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  111,
                  110,
                  97,
                  116,
                  101,
                  95,
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109
                ]
              },
              {
                "kind": "account",
                "path": "donate_platform.authority",
                "account": "donates"
              }
            ]
          }
        },
        {
          "name": "topDonators",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  111,
                  112,
                  95,
                  100,
                  111,
                  110,
                  97,
                  116,
                  111,
                  114,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "donate_platform.authority",
                "account": "donates"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "discriminator": [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "donatePlatform"
          ]
        },
        {
          "name": "donatePlatform",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  111,
                  110,
                  97,
                  116,
                  101,
                  95,
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109
                ]
              },
              {
                "kind": "account",
                "path": "donate_platform.authority",
                "account": "donates"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "donates",
      "discriminator": [
        163,
        38,
        29,
        84,
        45,
        241,
        237,
        164
      ]
    },
    {
      "name": "donator",
      "discriminator": [
        32,
        79,
        178,
        227,
        28,
        91,
        97,
        22
      ]
    },
    {
      "name": "topDonators",
      "discriminator": [
        85,
        111,
        136,
        67,
        175,
        13,
        129,
        158
      ]
    }
  ],
  "events": [
    {
      "name": "donationEvent",
      "discriminator": [
        43,
        125,
        2,
        48,
        193,
        140,
        25,
        191
      ]
    },
    {
      "name": "withdrawEvent",
      "discriminator": [
        22,
        9,
        133,
        26,
        160,
        44,
        71,
        192
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "zeroLamports",
      "msg": "Amount of lamports must be more than zero"
    },
    {
      "code": 6001,
      "name": "noCollectedLamports",
      "msg": "Impossible to withdraw. No lamports were collected"
    },
    {
      "code": 6002,
      "name": "targetReached",
      "msg": "The target was reached"
    },
    {
      "code": 6003,
      "name": "noLamportsForRent",
      "msg": "Impossible to withdraw. Not enough lamports to pay rent"
    },
    {
      "code": 6004,
      "name": "idBiggerThanCounter",
      "msg": "Passed ID is bigger than current ID counter"
    }
  ],
  "types": [
    {
      "name": "donates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "collected",
            "type": "u64"
          },
          {
            "name": "idCounter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "donationEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "at",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "platformAfter",
            "type": "u64"
          },
          {
            "name": "from",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "donator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "donatorStruct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "topDonators",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "donators",
            "type": {
              "vec": {
                "defined": {
                  "name": "donatorStruct"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "withdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "at",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
