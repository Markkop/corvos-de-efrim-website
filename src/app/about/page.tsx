import type { Metadata } from 'next'

const meta = {
  title: 'Sobre a Corvos de Efrim',
  description: 'Conheça mais sobre a Corvos de Efrim',
  url: `/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <section
    className="flex h-screen w-full flex-row text-center bg-black text-white"
  
  >
      <iframe 
      className='w-full md:w-[800px] md:mx-auto'
      src="https://docs.google.com/document/d/e/2PACX-1vRYLYp0FEsgHg8dKP4ilhzTPlZCZMapYTF3dI5IbLooM-81oT0UGuZIle6GkuB613GF5zq5J7fPgdDe/pub?embedded=true"></iframe>
    </section>
  )
}
