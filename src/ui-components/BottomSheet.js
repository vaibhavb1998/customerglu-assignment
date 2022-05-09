import { useEffect, useRef } from 'react';

function BottomSheet({ open, onClose, children }) {
    const sheetRef = useRef(null);

    useEffect(() => {
        function handleBackdropClick(event) {
            if (sheetRef.current && !sheetRef.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleBackdropClick);
        return () =>
            document.removeEventListener('mousedown', handleBackdropClick);
    }, [sheetRef, onClose]);

    return (
        <div
            className={`${
                open ? 'fixed' : ''
            } top-0 right-0 bottom-0 left-0 bg-gray-500 opacity-90 transition-opacity`}
        >
            <div
                className={`${
                    open ? 'translate-y-[0]' : 'translate-y-[100%]'
                } absolute bottom-0 left-0 w-[100%] h-[50%] transition-transform duration-700 overflow-auto rounded-t-[100px] border-4 bg-white z-10`}
                onClick={(e) => e.stopPropagation()}
                ref={sheetRef}
            >
                {children}
            </div>
        </div>
    );
}

export default BottomSheet;
