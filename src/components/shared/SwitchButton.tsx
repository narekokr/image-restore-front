import React, { FC } from 'react';

interface SwitchButtonProps {
    title?: string,
    enabled: boolean,
    setEnabled: () => void,
}

const SwitchButton:FC<SwitchButtonProps> = ({ title = '', enabled, setEnabled }) => (

  <div className="flex justify-between">
    <span className=" text-md font-medium text-gray-700">
      {title}
    </span>
    <label className="inline-flex relative items-center mr-5 cursor-pointer">

      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        readOnly
      />
      <div
        onClick={setEnabled}
        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"
      />

    </label>
  </div>

);

export default SwitchButton;
