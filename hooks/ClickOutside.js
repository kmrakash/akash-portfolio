const { useEffect } = require('react');

const useClickOutside = (ref, effect) => useEffect(() => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            effect(event)
        }
    };
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside, false);
    };
}, [ref]);

export default useClickOutside;