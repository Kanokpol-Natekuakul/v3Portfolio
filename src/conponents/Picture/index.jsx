import { useState } from 'react';

const Picture = ({ picture, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!picture)
        return null;

    return (
        <div>
            <img
                src={picture}
                alt={title}
                className="w-full sm:w-5/6 max-w-full h-auto rounded-md border-2 border-primarySubcontent cursor-zoom-in"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={title || 'Image preview'}
                >
                    <img
                        src={picture}
                        alt={title}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-xl border border-white/20"
                    />
                </div>
            )}
        </div>
    )
}

export default Picture;