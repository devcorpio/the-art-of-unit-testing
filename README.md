<p align="center">
  <a href="https://www.manning.com/books/the-art-of-unit-testing-second-edition">
    <img alt="The Art of Unit Testing, Second Edition" src="https://images.manning.com/720/960/resize/book/8/a491280-9705-427a-bfac-907b7a8129c7/osherove2.png" width="250" />
  </a>
</p>
<h2 align="center">
 The Art of Unit Testing, Second Edition <br>
</h2>

The Art of Unit Testing is a book written by [Roy Osherove](http://osherove.com/)

The book code examples are written in C# and the tools that appears in it are from the .NET community.

## Goal of this repository

<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

I would like that people that works using Node.js could enjoy of the knowledge that this book offers to its readers. Therefore I going to use Node.js to write the code examples and I going to use tools typically related with it. :heart_eyes:

The style of the code and the chosen tools are 100% my decision. (The good and the bad parts! :kissing_closed_eyes:)

## How study the repository

1. For every chapter of the book has I created a directory
   where appears the final version of the code in the mentioned chapter.

2. Every commit has a reference to the chapter related. Any change I needed to do has a commit, with the objective of follow the flow of the book.

**Note**: If you want to open the links in another tab, just do a CTRL+click on the link.

#### Chapters

1. _The basics of unit testing_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/8668ed2">Initial commit</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/254cba7">In order to commit formatted code I installed prettier, pretty-quick and husky</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/1ede197">update README</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/a03a1c4">preparing the simpleParser example, creating InvalidOperation custom error</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/43b2582">creating simpleParser example</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/7a5e84a">creating a test manually to do basic tests to simpleParser, I'm not using unit testing frameworks, yet</a>
     </p>
    </details>

2. _A first unit test_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/fc4c419">starting LogAn, the project that we are going to use in the next chapters</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/89c24d4">install jest</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/2e2bb78">renaming homemade test of the chapter 01 to avoid conflicts with jest</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/6caedc8">creating logAnalyzer and its test, that show us that the SUT have a bug</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/0f54abd">fix isValidLogFileName in order to fix the test</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/6d01b7b">adding two more tests, one of them intetionally fails</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/5242ee2">fix in isValidLogFilename to fix the test</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/aaa3ecf">refactoring the code of thest using the parameterized tests technique</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/bb97e1e">adding setup to the test</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/279aacc">returns error if the filename is empty</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/7e50568">add test that assert that the error is thrown</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/0900685">adding state logAnalyzer</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/8d21eb8">first state-based test for logAnalyzer</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/9b319ea">add a inmemory calculator to continuing trying state-based testing</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/6ecfd55">add a memory calculator in order to test it with state-based testing</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/232a8ae">update readme</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/09e19e4">remove .vscode from repository</a><br>
     </p>
    </details>

3. _Using stubs to break dependencies_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/b23053f">copy code from chapter 02 to the chapter 03 folder in order to continue with the book</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/e57c8f1">install @types/node, with that, I can work with types and node.js modules without vscode warnings</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/95768cf">check the validity of the file extension in a disk file, that creates an external dependency, unit tests are broken</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/42afa86">fixing logAnalyzer tests, right now they are integration tests and not unit tests, meh</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/8c0bb71">extracting a factory function that touches the filesystem and calling it</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/bdce009">creating a fake extension manager, the name of a fake is because we can use it as a stub or a mock, depending of the test.</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/2c44a3a">create a new fake that is ready to be configurable to use in test</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/0c83251">fixing alwaysValidFakeExtensionManager, I didn't create the function return</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/108928e">I created a seam in logAnalyzer, that seam enable the possibility of inject the dependency while are calling the function</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/0dac764">using the fakeManagerExtension to fix the failed test from the previous commit</a><br>
     </p>
    </details>

Working in the rest of the chapters... :grin:

## How to use

### Setup

Install all the dependencies:

```bash
npm install
```

If you want to execute the all tests I created:

```bash
npm run test
```

## Final thoughts

I hope you enjoy the repository as much I while I was writing it :smiley:

I strongly encourage that you should [buy the book](https://www.amazon.com/Art-Unit-Testing-examples/dp/1617290890), it is a masterpiece.
