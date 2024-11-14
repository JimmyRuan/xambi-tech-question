// src/data/common.js
export const StoredFileState = {
    PENDING: 'PENDING',
    UPLOADING: 'UPLOADING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED',
};

export class StoredFile {
    constructor(file_path, file_name, state = StoredFileState.PENDING) {
        this.file_path = file_path;
        this.file_name = file_name;
        this.state = state;
    }

    // Method to update the file state
    updateState(newState) {
        if (Object.values(StoredFileState).includes(newState)) {
            this.state = newState;
        } else {
            throw new Error(`Invalid file state: ${newState}`);
        }
    }
}
