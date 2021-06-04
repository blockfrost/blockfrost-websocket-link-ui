import React, { ReactElement, useState, useEffect, useRef } from "react";
import Select from "react-select";
import { Option } from "../../types";
import useWebSocket, { ReadyState } from "react-use-websocket";
import AccountInfoOptions from "./AccountInfoOptions";
import GetTransactionOptions from "./GetTransactionOptions";
import SendTransactionOptions from "./SendTransactionOptions";
import GetBlockOptions from "./GetBlockOptions";
import AccountUtxoOptions from "./AccountUtxoOptions";
import {
  getStatusColor,
  getMessagesList,
  getParams,
  getServerOptions,
} from "../../utils";
import { MESSAGES } from "../../constants";
import { useFormContext, Controller, useWatch } from "react-hook-form";

const Index = (): ReactElement => {
  const didUnmount = useRef(false);
  const { getValues, control } = useFormContext();
  const socketUrl: Option = useWatch({ control, name: "socketUrl" });
  const cmd: any = useWatch({ control, name: "command" });
  const [messageHistory, setMessageHistory] = useState<any[]>([]);
  const messages = getMessagesList();
  const servers = getServerOptions();
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    socketUrl ? socketUrl.value : null,
    {
      shouldReconnect: () => {
        return didUnmount.current === false;
      },
      reconnectAttempts: 20,
      reconnectInterval: 3000,
    }
  );

  useEffect(() => setMessageHistory([...messageHistory, lastMessage]), [
    lastMessage,
  ]);

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
        <div className="max-w-sm" style={{ width: 384 }}>
          <Controller
            name="socketUrl"
            control={control}
            options={servers}
            as={<Select instanceId="1" />}
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
        <div className="max-w-sm" style={{ width: 384 }}>
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
            sendJsonMessage({ command, params });
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
        {command === "PUSH_TRANSACTION" && <SendTransactionOptions />}
        {command === "GET_BLOCK" && <GetBlockOptions />}
      </div>
      <div className="mt-10">
        <h1 className="text-1md font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate">
          RESPONSE
        </h1>
      </div>
      {messageHistory.reverse().map((message, idx) => (
        <span key={idx}>
          {connectionStatus === "OPEN" && message && (
            <div className="mt-2">
              <pre className="px-6 py-4 bg-white shadow-xs mt-3 overflow-auto font-medium">
                {JSON.stringify(JSON.parse(message.data), null, 2)}
              </pre>
            </div>
          )}
        </span>
      ))}
    </>
  );
};

export default Index;
