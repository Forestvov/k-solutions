import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

interface Prop {
    name: string;
    type: 'MAIN' | 'BACK';
}

export default function FileInput({ name, type }: Prop) {
    return (
        <FileUploader multiple={false} handleChange={(file: File) => onChangeFile(file, type)} name={name}>
            1dad
        </FileUploader>
    );
}
