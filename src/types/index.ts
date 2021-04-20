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
  getTxId: string;
  accountInfoDetails: Option;
  getTransactionTxId: string;
  sendTransactionTransaction: string;
  getBlockHashOrNumber: string | number;
}
