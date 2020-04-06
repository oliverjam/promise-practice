const test = require("tape");
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

// don't change this function!
function getUserWithRepos(id) {
  return api.getUser(id).then(addReposToUser);
}
// should resolve with e.g. { id: 0, username: "oliverjam", repos: [...]}

// TESTS
// don't change these!

test("getUserWithRepos should resolve with a user and their repos", (t) => {
  getUserWithRepos("oliverjam")
    .then((user) => {
      t.equal(user.id, 0, `user.id ${user.id} should equal 0`);
      t.equal(
        user.username,
        "oliverjam",
        `user.username "${user.username}" should equal "oliverjam"`
      );
      t.deepEqual(user.repos[0], {
        id: 143034296,
        owner: 0,
        name: "accessibility-talk",
        url: "https://github.com/oliverjam/accessibility-talk",
      });
      t.end();
    }, "user.repos should be the right object")
    .catch((error) => {
      t.error(error);
      t.end();
    });
});
