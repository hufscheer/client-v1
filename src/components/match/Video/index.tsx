import { ComponentProps } from 'react';

import { YOUTUBE_VIDEO_BASE_SRC } from '@/constants/videoSrc';

interface VideoProps extends ComponentProps<'iframe'> {
  videoId: string;
}

export default function Video({ videoId, ...props }: VideoProps) {
  return (
    <iframe
      className="aspect-video w-full"
      src={`${YOUTUBE_VIDEO_BASE_SRC}/${videoId}`}
      title="Match Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      {...props}
    ></iframe>
  );
}
