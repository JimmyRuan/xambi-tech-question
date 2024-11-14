import React, { useState } from 'react';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

export function useLoadingSpinner() {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return [isLoading ? <LoadingSpinner /> : null, showLoader, hideLoader];
}
