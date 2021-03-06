import React, { ReactElement } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

function AccountInfoOptions(): ReactElement {
  const { register, control } = useFormContext();

  return (
    <>
      <h1 className="text-1md font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate mt-10">
        OPTIONS
      </h1>
      <div className="flex flex-col	mt-5">
        <div className="flex w-full">
          <div className="flex flex-col w-full pr-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Public Key
            </label>
            <input
              ref={register}
              className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="accountInfoKey"
              type="text"
              autoComplete="on"
              name="accountInfoKey"
            />
          </div>
        </div>
        <div className="flex w-full py-4">
          <div className="flex flex-col" style={{ minWidth: 200 }}>
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Details
            </label>
            <Controller
              name="accountInfoDetails"
              control={control}
              options={[
                { value: "basic", label: "basic" },
                { value: "tokens", label: "tokens" },
                { value: "tokenBalances", label: "tokenBalances" },
                { value: "txids", label: "txids" },
                { value: "txs", label: "txs" },
              ]}
              as={
                <Select
                  defaultValue={{ value: "basic", label: "basic" }}
                  instanceId="3"
                />
              }
            />
          </div>
          <div className="flex flex-col pl-4" style={{ minWidth: 200 }}>
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Page (txs only)
            </label>
            <input
              ref={register}
              className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="accountInfoPage"
              type="text"
              name="accountInfoPage"
            />
          </div>
          <div className="flex flex-col pl-4" style={{ minWidth: 200 }}>
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Items per page (txs only)
            </label>
            <input
              ref={register}
              className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="accountInfoPageSize"
              type="text"
              name="accountInfoPageSize"
            />
          </div>
          <div className="flex flex-col pl-4" style={{ minWidth: 200 }}>
            <label className="block text-grey-darker text-sm font-bold mb-2">
              derive byron addresses
            </label>
            <input
              type="checkbox"
              ref={register}
              className="h-7 w-7 cursor-pointer"
              id="accountInfoDeriveByronAddresses"
              name="accountInfoDeriveByronAddresses"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfoOptions;
