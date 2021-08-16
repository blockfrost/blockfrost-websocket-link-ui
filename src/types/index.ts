import { MESSAGES } from "../constants";

export interface Option {
  value: string;
  label: string;
}

type Message = keyof typeof MESSAGES;

export interface FormValues {
  socketUrl: Option;
  command: { value: Message; label: Message };
  accountInfoKey: string;
  balanceHistoryKey: string;
  getTxId: string;
  accountInfoPageSize: number;
  accountInfoPage: number;
  accountInfoDetails: Option;
  getTransactionTxId: string;
  sendTransactionTransaction: string;
  getBlockHashOrNumber: string | number;
  subscribeAddressAddresses: string;
}
