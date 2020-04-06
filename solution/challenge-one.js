const api = require("./api");

// Examples of how the "api" works

// getUser takes the username of a user and returns a promise that resolves with that user
// api.getUser("oliverjam").then((user) => console.log(user));

// getRepos takes the ID of a user and returns a promise that resolves with an array of all their repos
// api.getRepos(1).then((repos) => console.log(repos[0]));

// WORKSHOP PART ONE
// write an "addReposToUser" function so the below "getUserWithRepos" works
// it should take a user object as an argument, fetch that user's repos, then return a new object with the user details and the array of repos
function addReposToUser(user) {
  return api.getRepos(user.id).then((repos) => {
    const userWithRepos = { ...user, repos };
    return userWithRepos;
  });
}

function getUserWithRepos(id) {
  return api.getUser(id).then(addReposToUser);
}

getUserWithRepos("oliverjam").then(console.log).catch(console.error);

// should log:
// {
//   id: 0,
//   username: 'oliverjam',
//   repos: [
//     {
//       id: 143034296,
//       owner: 0,
//       name: 'accessibility-talk',
//       url: 'https://github.com/oliverjam/accessibility-talk'
//     },
//     // ...
//   ]
// }
