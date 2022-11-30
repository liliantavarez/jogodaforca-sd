import { QuadroJogo } from './style';
import { useEffect, useRef } from 'react';

const DesenhoForca = (props: { vidas: number }) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = canvasRef.current?.getContext('2d');

  useEffect(() => {
    parteBoneco();
  }, [canvasCtxRef, props.vidas]);

  const baseForca = () => {
    if (canvasCtxRef) {
      canvasCtxRef.beginPath();
      canvasCtxRef.strokeStyle = '#fff';
      canvasCtxRef.lineWidth = 2;
      desenhar(0, 150, 150, 150);
      desenhar(10, 0, 10, 600);
      desenhar(0, 5, 70, 5);
      desenhar(60, 5, 60, 15);
    }
  };

  const cabeca = () => {
    if (canvasCtxRef) {
      canvasCtxRef.beginPath();
      canvasCtxRef.arc(60, 25, 10, 0, Math.PI * 2, true);
      canvasCtxRef.stroke();
    }
  };

  const parteBoneco = () => {
    if (props.vidas === 6) reset();
    if (props.vidas <= 5) cabeca();
    if (props.vidas <= 4) desenhar(60, 36, 60, 70);
    if (props.vidas <= 3) desenhar(60, 46, 100, 50);
    if (props.vidas <= 2) desenhar(60, 46, 20, 50);
    if (props.vidas <= 1) desenhar(60, 70, 100, 100);
    if (props.vidas === 0) desenhar(60, 70, 20, 100);
  };

  const desenhar = (PathFromx: number, PathFromy: number, PathTox: number, PathToy: number) => {
    if (canvasCtxRef) {
      canvasCtxRef.moveTo(PathFromx, PathFromy);
      canvasCtxRef.lineTo(PathTox, PathToy);
      canvasCtxRef.stroke();
    }
  };

  const reset = () => {
    canvasCtxRef?.clearRect(0, 0, 400, 400);
    baseForca();
  };

  return (
    <>
      <QuadroJogo ref={canvasRef}></QuadroJogo>
    </>
  );
};

export default DesenhoForca;
