import users from './users.js';
const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender) 
  .map (user => user.name) 
  // твой код


console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]