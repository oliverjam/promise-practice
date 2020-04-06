const fs = require("fs");
const path = require("path");
const test = require("tape");

// Challenge two:
// make a wrapper for fs.readfile that returns a promise instead of taking a callback argument
// it should pass all the tests below
function readFilePromise(filePath) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
  return promise;
}

// TESTS
// don't change these!

test("readFilePromise returns a promise", (t) => {
  const testPath = path.join(__dirname, "test.txt");
  const result = readFilePromise(testPath);
  t.ok(
    result instanceof Promise,
    "readFilePromise should return a Promise object"
  );
  t.end();
});

test("readFilePromise reads a file correctly", (t) => {
  const testPath = path.join(__dirname, "test.txt");
  readFilePromise(testPath).then((contents) => {
    t.equal(
      contents.toString(),
      "hello",
      `File contents '${contents}' should equal 'hello'`
    );
    t.end();
  });
});

test("readFilePromise rejects if an error occurs", (t) => {
  readFilePromise("notReal.psd")
    .then(() => {
      t.fail("Nonexistent path should cause readFilePromise to reject");
      t.end();
    })
    .catch((error) => {
      t.ok(
        error instanceof Error,
        "readFilePromise should reject with an Error object"
      );
      t.equal(
        error.message,
        "ENOENT: no such file or directory, open 'notReal.psd'",
        `Error message "${error.message}" should equal "ENOENT: no such file or directory, open 'notReal.psd'"`
      );
      t.end();
    });
});
