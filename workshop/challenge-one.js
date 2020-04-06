const test = require("tape");
const api = require("./api");

// CHALLENGE ONE
function addReposToUser(user) {
  // REPLACE THIS WITH YOUR CODE
  return {};
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
