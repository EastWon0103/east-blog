export const getNavItems = () => {
    return [
        {
            name: 'HOME',
            path: '/',
        },
        {
            name: 'POST',
            path: '/posts',
        },
        {
            name: 'PROJECT',
            path: '/projects',
        },
        {
            name: 'ABOUT ME',
            path: '/introduction',
        },
    ];
};

export const getPathByName = (name: string) => {
    const dic = {
        HOME: '/',
        POST: '/posts',
        PROJECT: '/projects',
        'ABOUT ME': '/introduction',
    };

    return dic[name];
};
