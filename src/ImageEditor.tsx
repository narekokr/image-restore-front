import React, {useRef, useState} from 'react';
import CanvasDraw from 'react-canvas-draw';
import MyDropzone from "./Dropzone";
const ImageEditor: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const canvasRef = useRef<CanvasDraw>(null);
  const previewCanvasRef = useRef<CanvasDraw>(null);

  console.log(uploadedImage, 'uploaded');

 const handleSave = () => {
    if (canvasRef.current) {
      // @ts-ignore
        const canvas = canvasRef.current.canvas.drawing[1] as HTMLCanvasElement;
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'drawing.png';
      link.click();
    }
  };

   const handleDrawing = () => {
    if (canvasRef.current && previewCanvasRef.current) {
      const drawing = canvasRef.current.getSaveData();
      previewCanvasRef.current.loadSaveData(drawing, true);
    }
  };


  return (
    <div>
      <h1>Image Editor</h1>
    <MyDropzone setUploadedImage={setUploadedImage}/>
      {uploadedImage &&
          <>
          <div style={{ display: 'flex', margin: '20px auto', maxWidth: '1200px' }}>
              <div>
                  <h3>Drawing On Image</h3>
            <CanvasDraw
          ref={canvasRef}
          brushColor="#000000" // Set brush color to black
          canvasWidth={500}
          canvasHeight={500}
          imgSrc={URL.createObjectURL(uploadedImage as File)}
          onChange={handleDrawing}
        />
                  </div>
              <div>
          <h3>Drawing Preview</h3>
          <CanvasDraw
            ref={previewCanvasRef}
            brushColor="#000000"
            canvasWidth={500}
            canvasHeight={500}
            hideInterface={true}
            backgroundColor="#ffffff"
          />
        </div>
      </div>
          <button onClick={handleSave}>Save Drawing</button>
          </>

      }
    </div>
  );
};

export default ImageEditor;

