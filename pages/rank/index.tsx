import React, { useState } from "react";
import type { NextPage } from "next";
import Percentage from "../../components/PoolInfo";

type Props = {};

const Info: NextPage = (props: Props) => {
  // const isCrypto = true
  return (
    <div className="pt-10">
      <div className="text-white font-bold">Rank Page</div>
      {/* <Percentage isCrypto={isCrypto} /> */}
    </div>
  );
};

export default Info;
