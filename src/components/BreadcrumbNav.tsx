'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BreadcrumbNav = () => {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on home page
  if (pathname === '/') {
    return null
  }

  // Split pathname into segments and remove empty strings
  const segments = pathname.split('/').filter(Boolean)

  // Create breadcrumb items with proper labels
  const breadcrumbItems = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const isLast = index === segments.length - 1

    // Convert segment to display text (you can expand this mapping)
    const getDisplayText = (segment: string) => {
      const textMap: { [key: string]: string } = {
        jogos: 'Jogos',
        wakfu: 'Wakfu',
        waven: 'Waven',
        builds: 'Builds',
        regimento: 'Regimento',
        membros: 'Membros',
      }
      return (
        textMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
      )
    }

    return isLast ? (
      <BreadcrumbItem key={segment}>
        <BreadcrumbPage>{getDisplayText(segment)}</BreadcrumbPage>
      </BreadcrumbItem>
    ) : (
      <BreadcrumbItem key={segment}>
        <BreadcrumbLink asChild>
          <Link href={href}>{getDisplayText(segment)}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    )
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Início</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems.map((item, index) => (
          <>
            <BreadcrumbSeparator key={`separator-${index}`} />
            {item}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbNav
