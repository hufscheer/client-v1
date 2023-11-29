import { AxiosError } from 'axios';
import { ComponentProps } from 'react';

import { FallbackProps } from '@/components/common/ErrorBoundary';
import { VIDEO_API_ERROR_MESSAGE } from '@/constants/error';
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

Video.ErrorFallback = function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  let message;

  if (error instanceof AxiosError) {
    const code = error.code;

    message =
      VIDEO_API_ERROR_MESSAGE[code as keyof typeof VIDEO_API_ERROR_MESSAGE];
  } else if (error instanceof Error) {
    message = '경기 영상이 등록되지 않았어요!';
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl py-10">
      <span className="text-gary-5">⚠️ {message}</span>

      <button
        onClick={resetErrorBoundary}
        className="text-primary underline-offset-1"
      >
        새로고침
      </button>
    </div>
  );
};
