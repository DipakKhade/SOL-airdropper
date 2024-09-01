'use client';
import React from "react"
import { Button } from '../components/ui/button'
import { useRouter } from "next/navigation"
import { ArrowDownToDot, ArrowUpDown } from "lucide-react";

export default function MenuButtons(){
    const router = useRouter()
    return<>
    <div className="space-x-4 pt-12 space-y-2">
        <Button className="px-8 gap-1" onClick={()=>router.push('/airdrop')}>airdrop <ArrowDownToDot /></Button>
        <Button className="px-8 gap-1" onClick={()=>router.push('/transfer')}>transfer solana <ArrowUpDown /></Button>
    </div>    
    </>
}