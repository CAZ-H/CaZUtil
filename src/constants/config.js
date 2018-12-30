const prod = {
    URL_ROOT: '/CaZUtil'
};

const dev = {
    URL_ROOT: ''
};

export default (process.env.NODE_ENV === 'production' ? prod : dev);
