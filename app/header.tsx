'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Link href="/" className="font-medium text-black dark:text-white">
            Richard Franklin
          </Link>
          <span className="text-sm text-zinc-500 dark:text-zinc-600">
            @rsamf
          </span>
        </div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          ML Engineer
        </TextEffect>
      </div>
      <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800" />
    </header>
  )
}
