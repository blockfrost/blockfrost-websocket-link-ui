import { MESSAGES_PARAMS, MESSAGES, SERVERS } from "../constants";
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
  MESSAGES_PARAMS.map((message) =>
    options.push({ value: message.name, label: message.name })
  );
  return options;
};

export const getServerOptions = (): Option[] => {
  const options = [];
  SERVERS.map((server) => options.push({ value: server, label: server }));
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
      return { descriptor, details };
    }
    case "GET_TRANSACTION": {
      const txId = getValues("txId");
      return { txId };
    }
    default:
      return {};
  }
};
