'use client'

import React, { useState, useEffect } from "react"
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram } from "@solana/web3.js"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function Component() {
  const { publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()
  const [balance, setBalance] = useState<number | null>(null)
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (publicKey) {
      updateBalance()
    } else {
      setBalance(null)
    }
  }, [publicKey, connection])

  const updateBalance = async () => {
    if (publicKey) {
      const balance = await connection.getBalance(publicKey)
      setBalance(balance / LAMPORTS_PER_SOL)
    }
  }

  const handleTransfer = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!publicKey) return

    setIsLoading(true)
    try {
      const recipientPubKey = new PublicKey(recipient)
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports: parseFloat(amount) * LAMPORTS_PER_SOL
        })
      )

      const signature = await sendTransaction(transaction, connection)
      await connection.confirmTransaction(signature, 'processed')

      toast.success('Transfer successful!')
      updateBalance()
      setRecipient("")
      setAmount("")
    } catch (error) {
      console.error('Error: ', error)
      toast.error('Transfer failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <main className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Solana Transfer</h1>
        <Card>
          <CardHeader>
            <CardTitle>Wallet Connection</CardTitle>
            <CardDescription>Connect your wallet to transfer SOL</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <WalletMultiButton className="!bg-primary hover:!bg-primary/90 !text-primary-foreground !h-10 !px-4 !py-2 !rounded-md" />
              {balance !== null && (
                <div className="text-sm">
                  Balance: {balance.toFixed(4)} SOL
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {publicKey && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Transfer SOL</CardTitle>
              <CardDescription>Send SOL to another account</CardDescription>
            </CardHeader>
            <form onSubmit={handleTransfer}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient Address</Label>
                  <Input
                    id="recipient"
                    placeholder="Enter recipient's Solana address"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (SOL)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.000000001"
                    min="0"
                    placeholder="Enter amount to send"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || !recipient || !amount || parseFloat(amount) <= 0}
                >
                  {isLoading ? 'Processing...' : 'Send SOL'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}
      </main>
    </div>
  )
}