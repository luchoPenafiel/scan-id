// Vendors
import { useRef, useEffect, useState, useCallback } from 'react';

// Hooks
import { useUserMedia } from '../../hooks/useUserMedia';

// API
import { sendImage } from '../../api/sendImage';

// Components
import { Button } from '../../components';

type ScanViewTypes = {
  onSaveImage: (image: string) => void;
  onCancel: () => void;
};

export const ScanView = ({ onSaveImage, onCancel }: ScanViewTypes) => {
  const [result, setResult] = useState<boolean>(false);
  const [helper, setHelper] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const mediaStream = useUserMedia();
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => {
    videoRef.current !== null && videoRef.current.play();
  };

  const takePicture = async () => {
    return new Promise((resolve) => {
      if (canvasRef && videoRef.current !== null) {
        const context = canvasRef.current?.getContext('2d');
        resolve(context?.drawImage(videoRef.current, 0, 0));
      }
    });
  };

  const stopStreamedVideo = useCallback(() => {
    if (mediaStream) {
      const tracks = mediaStream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    }

    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject = null;
    }
  }, [mediaStream]);

  const handleCancel = async () => {
    stopStreamedVideo();
    onCancel();
  };

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (result) {
        stopStreamedVideo();
        onCancel();
      } else {
        await takePicture();
        const imageData: string | undefined =
          canvasRef.current?.toDataURL('image/jpg');
        if (imageData) {
          onSaveImage(imageData);
          const response = await sendImage(imageData);
          const result = response.summary.outcome === 'Approved';

          setResult(result);
          setHelper(!helper);
        }
      }
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, helper]);

  return (
    <>
      <h2>Take picture</h2>
      <p>Fit your ID card inside the frame.</p>
      <p>The picture will be taken automatically.</p>

      <p>Approved: {`${result}`}</p>
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      />

      <canvas id="canvas" width={260} height={160} ref={canvasRef} />

      <Button onClick={handleCancel}>Cancel</Button>
    </>
  );
};
