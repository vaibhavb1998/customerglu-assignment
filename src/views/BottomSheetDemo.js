import { useCallback, useEffect, useState } from 'react';

// ui-components
import BottomSheet from '../ui-components/BottomSheet';

function BottomSheetDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div className="text-center">
            <button
                type="button"
                className="w-[360px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                onClick={handleOpen}
            >
                Open Bottom Sheet
            </button>

            <BottomSheet open={isOpen} onClose={handleClose}>
                <div className="flex justify-center my-10">
                    Bottom Sheet Content
                </div>
            </BottomSheet>
        </div>
    );
}

export default BottomSheetDemo;
