
const getUserNames = users => {
  return users.map(user => user.name);
};

console.group('Task-01');
console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.groupEnd();

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.group('Task-02');
console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
console.groupEnd();

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.group('Task-03');
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.groupEnd();

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.group('Task-04');
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
console.groupEnd();

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.group('Task-05');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
console.groupEnd();

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.group('Task-06');
console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
console.groupEnd();

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.group('Task-07');
console.log(calculateTotalBalance(users)); // 20916
console.groupEnd();

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName)).map(user => user.name);
};

console.group('Task-08');
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
console.groupEnd();

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};

console.group('Task-09');
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.groupEnd();

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .filter((skill, index, allSkills) => allSkills.indexOf(skill) === index)
    .sort();
};

console.group('Task-10');
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
console.groupEnd();
