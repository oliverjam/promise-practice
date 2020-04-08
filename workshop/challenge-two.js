const fs = require("fs");
const path = require("path");
const test = require("tape");

// CHALLENGE TWO:
function readFilePromise(filePath) {
  // REPLACE THIS WITH YOUR CODE
  return {};
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
      t.fail("Nonexistent file should cause readFilePromise to reject");
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
