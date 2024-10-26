'use client'

import { ImageViewer } from '@/components/ImageViewer'
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { crewMembers } from '@/lib/data'

export const CrewSmallList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
      {crewMembers.map((member) => (
        <Card
          key={member.name}
          className="bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden group cursor-pointer"
        >
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <ImageViewer
              images={member.images.map((image) => ({
                src: image,
                alt: `Foto de ${member.name}`,
              }))}
              width={400}
              height={533}
              variant="short"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-70 pointer-events-none" />
            <CardFooter className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
              <div className="transition-transform duration-300 group-hover:translate-y-[-4px] space-y-0.5">
                <CardTitle className="text-base sm:text-xl text-white leading-tight">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-[#bf9b30] leading-tight">
                  {member.role}
                </CardDescription>
              </div>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  )
}
