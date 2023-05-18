import React, { useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Button from 'react-bootstrap/Button';
import MyDropzone from './Dropzone';
import './ImageEditor.css';

const ImageEditor: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const canvasRef = useRef<CanvasDraw>(null);
  const [brushSize, setBrushSize] = useState(4);
  const [canvasWidth, setCanvasWidth] = useState(512);
  const [canvasHeight, setCanvasHeight] = useState(512);
  const previewCanvasRef = useRef<CanvasDraw>(null);

  const handleSave = () => {
    if (canvasRef.current) {
      // @ts-ignore
      const canvas = previewCanvasRef.current.canvasContainer.childNodes[1] as HTMLCanvasElement;
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'drawing.png';
      link.click();
    }
  };

  useEffect(() => {
    if (uploadedImage) {
      const image = new Image();
      image.onload = () => {
        const { width, height } = image;
        const maxCanvasSize = 512;
        const ratio = maxCanvasSize / Math.max(width, height);
        setCanvasWidth(width * ratio);
        setCanvasHeight(height * ratio);
      };
      image.src = URL.createObjectURL(uploadedImage);
    }
  }, [uploadedImage]);

  const handleDrawing = () => {
    if (canvasRef.current && previewCanvasRef.current) {
      const drawing = canvasRef.current.getSaveData();
      previewCanvasRef.current.loadSaveData(drawing, true);
    }
  };

  const handleBrushSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(event.target.value, 10);
    setBrushSize(size);
  };

  const handleEraser = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
    if (previewCanvasRef.current) {
      previewCanvasRef.current.clear();
    }
  };

  return (
    <div className="editorContainer">
      <h1 style={{ textAlign: 'center' }}>Image Restoration</h1>
      <MyDropzone setUploadedImage={setUploadedImage} />
      {uploadedImage
          && (
          <div className="content">
            <p>Draw the scratches on the image for restoration</p>
            <div className="canvases">
              <div className="firstCanvas">
                <h3>Drawing On Image</h3>
                <CanvasDraw
                  className="drawable"
                  ref={canvasRef}
                  brushRadius={brushSize}
                  lazyRadius={0}
                  brushColor="#ffffff" // Set brush color to black
                  canvasWidth={canvasWidth}
                  canvasHeight={canvasHeight}
                  imgSrc={URL.createObjectURL(uploadedImage as File)}
                  onChange={handleDrawing}
                  style={{ border: '1px solid black' }}
                />
                <div>
                  <label htmlFor="brushSize">Brush Size:</label>
                  <input
                    type="range"
                    id="brushSize"
                    min="1"
                    max="20"
                    value={brushSize}
                    onChange={handleBrushSizeChange}
                  />
                </div>
                <Button className="resetButton" onClick={handleEraser}>Reset</Button>
              </div>
              <div>
                <h3>Drawing Preview</h3>
                <CanvasDraw
                  ref={previewCanvasRef}
                  brushColor="#ffffff"
                  canvasWidth={canvasWidth}
                  canvasHeight={canvasHeight}
                  hideInterface
                  backgroundColor="#000000"
                  hideGrid
                  disabled
                  style={{ border: '1px solid black' }}
                />
              </div>
            </div>
            <Button className="generateButton" onClick={handleSave}>Generate</Button>
          </div>
          )}
    </div>
  );
};

export default ImageEditor;
