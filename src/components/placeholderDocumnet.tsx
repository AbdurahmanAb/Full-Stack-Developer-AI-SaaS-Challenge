"use client"

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const PlaceHolderDocs = () => {
    const router = useRouter()
    const handleCLick = () => {
        router.push('/dashboard/upload');
    }
  return (
    <Button onClick={handleCLick} className='flex flex-col items-center justify-center h-80 w-64 bg-gray-200 rounded-xl gap-3 hover:bg-slate-600 text-gray-400'>
        <PlusCircleIcon size={60} />
        <p className='font-semibold '>Add A Document </p>
    </Button>
  )
}
