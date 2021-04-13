import React, { ReactElement } from "react";
import Navigation from "../components/Navigation";
import Main from "../components/Form";
import { FormProvider, useForm } from "react-hook-form";

const Index = (): ReactElement => {
  const methods = useForm({
    defaultValues: {
      socketUrl: "wss://trezor-cardano-mainnet.blockfrost.io",
      accountInfoKey:
        "6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2",
      txId: "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      details: "basic",
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
