const users = [
    {name: 'Mario', premium: true},
    {name: 'Luigi', premium: true},
    {name: 'Yoshi', premium: false},
    {name: 'Toad', premium: false},
    {name: 'Peach', premium: true},
    {name: 'Wario', premium: false}
];

// export const getPremiums = (users) => users.filter(user => user.premium == true);
const getPremiums = (users) => users.filter(user => user.premium == true);


// export default users;
export {getPremiums, users as default};