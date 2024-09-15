import { describe, it, expect } from "vitest";
import { number } from "minifaker";

import { PrettyCount } from "~/prettyCount";

describe("PrettyCount", () => {
  const { formatNumber } = PrettyCount();

  it("should return a pretty number for standard scale", () => {
    const num = 1000000; // 1 million
    const prettyNum = formatNumber(num);
    expect(prettyNum).toBe("1 million"); // Adjust based on your separator
  });

  it("should return a pretty number for custom scale", () => {
    const num = 1000000000; // 1 billion
    const prettyNum = formatNumber(num, { scale: "standard" });
    expect(prettyNum).toBe("1 billion"); // Adjust based on your separator
  });

  it("should handle negative numbers", () => {
    const num = -5000; // -5 thousand
    const prettyNum = formatNumber(num);
    expect(prettyNum).toBe("-5 thousand"); // Adjust based on your separator
  });

  it("should format with custom prefix and suffix", () => {
    const num = 2500; // 2.5 thousand
    const prettyNum = formatNumber(num, { prefix: "$", suffix: " USD", showFullSymbol: false });
    expect(prettyNum).toBe("$2.5 K USD".replace(/ /g, '\u00A0')); // Adjust based on your separator
  });

  it("should floor numbers correctly", () => {
    const num = 1234.5678; // 1.2345678 thousand
    const prettyNum = formatNumber(num, { roundingMethod: "floor"});
    expect(prettyNum).toBe("1 thousand"); // Adjust based on your separator
  });

  it("should floor numbers correctly", () => {
    const num = 1634.5678; // 1.2345678 thousand
    const prettyNum = formatNumber(num, { roundingMethod: "ceil"});
    expect(prettyNum).toBe("2 thousand"); // Adjust based on your separator
  });

  it("should round numbers correctly", () => {
    const num = 1434.5678; // 1.2345678 thousand
    const prettyNum = formatNumber(num, { roundingMethod: "round"});
    expect(prettyNum).toBe("1 thousand"); // Adjust based on your separator
  });
});