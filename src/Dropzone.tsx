import React, {useEffect, useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  maxWidth: '600px',
  margin: '20px auto',
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function MyDropzone(props: DropzoneProps) {
  const {
    acceptedFiles,
    isFocused,
    isDragAccept,
    getRootProps,
    getInputProps,
    isDragReject,
  } = useDropzone({
    maxFiles:1
  });

    const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

    useEffect(() => {
      props.setUploadedImage(acceptedFiles[0]);
    }, [acceptedFiles, props])

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone', style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(1 file are the maximum number of files you can drop here)</em>
      </div>
    </section>
  );
}

export interface DropzoneProps {
  setUploadedImage: React.Dispatch<React.SetStateAction<File | null>>
}

export default MyDropzone;