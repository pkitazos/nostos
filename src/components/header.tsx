'use client'
import { COMPANY_NAME } from '@/content/config'
import { NAVIGATION } from '@/content/header'
import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute left-0 top-0 z-[99] flex h-16 w-full items-center justify-between bg-primary px-10 font-[350] text-primary-foreground sm:h-28 lg:px-10 2xl:h-40 2xl:px-20">
      <Link href="/">
        <h1 className="font-serif text-2xl md:text-4xl">{COMPANY_NAME}</h1>
      </Link>
      <div className="flex lg:hidden">
        <button onClick={() => setOpen(true)}>
          <MenuIcon />
        </button>
        <MobileNav open={open} />
      </div>
      <div className="hidden lg:flex">
        <DesktopNav />
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <nav className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
      {NAVIGATION.map(({ href, displayName }) => (
        <HeaderLink key={href} route={href}>
          {displayName}
        </HeaderLink>
      ))}
    </nav>
  )
}

function MobileNav({ open }: { open: boolean }) {
  return (
    <nav
      className={cn(
        'absolute left-0 top-0 h-dvh w-full place-items-center bg-background text-foreground',
        open ? 'grid' : 'hidden',
      )}
    >
      <ul className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-11">
        {NAVIGATION.map(({ href, displayName }) => (
          <HeaderLink key={href} route={href} className="text-2xl">
            {displayName}
          </HeaderLink>
        ))}
      </ul>
    </nav>
  )
}

function HeaderLink({
  route,
  children: name,
  className,
}: {
  route: string
  children: ReactNode
  className?: ClassValue
}) {
  const path = usePathname()

  const isHome = route === '/'

  return (
    <Link
      className={cn(
        'decoration-1 underline-offset-8 hover:underline',
        isHome && path === route && 'underline',
        !isHome && path.startsWith(route) && 'underline',
        className,
      )}
      href={route}
    >
      {name}
    </Link>
  )
}
