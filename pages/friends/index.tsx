import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

type Props = {};

const Friends: NextPage = (props: Props) => {
  return (
    <div className="pt-10">
      <p className="flex justify-center px-5 text-3xl text-white font-bold text-transparent py-10 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Milestone
      </p>
      <div className="text-white font-bold max-w-xl">
        We will enable users to mint a SBT to represent themselves. And users
        can meet one user per day. They will be able to chat with others if they
        like each other.
      </div>
      <div className="text-white font-bold max-w-xl py-5">
        We've developed this function in previous hackathons. You can also see
        how much money others have in their wallet.
      </div>
      <div className="text-white font-bold max-w-xl py-5 text-center">
        Links are below
      </div>
      <div className="flex justify-center">
        <Link href="https://ethglobal.com/showcase/tind3r-i7rtt">
          <a target="_blank">
            <button
              type="button"
              className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-blue-600"
            >
              Tind3r
            </button>
          </a>
        </Link>
        <Link href={"https://devpost.com/software/3card"}>
          <a target="_blank">
            <button
              type="button"
              className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-blue-600"
            >
              3card
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Friends;
