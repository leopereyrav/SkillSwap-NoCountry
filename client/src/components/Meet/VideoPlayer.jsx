import { useEffect, useRef } from 'react';

export const VideoPlayer = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);

  return (
    <video
      className='w-[90%] md:w-[60%] lg:w-[40%]'
      data-testid='peer-video'
      ref={videoRef}
      autoPlay
      muted={true}
    />
  );
};
