import path from 'path';

export default {
    TEMPLATE_DIR: path.join(__dirname, '..', 'templates'),
    FAVICON_FILE: path.join(__dirname, '..', '..', 'public', 'favicon.ico'),
    STATIC_PREFIX: '/static',
    STATIC_DIR: path.join(__dirname, '..', '..', 'public')
};