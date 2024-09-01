'use client'

import React, { useState } from "react"
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Component() {
  const { publicKey } = useWallet()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">connect your wallet</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <WalletCard publicKey={publicKey} />
          {publicKey && <AirdropCard />}
        </div>
      </main>
    </div>
  )
}

function WalletCard({ publicKey } :{
  publicKey : any
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Connection</CardTitle>
        <CardDescription>Connect your Solana wallet to get started</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="wallet-status">Status</Label>
            <div id="wallet-status" className="text-sm font-medium">
              {publicKey ? 'Connected' : 'Not Connected'}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <WalletMultiButton className="!bg-primary hover:!bg-primary/90 !text-primary-foreground !h-10 !px-4 !py-2 !rounded-md" />
          {publicKey && (
            <WalletDisconnectButton className="!bg-destructive hover:!bg-destructive/90 !text-destructive-foreground !h-10 !px-4 !py-2 !rounded-md" />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function AirdropCard() {
  const [airdropAmount, setAirdropAmount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const { connection } = useConnection()
  const { publicKey } = useWallet()

  const SOL_TO_LAMPORTS = 1e8

  async function getAirdrop() {
    setLoading(true)
    if (!publicKey) {
      toast.error("Wallet not connected")
      setLoading(false)
      return
    }
    try {
      const res = await connection.requestAirdrop(publicKey, airdropAmount * SOL_TO_LAMPORTS)
      if (res) {
        toast.success(`Airdrop successful: ${airdropAmount} SOL`)
      }
    } catch (error) {
      toast.error("Airdrop failed. Please try again.")
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Airdrop SOL</CardTitle>
        <CardDescription>Request an airdrop of SOL to your connected wallet</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="airdrop-amount">Amount (SOL)</Label>
            <Input
              id="airdrop-amount"
              onChange={(e) => setAirdropAmount(Number(e.target.value))}
              placeholder="Enter SOL amount"
              type="number"
              min="0"
              step="0.1"
            />
          </div>
        </div>
        <Button
          className="w-full"
          onClick={getAirdrop}
          disabled={loading || airdropAmount <= 0}
        >
          {loading ? 'Airdropping...' : 'Request Airdrop'}
        </Button>
      </CardContent>
    </Card>
  )
}