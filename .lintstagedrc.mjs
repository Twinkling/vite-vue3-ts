export default {
    '*.{css,scss,less,html,wxss}': ['prettier --write', 'stylelint --fix'],
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
};
