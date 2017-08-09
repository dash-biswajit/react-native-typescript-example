Components with proper documentation and *test cases*. Uses TypeScript with redux. Contains few native android components to demonstrate integration.

I love writing tests and TDD. Some of the tests demonstrated in this project.

- Unit tests for all components
- Unit tests for redux reducers and store
- Unit test for native components (mock)
- Integration test for the containers (screens)

## Node and dependency versions
At the time of this readme
- Node 8.2.1
- npm 5.3.0
- Typescript 2.4.2

## Dependencies
```bash
brew install node
brew install watchman
sudo npm install -g react-native-cli semistandard semistandard-format yarn tslint typescript typedoc
```

## Git instructions

```
cd <project>
npm install
```

## Running the project
Terminal 1 (Compiles typescript)
```
npm run tsc
```

Terminal 2
```
npm start
```

Terminal 3
```
npm test
npm run ios
npm run android
```

## Generating documentation
```
npm run docs
```
