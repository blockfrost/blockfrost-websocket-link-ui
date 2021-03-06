import React, { ReactElement, useState, useEffect, useRef } from "react";
import Select from "react-select";
import useWebSocket, { ReadyState } from "react-use-websocket";
import AccountInfoOptions from "./AccountInfoOptions";
import GetTransactionOptions from "./GetTransactionOptions";
import SendTransactionOptions from "./SendTransactionOptions";
import GetBlockOptions from "./GetBlockOptions";
import BalanceHistoryOptions from "./BalanceHistoryOptions";
import AccountUtxoOptions from "./AccountUtxoOptions";
import SubscribeAddressOptions from "./SubscribeAddressOptions";
import { getStatusColor, getMessagesList, getParams } from "../../utils";
import { MESSAGES } from "../../constants";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import isURL from "validator/lib/isURL";

const Index = (): ReactElement => {
  const didUnmount = useRef(false);
  const [messageId, setMessageId] = useState(0);
  const { getValues, control, register } = useFormContext();
  const socketUrl: string = useWatch({ name: "socketUrl" });
  const cmd: any = useWatch({ control, name: "command" });
  const [messageHistory, setMessageHistory] = useState<any[]>([]);
  const messages = getMessagesList();
  const isURLValid = isURL(socketUrl, {
    protocols: ["wss", "ws"],
    require_tld: false,
  });

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    isURLValid ? socketUrl : "ws://localhost:3005"
  );

  useEffect(() => {
    if (!lastMessage) return;
    const newMessage = {
      ...lastMessage,
      timestamp: new Date().getTime(),
      data: JSON.parse(lastMessage.data),
    };
    setMessageHistory(previous => [newMessage, ...previous]);
  }, [lastMessage]);

  useEffect(() => {
    return () => {
      didUnmount.current = true;
    };
  }, []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "CONNECTING",
    [ReadyState.OPEN]: "OPEN",
    [ReadyState.CLOSING]: "CLOSING",
    [ReadyState.CLOSED]: "CLOSED",
    [ReadyState.UNINSTANTIATED]: "UNINSTANTIATED",
  }[readyState];

  const command: keyof typeof MESSAGES = cmd ? cmd.value : null;

  return (
    <>
      <h1 className="text-1md font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate">
        SERVER
      </h1>
      <div className="mt-5 flex flex-row">
        <div className="max-w-sm" style={{ width: 380 }}>
          <input
            name="socketUrl"
            defaultValue="ws://localhost:3005"
            ref={register}
            className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          />
        </div>
        <div
          style={{ minWidth: 250 }}
          className={`${getStatusColor(
            connectionStatus
          )} text-white p-2 rounded leading-none flex items-center justify-center font-semibold ml-2`}
        >
          CONNECTION {connectionStatus}
        </div>
      </div>
      <div className="mt-5 flex flex-row">
        <div className="max-w-sm" style={{ width: 380 }}>
          <Controller
            name="command"
            control={control}
            options={messages}
            as={<Select instanceId="2" />}
          />
        </div>
        <button
          style={{ minWidth: 250 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => {
            const params = getParams(command, getValues);
            sendJsonMessage({ id: messageId, command, params });
            setMessageId(messageId + 1);
          }}
        >
          SEND MESSAGE
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => {
            setMessageHistory([]);
          }}
        >
          CLEAR HISTORY
        </button>
      </div>
      <div className="h-30">
        {command === "GET_ACCOUNT_INFO" && <AccountInfoOptions />}
        {command === "GET_ACCOUNT_UTXO" && <AccountUtxoOptions />}
        {command === "GET_TRANSACTION" && <GetTransactionOptions />}
        {command === "GET_BALANCE_HISTORY" && <BalanceHistoryOptions />}
        {command === "PUSH_TRANSACTION" && <SendTransactionOptions />}
        {command === "GET_BLOCK" && <GetBlockOptions />}
        {command === "SUBSCRIBE_ADDRESS" && <SubscribeAddressOptions />}
      </div>
      <div className="mt-10">
        <h1 className="text-1md font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate">
          RESPONSE
        </h1>
      </div>
      {messageHistory.map(message =>
        connectionStatus === "OPEN" ? (
          <span key={`${message.data.id}:${message.timestamp}`}>
            <div className="mt-2">
              <pre className="px-6 py-4 bg-white shadow-xs mt-3 overflow-auto font-medium">
                {JSON.stringify(message.data, null, 2)}
              </pre>
            </div>
          </span>
        ) : undefined
      )}
    </>
  );
};

export default Index;
