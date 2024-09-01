'use client';
import React from "react"
import { Button } from '../components/ui/button'
import { useRouter } from "next/navigation"

export default function MenuButtons(){
    const router = useRouter()
    return<>
    <div className="space-x-4 pt-12">
        <Button onClick={()=>router.push('/airdrop')}>airdrop</Button>
        <Button onClick={()=>router.push('/transfer')}>transfer solana</Button>
    </div>    
    </>
}