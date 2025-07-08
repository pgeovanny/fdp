// src/components/CSVUpload.tsx
export {};

import React, { useRef } from 'react';
import axios from 'axios';

export default function CSVUpload({
  onFile,
  onImport
}: {
  onFile?: (file: File) => void;
  onImport?: (fileData: FormData) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    if (ref.current?.files?.length) {
      const file = ref.current.files[0];
      if (onFile) onFile(file);
    }
  };

  const upload = async () => {
    if (!ref.current?.files?.length) {
      return alert('Selecione um arquivo CSV');
    }
    const data = new FormData();
    data.append('file', ref.current.files[0]);
    const res = await axios.post('/api/upload', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    alert(`${res.data.inserted} questões importadas`);
    if (onImport) onImport(data);
  };

  return (
    <div className="flex flex-col">
      <input
        type="file"
        accept=".csv"
        ref={ref}
        onChange={handleFileChange}
        className="mb-2"
      />
      <button onClick={upload} className="btn-primary">
        Importar CSV
      </button>
    </div>
  );
}
