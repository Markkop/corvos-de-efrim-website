import { ImageViewer } from '@/components/ImageViewer'
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'

interface CrewMemberCardProps {
  member: {
    name: string
    role: string
    images: string[]
  }
}

export const CrewMemberCard = ({ member }: CrewMemberCardProps) => (
  <Card className="bg-[#2a2a2a] text-[#e6d7c3] overflow-hidden group cursor-pointer">
    <div
      className="relative w-full"
      style={{ aspectRatio: '3/4', height: 'auto' }}
    >
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
          <CardTitle className="~text-[1rem]/[2rem] text-white leading-tight">
            {member.name}
          </CardTitle>
          <CardDescription className="~text-[0.875rem]/[1rem] text-[#bf9b30] leading-tight">
            {member.role}
          </CardDescription>
        </div>
      </CardFooter>
    </div>
  </Card>
)
