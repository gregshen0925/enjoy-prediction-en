import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ChainButton from "../ChainButton/index";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

const Header = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [`Created By InJoy Labs`],
    delaySpeed: 2000,
  });

  return (
    <header className="flex justify-between space-x-10 items-center text-white pt-8 px-2">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-20 w-20 p-3"
          src="https://i.imgur.com/0GQg7Dn.png"
          alt=""
        />
        <div className="items-center justify-center md:space-x-10">
          <h1 className="text-xl text-white font-bold truncate">
            <a href="/">EnJoy Prediction</a>
            <p className="flex">
              <ConnectButton.Custom>
                {({ account, openAccountModal }) => {
                  return (
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-xs text-emerald-500 truncate hover:text-emerald-300 font-light"
                    >
                      {account?.displayName}
                      {account?.displayBalance ? (
                        <span className="underline decoration-white/50">
                          (${account?.displayBalance})
                        </span>
                      ) : (
                        <div
                          className="text-xs md:text-md font-semibold py-2 text-transparent 
                                            bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse hover:text-blue-200"
                        >
                          <a href="https://injoylabs.io" target="_blank">
                            <span>{text}</span>
                          </a>
                        </div>
                      )}
                    </button>
                  );
                }}
              </ConnectButton.Custom>
            </p>
          </h1>
        </div>
      </div>
      <div className="ml-auto py-4">
        <ChainButton />
      </div>
    </header>
  );
};

export default Header;
