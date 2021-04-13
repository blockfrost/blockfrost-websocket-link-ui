export const MESSAGES = {
  GET_ACCOUNT_INFO: "GET_ACCOUNT_INFO",
  GET_SERVER_INFO: "GET_SERVER_INFO",
  GET_TRANSACTION: "GET_TRANSACTION",
  SUBSCRIBE_BLOCK: "SUBSCRIBE_BLOCK",
  UNSUBSCRIBE_BLOCK: "UNSUBSCRIBE_BLOCK",
};

export const MESSAGES_PARAMS = [
  {
    name: MESSAGES.GET_ACCOUNT_INFO,
    params: [
      {
        name: "accountInfoKey",
        defaultValue:
          "f1f3816b898cb100b336c169a1ca3e2571ed8fa55687c58a381ece7406cdb88b7703a2088169d725d7a3f0b03e6d2f538d10f81ea0df8869e025309c259f15dc",
      },
      {
        name: "detail",
        defaultValue: "basic",
      },
    ],
  },
  {
    name: MESSAGES.GET_SERVER_INFO,
    params: [],
  },
  {
    name: MESSAGES.SUBSCRIBE_BLOCK,
    params: [],
  },
  {
    name: MESSAGES.UNSUBSCRIBE_BLOCK,
    params: [],
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
] as const;
