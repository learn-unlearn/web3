"use client";
import React from "react";
import Image from "next/image";

import { ethers } from "ethers";
import Button from "@/components/ui/button";

import hero from "@/images/monkey.jpg";

export default function Home() {
  const [account, accountSet] = React.useState<string>("");
  const [balance, balanceSet] = React.useState<string>("");

  const convert_to_ethers = async (address: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const balance_wei = await provider.getBalance(address);

    const balance_eth = ethers.formatEther(balance_wei);
    console.log(balance_eth);
    balanceSet(balance_eth);
  };

  // thisis to check if the wallet is connected
  const check_wallet = React.useCallback(async () => {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      accountSet(accounts[0]);
      convert_to_ethers(accounts[0]);
    }
  }, []);

  const connect_wallet = async () => {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    accountSet(accounts[0]);

    convert_to_ethers(accounts[0]);
  };

  const logout = async () => {
    await window.ethereum.request({ method: "the_requestAccounts" });
    console.log(open);
    console.log(account);
  };

  React.useEffect(() => {
    check_wallet();
  }, [check_wallet]);

  return (
    <div className="bg-slate-300 w-[100vw] h-[100vh] grid items-center justify-items-center font-[family-name:var(--font-cascadia)]">
      <div className=" w-[30%] bg-white flex flex-col items-center justify-between h-[50%] shadow-md rounded-md overflow-hidden px-5 py-4">
        <Image
          src={hero}
          alt="Hero Monkey"
          className="h-[70%] object-contain"
        />

        {account && (
          <div>
            <p>Addr: {account}</p>
            <p>Balance: {`${balance} ETH`}</p>
          </div>
        )}

        {!account ? (
          <Button text="Connect Wallet" onClick={connect_wallet} />
        ) : (
          <Button text="Logout" onClick={logout} />
        )}
      </div>
    </div>
  );
}
