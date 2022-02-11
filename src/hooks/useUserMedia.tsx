// Vendors
import { useState, useEffect } from 'react';

export const useUserMedia = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const constraints: MediaStreamConstraints = {
      audio: false,
      video: {
        aspectRatio: 16 / 9,
        facingMode: 'environment',
        width: 260,
        height: 160,
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
