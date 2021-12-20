import React, { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

function AccountInfoOptions(): ReactElement {
  const { register } = useFormContext();

  return (
    <>
      <h1 className="text-1md font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate mt-10">
        OPTIONS
      </h1>
      <div className="flex flex-row	mt-5">
        <div className="flex w-full">
          <div className="flex flex-col w-full pr-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Public Key
            </label>
            <input
              ref={register}
              className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="balanceHistoryKey"
              type="text"
              name="balanceHistoryKey"
            />
          </div>
        </div>

        <div className="flex flex-col pl-4" style={{ minWidth: 200 }}>
          <label className="block text-grey-darker text-sm font-bold mb-2">
            groupBy
          </label>
          <input
            ref={register}
            className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="balanceHistoryGroupBy"
            type="text"
            name="balanceHistoryGroupBy"
          />
        </div>

        <div className="flex flex-col pl-4" style={{ minWidth: 200 }}>
          <label className="block text-grey-darker text-sm font-bold mb-2">
            from
          </label>
          <input
            ref={register}
            className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="balanceHistoryFrom"
            type="text"
            name="balanceHistoryFrom"
          />
        </div>

        <div className="flex flex-col pl-4" style={{ minWidth: 200 }}>
          <label className="block text-grey-darker text-sm font-bold mb-2">
            to
          </label>
          <input
            ref={register}
            className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="balanceHistoryTo"
            type="text"
            name="balanceHistoryTo"
          />
        </div>
      </div>
    </>
  );
}

export default AccountInfoOptions;
