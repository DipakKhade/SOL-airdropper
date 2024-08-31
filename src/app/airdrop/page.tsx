"use client";
import React, { useState } from "react";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

export default function Page() {
  const { connection } = useConnection();
  const { publicKey } = useWallet()
  return (
    <>
      <main className="flex justify-around pt-12">
        <div className="p-4">
            <p className="text-xl p-2">connect your wallet</p>
<div className="space-y-4">
          <WalletMultiButton />
          {publicKey ? <WalletDisconnectButton /> : ""}
          </div>
        </div>
        <div>
    {publicKey ? <Airdrop/> :''}
        </div>
      </main>
    </>
  );
}


function Airdrop(){
    const [ airdropAmount , SetAirdropAmount ] = useState<number>(0);
    const [ loading , setloading ] = useState<boolean>(false);
    const { connection } = useConnection();
    const { publicKey } = useWallet()

    const SOL_TO_LAMPORTS = 100000000

    async function getairdrop(){
        setloading(true)
        if(!publicKey){
            return
        }
        const res = await connection.requestAirdrop( publicKey , airdropAmount*SOL_TO_LAMPORTS )
        if(res){
            toast.success(`airdrop successfull of ${airdropAmount} SOL`)
        }
        console.log(res)
        setloading(false)
    }

    return <>
    <div className="pt-12 p-3 border border-slate-400 h-60 w-96 rounded-sm">
        Airdrop your account
        <div className="p-2 space-y-2">
        <Input
        onChange={(e)=>SetAirdropAmount(e.target.value as unknown as number)}
         placeholder="add sol/lamports" type="number"/>

        <Button onClick={getairdrop}>
            {loading ? 'dropping ...': 'airdrop'}
            </Button>
        </div>
    </div>
    </>
}