import users from './users.js';
const getSortedUniqueSkills = users => 
  
  Array.from(new Set
    (users.reduce(function( accSkills, skill) {
      accSkills.push(...skill.skills);
      return accSkills;}, [])
    .sort()
    )
  )
  // .filter(function(item, pos, ary) {
  //   return !pos || item != ary[pos - 1]
  // })
  
  


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]