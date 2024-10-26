'use client'

import { YoutubeWidget } from '@/components/youtube-widget'
import { videoList } from '@/lib/data'

export const ContactSmallList = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center">
      <YoutubeWidget videos={videoList.slice(0, 6)} />

      <div className="flex justify-center lg:justify-end">
        <iframe
          src="https://discord.com/widget?id=169261868836323328&theme=dark"
          width="350"
          height="500"
          className="rounded-xl border-0 bg-[#1f1f1f]"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          title="Discord Server Widget"
        />
      </div>
    </div>
  )
}
