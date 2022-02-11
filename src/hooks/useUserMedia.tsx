// Vendors
import { useState, useEffect } from 'react';

export const useUserMedia = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const constraints: MediaStreamConstraints = {
      audio: false,
      video: {
        facingMode: 'environment',
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };

    const getMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setMediaStream(stream);
      } catch (err) {
        console.log(err);
      }
    };

    if (!mediaStream) {
      getMediaStream();
    }
  }, [mediaStream]);

  return mediaStream;
};
