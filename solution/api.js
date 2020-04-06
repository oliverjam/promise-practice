const users = [
  { id: 0, username: "oliverjam" },
  { id: 1, username: "starsuit" },
];

const repos = [
  {
    id: 143034296,
    owner: 0,
    name: "accessibility-talk",
    url: "https://github.com/oliverjam/accessibility-talk",
  },
  {
    id: 118351319,
    owner: 0,
    name: "es6-class-intro",
    url: "https://github.com/oliverjam/es6-class-intro",
  },
  {
    id: 167710706,
    owner: 0,
    name: "eslint-config-react-minimal",
    url: "https://github.com/oliverjam/eslint-config-react-minimal",
  },
  {
    id: 198849310,
    owner: 0,
    name: "express-rest-api",
    url: "https://github.com/oliverjam/express-rest-api",
  },
  {
    id: 224448233,
    owner: 0,
    name: "fac-eleventy",
    url: "https://github.com/oliverjam/fac-eleventy",
  },
  {
    id: 84184741,
    owner: 0,
    name: "fac-overflow-search",
    url: "https://github.com/oliverjam/fac-overflow-search",
  },
  {
    id: 242816607,
    owner: 0,
    name: "fac-project-agency-site",
    url: "https://github.com/oliverjam/fac-project-agency-site",
  },
  {
    id: 181157566,
    owner: 1,
    name: "cv",
    url: "https://github.com/starsuit/cv",
  },
  {
    id: 109670124,
    owner: 1,
    name: "machine-learning",
    url: "https://github.com/starsuit/machine-learning",
  },
  {
    id: 190930152,
    owner: 1,
    name: "mastermind",
    url: "https://github.com/starsuit/mastermind",
  },
  {
    id: 109670540,
    owner: 1,
    name: "MLND-titanic-survival",
    url: "https://github.com/starsuit/MLND-titanic-survival",
  },
  {
    id: 189104206,
    owner: 1,
    name: "neopets",
    url: "https://github.com/starsuit/neopets",
  },
  {
    id: 188703923,
    owner: 1,
    name: "portfolio",
    url: "https://github.com/starsuit/portfolio",
  },
  {
    id: 102103603,
    owner: 1,
    name: "RoboND-search-map",
    url: "https://github.com/starsuit/RoboND-search-map",
  },
  {
    id: 194707300,
    owner: 1,
    name: "she-ra-API",
    url: "https://github.com/starsuit/she-ra-API",
  },
  {
    id: 186625854,
    owner: 1,
    name: "she-ra-character-selector",
    url: "https://github.com/starsuit/she-ra-character-selector",
  },
  {
    id: 178735926,
    owner: 1,
    name: "spellchecker",
    url: "https://github.com/starsuit/spellchecker",
  },
];

function getUser(username) {
  const user = users.find((user) => user.username === username);
  const promise = new Promise((resolve, reject) => {
    if (!user) {
      const error = new Error(`User with username '${username}' not found`);
      reject(error);
    } else {
      resolve(user);
    }
  });
  return promise;
}

function getRepos(userId) {
  const userRepos = repos.filter((repo) => repo.owner === userId);
  const promise = new Promise((resolve, reject) => {
    if (!userRepos.length) {
      const error = new Error(`No repos found for user with ID '${userId}'`);
      reject(error);
    } else {
      resolve(userRepos);
    }
  });
  return promise;
}

module.exports = { getUser, getRepos };
