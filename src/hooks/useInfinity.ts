import React from 'react';

const useInfinity = () => {
    const [allowFetch, setAllowFetch] = React.useState(false);
    React.useEffect(() => {
        const app = document.getElementById('app');
        window.addEventListener('scroll', () => {
            if (app) {
                if (window.scrollY + window.innerHeight > app.clientHeight + app.offsetTop) {
                    setAllowFetch(true);
                }
            }
        });
    }, []);

    return { allowFetch, setAllowFetch };
};

export default useInfinity;
