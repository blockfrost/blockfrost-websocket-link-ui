export const MESSAGES = {
  GET_ACCOUNT_INFO: "GET_ACCOUNT_INFO",
  GET_BLOCK: "GET_BLOCK",
  GET_SERVER_INFO: "GET_SERVER_INFO",
  GET_TRANSACTION: "GET_TRANSACTION",

  SUBSCRIBE_BLOCK: "SUBSCRIBE_BLOCK",
  SUBSCRIBE_ADDRESS: "SUBSCRIBE_ADDRESS",
  SUBSCRIBE_ACCOUNT: "SUBSCRIBE_ACCOUNT",

  UNSUBSCRIBE_BLOCK: "UNSUBSCRIBE_BLOCK",
  UNSUBSCRIBE_ADDRESS: "UNSUBSCRIBE_ADDRESS",
  UNSUBSCRIBE_ACCOUNT: "UNSUBSCRIBE_ACCOUNT",

  PUSH_TRANSACTION: "PUSH_TRANSACTION",
};

export const SERVERS = [
  // "wss://trezor-cardano-mainnet.blockfrost.io",
  // "wss://trezor-cardano-testnet.blockfrost.io",
  "ws://localhost:3005",
];

export const MESSAGES_PARAMS = [
  {
    name: MESSAGES.GET_SERVER_INFO,
    params: [],
  },
  {
    name: MESSAGES.GET_ACCOUNT_INFO,
    params: [
      {
        name: "accountInfoKey",
        defaultValue:
          "f1f3816b898cb100b336c169a1ca3e2571ed8fa55687c58a381ece7406cdb88b7703a2088169d725d7a3f0b03e6d2f538d10f81ea0df8869e025309c259f15dc",
      },
      {
        name: "accountInfoDetails",
        defaultValue: "basic",
      },
    ],
  },
  {
    name: MESSAGES.GET_BLOCK,
    params: [
      {
        name: "hashOrNumber",
        defaultValue:
          "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      },
    ],
  },
  {
    name: MESSAGES.GET_TRANSACTION,
    params: [
      {
        name: "txId",
        defaultValue:
          "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      },
    ],
  },
  {
    name: MESSAGES.SUBSCRIBE_BLOCK,
    params: [
      {
        name: "hashOrNumber",
        defaultValue:
          "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      },
    ],
  },
  {
    name: MESSAGES.SUBSCRIBE_ADDRESS,
    params: [{ name: "address", defaultValue: "" }],
  },
  {
    name: MESSAGES.SUBSCRIBE_ACCOUNT,
    params: [
      {
        name: "subscribeAccountInfoKey",
        defaultValue:
          "f1f3816b898cb100b336c169a1ca3e2571ed8fa55687c58a381ece7406cdb88b7703a2088169d725d7a3f0b03e6d2f538d10f81ea0df8869e025309c259f15dc",
      },
    ],
  },
  {
    name: MESSAGES.UNSUBSCRIBE_BLOCK,
    params: [
      {
        name: "hashOrNumber",
        defaultValue:
          "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      },
    ],
  },
  {
    name: MESSAGES.UNSUBSCRIBE_ACCOUNT,
    params: [],
  },
  {
    name: MESSAGES.UNSUBSCRIBE_ADDRESS,
    params: [],
  },
  {
    name: MESSAGES.PUSH_TRANSACTION,
    params: [
      {
        name: "txData",
        defaultValue:
          "83a40081825820c84dbd7b780ff9be2bcc6990f043030fe649342f9fa7ba1bfa6fb5c0079501a400018282582b82d818582183581cf810f5ffa3613a7edcc1e733d0d73c89645d02221648a031436fd840a0001a4f7ed7fd1a45bb41e082581d619fc8d50cd36af0e35f43db0e2f220e4ccb774925f2ef3542875b37701a000f4240021a00030d40031a00f9c7cca102818458205e3eb96f2cfd7844b5eed5498fe487fc5271178fb251ebf3d33c5d8f49036d9358403c9ef2ce22b8a3fce622472f84c932679f95e0f3e139378fe9d6ab5442c60a9b87de374a0bc37667b1bf8d5c6bffb436ffd84b0fa56a7c86342962b9c293390758208ed6ca9faabd8499f021c2e51745436c99f9eab6c92f4b09b255bdd9f39bae2a41a0f6",
      },
    ],
  },
] as const;
