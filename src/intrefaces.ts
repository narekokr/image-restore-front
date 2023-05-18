import React from 'react';

export interface DropzoneProps {
  setUploadedImage: React.Dispatch<React.SetStateAction<File | null>>
}
