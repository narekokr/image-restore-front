import React from 'react';
import SwitchButton from './shared/SwitchButton';

const SelectOptions = ({
  handleSubmit, colorizeSelected, setColorizeSelected, removeScratchesSelected,
  setRemoveScratchesSelected, drawScratchesYourself, setDrawScratchesYourself,
}: {
  handleSubmit: () => void,
  setColorizeSelected: () => void,
  setRemoveScratchesSelected: () => void,
  setDrawScratchesYourself: () => void,
  colorizeSelected: boolean,
  removeScratchesSelected: boolean,
  drawScratchesYourself: boolean,

}) => {
  const isFirstEndpoint = colorizeSelected && !removeScratchesSelected;
  const isSecondEndpoint = colorizeSelected && removeScratchesSelected;
  const isThirdEndpoint = !colorizeSelected && removeScratchesSelected;

  const isDisabled = !colorizeSelected && !removeScratchesSelected && !drawScratchesYourself;

  console.log(process.env.REACT_APP_API_URL, 'URL');

  return (
    <div className="flex flex-col justify-center bg-gray-50 min-w-28rem  ">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
        <h2 className="font-display text-2xl font-bold">Select Options</h2>
        <p className="text-lg text-gray-500">
          Please check which type of processing you&apos;d like
        </p>
      </div>
      <div className="grid gap-6 bg-gray-50 px-4 py-8 md:px-16">
        <div className="flex flex-col items-center mt-4 gap-5">
          <div className="w-full">
            <SwitchButton title="Colorize" enabled={colorizeSelected} setEnabled={setColorizeSelected} />
          </div>
          <div className="w-full">

            <SwitchButton title="Remove Scratches" enabled={removeScratchesSelected} setEnabled={setRemoveScratchesSelected} />
          </div>

          {removeScratchesSelected && (
            <div className="w-full">
              <SwitchButton
                title="Mark the scratches yourself"
                enabled={drawScratchesYourself}
                setEnabled={setDrawScratchesYourself}
              />
            </div>

          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`${
            isDisabled
              ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400'
              : 'border-black bg-black text-white hover:bg-white hover:text-black'
          } my-6 flex h-10 items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
};

export default SelectOptions;
