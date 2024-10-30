import { wakfuCrewMembers } from '@/lib/data'
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export const alt = 'Membros dos Corvos de Efrim no Wakfu'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // Get the first 4 crew members that don't have default images
  const featuredMembers = wakfuCrewMembers
    .filter(
      (member) =>
        member.name !== 'Mais em breve' &&
        member.images[0] !== '/images/corvos.png',
    )
    .slice(0, 4)

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #1a1a1a, #2a2a2a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Title */}
        <div
          style={{
            color: '#e6d7c3',
            fontSize: 60,
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Corvos de Efrim
        </div>
        <div
          style={{
            color: '#bf9b30',
            fontSize: 40,
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Nossa Tripulação no Wakfu
        </div>

        {/* Member previews */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {featuredMembers.map((member) => (
            <div
              key={member.name}
              style={{
                background: '#2a2a2a',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '250px',
              }}
            >
              {/* Member name */}
              <div
                style={{
                  color: '#e6d7c3',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  textAlign: 'center',
                }}
              >
                {member.name}
              </div>
              {/* Member role */}
              <div
                style={{
                  color: '#bf9b30',
                  fontSize: 18,
                  textAlign: 'center',
                }}
              >
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      // Adding recommended options from Vercel docs
      width: 1200,
      height: 630,
      emoji: 'twemoji', // Use Twemoji for consistent emoji rendering
    },
  )
}
