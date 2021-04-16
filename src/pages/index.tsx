import React, { ReactElement } from "react";
import Navigation from "../components/Navigation";
import Main from "../components/Form";
import { FormValues } from "../types";
import { FormProvider, useForm } from "react-hook-form";

const Index = (): ReactElement => {
  const methods = useForm<FormValues>({
    defaultValues: {
      socketUrl: {
        value: "wss://trezor-cardano-mainnet.blockfrost.io",
        label: "wss://trezor-cardano-mainnet.blockfrost.io",
      },
      command: {
        value: "GET_SERVER_INFO",
        label: "GET_SERVER_INFO",
      },
      accountInfoKey:
        "6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2",
      accountInfoDetails: {
        value: "basic",
        label: "basic",
      },
      getTransactionTxId:
        "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      sendTxData:
        "83a40081825820c84dbd7b780ff9be2bcc6990f043030fe649342f9fa7ba1bfa6fb5c0079501a400018282582b82d818582183581cf810f5ffa3613a7edcc1e733d0d73c89645d02221648a031436fd840a0001a4f7ed7fd1a45bb41e082581d619fc8d50cd36af0e35f43db0e2f220e4ccb774925f2ef3542875b37701a000f4240021a00030d40031a00f9c7cca102818458205e3eb96f2cfd7844b5eed5498fe487fc5271178fb251ebf3d33c5d8f49036d9358403c9ef2ce22b8a3fce622472f84c932679f95e0f3e139378fe9d6ab5442c60a9b87de374a0bc37667b1bf8d5c6bffb436ffd84b0fa56a7c86342962b9c293390758208ed6ca9faabd8499f021c2e51745436c99f9eab6c92f4b09b255bdd9f39bae2a41a0f6",
      getBlockHashOrNumber:
        "5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb",
    },
  });

  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10">
        <FormProvider {...methods}>
          <Main />
        </FormProvider>
      </div>
    </>
  );
};

export default Index;
