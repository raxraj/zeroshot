import { describe, it, expect } from "vitest";
import { formatDate } from "../../template/src/utils/formatDate";

// Objective success criterion for the sample_task.
// These tests FAIL on the baseline and MUST pass after the assistant's fix.
describe("formatDate (harness — objective success criterion)", () => {
  it("formats a date string as 'Mon DD, YYYY'", () => {
    expect(formatDate("2026-03-12")).toBe("Mar 12, 2026");
  });

  it("handles single-digit days", () => {
    expect(formatDate("2026-01-05")).toBe("Jan 5, 2026");
  });

  it("handles end-of-year dates", () => {
    expect(formatDate("2025-12-31")).toBe("Dec 31, 2025");
  });

  it("handles start-of-year dates", () => {
    expect(formatDate("2024-01-01")).toBe("Jan 1, 2024");
  });
});
