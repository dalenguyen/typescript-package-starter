import { helloWorld } from "../src";
// import { expect, describe, it } from "vitest";

describe("helloWorld", () => {
  it("Should return default greetings", () => {
    expect(helloWorld()).equals("Howdy! World");
  });

  it("Should return with custom name", () => {
    expect(helloWorld("Dale")).equals("Howdy! Dale");
  });
});
