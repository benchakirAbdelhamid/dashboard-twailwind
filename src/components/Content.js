import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Content = () => {
 


  return (
    <div
      style={{
        maxWidth: "80rem",
        margin: "auto",
        marginBottom: "50px",
        padding: "20px",
      }}
    >


            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit profile
            </button>
 
    </div>
  );
};

export default Content;
