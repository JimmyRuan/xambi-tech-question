import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-hot-toast';

// Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Uploads a file to Firebase storage.
 *
 * @param {string} entityId - The ID of the entity to associate the file with.
 * @param {string} fieldName - The field name that the file is associated with.
 * @param {File} file - The file to be uploaded.
 * @param {function} onProgress - Callback function to track upload progress.
 * @param {function} onSuccess - Callback function to handle successful upload.
 */
export function uploadFile(entityId, fieldName, file, onProgress, onSuccess) {
    if (!file) {
        toast.error("No file selected for upload.");
        return;
    }

    const storageRef = ref(storage, `${entityId}/${fieldName}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (onProgress) {
                onProgress(progress);
            }
        },
        (error) => {
            console.error("Upload failed:", error);
            toast.error("File upload failed.");
        },
        () => {
            // Get download URL after upload is complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if (onSuccess) {
                    onSuccess({ file_path: downloadURL, file_name: file.name });
                }
                toast.success("File uploaded successfully.");
            });
        }
    );
}
