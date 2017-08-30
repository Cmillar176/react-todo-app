import "jest-enzyme";
import * as immutableMatchers from "jest-immutable-matchers";

beforeEach(() => {
  jasmine.addMatchers(immutableMatchers);
});
