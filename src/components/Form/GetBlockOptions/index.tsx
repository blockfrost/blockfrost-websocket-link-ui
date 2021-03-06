import React, { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

function GetBlockOptions(): ReactElement {
  const { register } = useFormContext();

  return (
    <>
      <h1 className="text-1md font-bold leading-7 text-gray-900 sm:text-1xl sm:truncate mt-10">
        OPTIONS
      </h1>
      <div className="flex flex-col	 mt-5">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          BLOCK HASH OR NUMBER
        </label>
        <input
          ref={register}
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          type="text"
          name="getBlockHashOrNumber"
        />
      </div>
    </>
  );
}

export default GetBlockOptions;
