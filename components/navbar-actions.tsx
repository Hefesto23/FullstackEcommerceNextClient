'use client'

import { ShoppingBag } from 'lucide-react'

import useCart from '@/hooks/use-carts'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from './ui/button'

const NavbarActions = () => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  const handleClick = () => {
    router.push(`/cart`)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={handleClick}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-wite">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
