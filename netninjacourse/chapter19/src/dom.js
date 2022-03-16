console.log('dom file');

const body = document.querySelector('body');

// export const styleBody = () => {
const styleBody = () => {
    body.style.backgroundColor = 'peachpuff';
}

// export const addTitle = (text) => {
const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}

// export const contact = 'frkl@cedo.com';
const contact = 'frkl@cedo.com';

export { styleBody, addTitle, contact};