import React, { useState } from 'react';

export function FileUpload({ fieldDisplayName, fieldName, initialFiles = [], isMultiple = false, uponFileChange }) {
    const [selectedFiles, setSelectedFiles] = useState(initialFiles);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
        if (uponFileChange) {
            uponFileChange(files);
        }
    };

    return (
        <div className="file-upload my-4">
            <label className="block text-sm font-medium text-gray-700">{fieldDisplayName}</label>
            <input
                type="file"
                name={fieldName}
                multiple={isMultiple}
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
            />
            <div className="preview mt-2">
                {selectedFiles.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                        {selectedFiles.map((file, index) => (
                            <div key={index} className="border rounded overflow-hidden">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="object-cover w-full h-32"
                                />
                                <p className="text-xs text-center text-gray-600 p-1">{file.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
