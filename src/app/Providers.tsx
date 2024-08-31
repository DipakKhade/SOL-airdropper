'use client';
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { ALCHEMY_RPC_URL } from "@/lib/configs";
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
    



export default function Providers ({children}:{
    children :React.ReactNode
}){
    return <SessionProvider>
            <ConnectionProvider endpoint={ALCHEMY_RPC_URL ?? ""}>
                <WalletProvider wallets={[]}>
                    <WalletModalProvider>
                        {children}
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </SessionProvider>
}