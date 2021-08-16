import React, { ReactElement } from "react";
import Navigation from "../components/Navigation";
import Main from "../components/Form";
import { FormValues } from "../types";
import { FormProvider, useForm } from "react-hook-form";

const Index = (): ReactElement => {
  const methods = useForm<FormValues>({
    defaultValues: {
      socketUrl: {
        value: "ws://localhost:3005",
        label: "ws://localhost:3005",
      },
      command: {
        value: "GET_SERVER_INFO",
        label: "GET_SERVER_INFO",
      },
      accountInfoKey:
        "6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2",
      balanceHistoryKey:
        "6d17587575a3b4f0f86ebad3977e8f7e4981faa863eccf5c1467065c74fe3435943769446dd290d103fb3d360128e86de4b47faea73ffb0900c94c6a61ef9ea2",
      accountInfoPage: 0,
      accountInfoPageSize: 25,
      accountInfoDetails: {
        value: "basic",
        label: "basic",
      },
      getTransactionTxId:
        "28172ea876c3d1e691284e5179fae2feb3e69d7d41e43f8023dc380115741026",
      sendTransactionTransaction:
        "83a400818258208911f640d452c3be4ff3d89db63b41ce048c056951286e2e28bbf8a51588ab44000181825839009493315cd92eb5d8c4304e67b7e16ae36d61d34502694657811a2c8e32c728d3861e164cab28cb8f006448139c8f1740ffb8e7aa9e5232dc1a10b2531f021a00029519075820cb798b0bce50604eaf2e0dc89367896b18f0a6ef6b32b57e3c9f83f8ee71e608a1008182582073fea80d424276ad0978d4fe5310e8bc2d485f5f6bb3bf87612989f112ad5a7d5840c40425229749a9434763cf01b492057fd56d7091a6372eaa777a1c9b1ca508c914e6a4ee9c0d40fc10952ed668e9ad65378a28b149de6bd4204bd9f095b0a902a11907b0a1667469636b657281a266736f757263656b736f757263655f6e616d656576616c7565736675676961742076656e69616d206d696e7573",
      getBlockHashOrNumber:
        "5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb",
      subscribeAddressAddresses:
        "addr1q8ex7rc9232gpdkwy5ldw7e0cdm43ufq8ndlee37cf3zk4ljdu8s24z5szmvuff76aajlsmhtrcjq0xmlnnrasnz9dtse29zss, addr1q8q8ly5zwttmf5aksncvpyxkfcfut2vtt3h3jmu3rm62kdwpmg5v6fx5cyjcengdjpnu7a0s24dcaqxl5wv7v6203cuqa8lw24",
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
