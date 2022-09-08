import { MESSAGES_PARAMS, MESSAGES } from "../constants";
import { Option } from "../types";
import { UseFormMethods } from "react-hook-form";

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "OPEN":
      return "bg-green-400";
    case "CONNECTING":
    case "CLOSING":
      return "bg-yellow-400";
    case "UNINSTANTIATED":
    case "CLOSED":
      return "bg-red-500";
  }
};

export const getMessagesList = (): Option[] => {
  const options = [];
  MESSAGES_PARAMS.map(message =>
    options.push({ value: message.name, label: message.name })
  );
  return options;
};

export const getParams = (
  command: keyof typeof MESSAGES,
  getValues: UseFormMethods["getValues"]
): any => {
  switch (command) {
    case "GET_ACCOUNT_INFO": {
      const descriptor = getValues("accountInfoKey");
      const details = getValues("accountInfoDetails").value;
      const page = parseInt(getValues("accountInfoPage"), 10);
      const pageSize = parseInt(getValues("accountInfoPageSize"), 10);
      const deriveByronAddresses = !!getValues(
        "accountInfoDeriveByronAddresses"
      );

      return {
        descriptor,
        details,
        page,
        pageSize,
        deriveByronAddresses,
      };
    }
    case "GET_BALANCE_HISTORY": {
      const descriptor = getValues("balanceHistoryKey");
      const from = parseInt(getValues("balanceHistoryFrom"), 10);
      const to = parseInt(getValues("balanceHistoryTo"), 10);
      const groupBy = parseInt(getValues("balanceHistoryGroupBy"), 10);
      const deriveByronAddresses = !!getValues("balanceHistoryByronAddresses");

      return {
        descriptor,
        from,
        to,
        groupBy,
        deriveByronAddresses,
      };
    }

    case "GET_ACCOUNT_UTXO": {
      const descriptor = getValues("accountInfoKey");
      return { descriptor };
    }

    case "GET_TRANSACTION": {
      const txId = getValues("getTransactionTxId");
      return { txId };
    }

    case "PUSH_TRANSACTION": {
      const transaction = getValues("sendTransactionTransaction");
      return { txData: transaction };
    }

    case "GET_BLOCK": {
      const hashOrNumber = getValues("getBlockHashOrNumber");
      return { hashOrNumber };
    }

    case "SUBSCRIBE_ADDRESS": {
      const inputString = getValues("subscribeAddressAddresses");
      try {
        const addresses = inputString.replace(/\s/g, "").split(",");
        return { addresses };
      } catch (err) {
        console.log(err);
        return [];
      }
    }

    default:
      return {};
  }
};
