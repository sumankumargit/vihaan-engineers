import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="text-blue-600 font-bold uppercase text-[10px] tracking-[0.3em] animate-pulse">
                    Loading
                </div>
            </div>
        </div>
    );
};

export default Loading;
