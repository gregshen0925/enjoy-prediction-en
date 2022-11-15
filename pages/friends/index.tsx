import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

type Props = {};

const Friends: NextPage = (props: Props) => {
  return (
    <div className="pt-10">
      <div className="text-white font-bold max-w-xl">
        之前EthOnline Hackathon有投稿一個 Web 交友 App，結合 DID, Soulbound
        Token, Tokenized Relationship等等概念，
        得獎後有獲得IPFS團隊的資源，我們想把這個功能應用在 EnJoy Prediction
        上，增添更多樂趣
      </div>
      <div className="text-white font-bold max-w-xl py-5">
        Btw，如果有興趣看我們之前區塊鏈黑客松交友軟體的嘗試，以下是連結，（3card還可以看到抽到的人錢包裡token總資產折合美元總值
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
