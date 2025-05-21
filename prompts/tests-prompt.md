# CONTEXT

I have provided you with a Product Requirements Document (PRD). Please analyze feature [FEATURE_NAME] and its User Stories to create comprehensive Jest tests. Do not work on other features yet.

## ANALYSIS PHASE

Before writing tests, please analyze:
- The specific feature and associated user stories in the PRD
- The relevant source code components and their interactions
- Integration points with other components/services
- External dependencies requiring mocks (APIs, services, databases)
- Data models, state management, and user data flows
- Existing test coverage and testing patterns used in the codebase

## IMPLEMENTATION PHASE

### Testing Philosophy:
- Focus on user-visible behavior and outcomes rather than implementation details
- Test both server-rendered content and client-side interactive behaviors
- Verify functionality from a user's perspective (what users see and experience)
- Test component contracts and interfaces, not internal workings
- Mock external dependencies like APIs, but use realistic mock data

### Test Types to Include:
- Functional tests that verify user workflows
- Component rendering tests (snapshot or DOM verification)
- Interactive behavior tests (user actions, form submissions)
- Error handling and edge case tests
- Accessibility tests where applicable

### Test Structure:
- Use Given-When-Then pattern with descriptive comments
- Maintain clarity by using descriptive test names
- Group related tests logically using nested `describe` blocks
- Use setup and teardown hooks consistently (`beforeEach`, `afterEach`)
- Isolate tests to prevent cross-test dependencies

## CONSTRAINTS

- Scope: Modify only the test files, not the source code
- Format: Deliver complete, production-ready test code
- Coverage: Aim for comprehensive coverage of user scenarios rather than 100% code coverage
- Performance: Ensure tests run efficiently and don't cause unnecessary re-renders

## VERIFICATION PHASE

Please provide:
1. A summary of your analysis of the feature
2. The complete test implementation with explanatory comments
3. An execution report for the tests
4. Any issues encountered and their solutions
5. Recommendations for improving testability (if applicable)
