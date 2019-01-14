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

1.  _The basics of unit testing_

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

2.  _A first unit test_

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

3.  _Using stubs to break dependencies_

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
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/3ea220e">creating a extension manager factory that allows to set the extension manager to return before execute it, the default manager it returns is fileExtensionManager</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/ceb8d02">using extensionManagerFactory I created an integration test, because the test is making use of a external dependency, the filesystem</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/baecfdc">using extensionManagerFactory I created an unit test, because the test is making use of a fake extension manager, therefore I'm not using the filesystem that is an external dependency</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/02cbb5b">I have changed the isValid method from the fakes to return a promise instead of a boolean</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/3847482">In order to use the technique Extract and Override I needed to create a new file using logAnalyzer as a class and create a virtual method</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/3d89553">testing the the new class using the technique Extract and Override</a><br>
     </p>
    </details>

4.  _Interaction testing using mock objects_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/36ad452">copy code from chapter 03 to the chapter 04 folder in order to continue with the book</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/e8caed0">organizing a bit more the files to improve the 'first glance' effect of LogAn folder</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/a74aebb">create a new object that fake a call to a web service</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/ae67788">create a basic webservice in order to create an example that I want to create from the book</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/8b1bdd8">adding a parameter that allows to pass an object webService to logAnalyzer</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/c51ced2">creating the real webService connector</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/3fb65ab">fixing fakeWebService, create getter and return both object with the two functions</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/107ca34">create a unit test that use fakeWebService as a mock</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/4da9ca7">adding another fake named emailService, and create a new test where the webService is used as stub and the emailService as a mock</a><br>
     </p>
    </details>

5.  _Isolation (mocking) frameworks_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/adc1345">copy logAnalyzer.js, errors and fakes from the folder of chapter 04 in order to continue with the book</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/e1a095c">creating a test that use a fake handwritten</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/0223c9f">instead of use a handwriting fake I create it using jest mocking module!</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/1dcf09b">check that the logError method is called with the expected error message using jest mocking system functions</a><br>
     </p>
    </details>

6.  _Digging deeper into isolation frameworks_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
        No commits here, this chapter go deep in the explanation about isolation frameworks, interesting concepts! :grin:
     </p>
    </details>

7.  _test hierarchies and organization_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/2fc73fd">initial code to create a test api for the application, the name of the first strategy is abstract test infrastructure class pattern</a><br>
      - <a href="https://github.com/devcorpio/the-art-of-unit-testing/commit/df26d6d">refactored solution based in abstract test infrastructure class pattern</a><br>

    -   Also Wonderful explanations about concepts as:

        1. Focus in the importance of separation of unit tests and integration tests.
        2. Separate them by speed: slows, fasts, etc
        3. Create nightly builds, CI builds, etc
        4. More and more :grin: if you want to know all, [buy the book](https://www.amazon.com/Art-Unit-Testing-examples/dp/1617290890)

     </p>
    </details>

8.  _The pillars of good unit tests_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - No commits here, in this chapter Roy speaks deeply about:

         1. Writing trustworthy tests
         2. Writing maintainable tests
         3. Writing readable tests
         4. Exploring naming conventions for unit tests.

    <br>
    Thanks to the content of this chapter I have said to myself many times "aha", this chapter by itself triggers a message,and the message is: "buy the book!" :grin: I enjoyed a lot this chapter.

     </p>
    </details>

9.  _Integration unit testing into the organization_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - No commits here, wonderful chapter!, this book is a drug for me(a good drug!) :smile:
     </p>
    </details>

10. _Working with legacy code_


    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - No commits here, several amazing concepts! :smile: :smile:
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
