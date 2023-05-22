import React, { useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../store';
import { getResultImage, getResultImageWithMask } from '../store/image/actionCreators';
import { ApiEndpoints, getEndpoint } from '../constants';
import { OptionNames } from '../store/image/types';

const ImageEditor = () => {
  const uploadedImage = useSelector((state) => state.image.uploadedImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!uploadedImage) {
      navigate('/');
    }
  }, [uploadedImage]);

  const canvasRef = useRef<CanvasDraw>(null);
  const [brushSize, setBrushSize] = useState(4);
  const [canvasWidth, setCanvasWidth] = useState(512);
  const [canvasHeight, setCanvasHeight] = useState(512);
  const previewCanvasRef = useRef<CanvasDraw>(null);
  const colorizeSelected = useSelector((state) => state.image[OptionNames.colorizeSelected]);
  const removeScratchesSelected = useSelector(
    (state) => state.image[OptionNames.removeScratchesSelected],
  );
  const endpoint = getEndpoint(colorizeSelected, removeScratchesSelected);

  const handleSave = () => {
    if (canvasRef.current && uploadedImage) {
      // @ts-ignore
      const canvas = previewCanvasRef.current.canvasContainer.childNodes[1] as HTMLCanvasElement;
      const mask = canvas.toDataURL();
      // @ts-ignore
      dispatch(getResultImageWithMask(uploadedImage, mask, endpoint));
      navigate('/result');
    }
  };

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

  useEffect(() => {
    if (uploadedImage) {
      handleEraser();
      const image = new Image();
      image.onload = () => {
        const { width, height } = image;
        const maxCanvasSize = 512;
        const ratio = maxCanvasSize / Math.max(width, height);
        setCanvasWidth(width * ratio);
        setCanvasHeight(height * ratio);
      };
      image.src = uploadedImage;
    }
  }, [uploadedImage]);

  return (
    <div className="editorContainer">
      {/* <MyDropzone setUploadedImage={setUploadedImage} /> */}
      {uploadedImage
          && (
          <div className="content">
            <p className="mt-6 text-center text-gray-500 md:text-xl">
              Draw the scratches on the images
            </p>
            <div className="flex flex-wrap justify-center gap-x-20 mt-6">
              <div className="firstCanvas">
                <h3 className="mb-2 text-xl text-center">Drawing On Image</h3>
                <CanvasDraw
                  className="drawable"
                  ref={canvasRef}
                  brushRadius={brushSize}
                  lazyRadius={0}
                  brushColor="#ffffff"
                  canvasWidth={canvasWidth}
                  canvasHeight={canvasHeight}
                  imgSrc={uploadedImage}
                  onChange={handleDrawing}
                  style={{ border: '1px solid black' }}
                />

              </div>
              <div>
                <h3 className="mb-2 text-xl text-center">Drawing Preview</h3>
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
            <div className="flex justify-between align-center">
              <div className="mt-6">
                <label className="brushLabel mr-2" htmlFor="brushSize">Brush Size:</label>
                <input
                  type="range"
                  id="brushSize"
                  min="1"
                  max="20"
                  value={brushSize}
                  onChange={handleBrushSizeChange}
                />
              </div>
              <div className="flex flex-wrap justify-end gap-x-5">
                <button
                  className="group mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                  onClick={handleEraser}
                >
                  <p className="text-lg">Reset</p>
                </button>
                <button
                  className="group mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                  onClick={handleSave}
                >
                  <p className="text-lg">Generate</p>
                </button>
              </div>
            </div>

          </div>
          )}
    </div>
  );
};

export default ImageEditor;
