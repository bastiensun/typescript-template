export function add(...arguments_: number[]): number {
  return arguments_.reduce((a, b) => a + b, 0);
}

// Stryker disable all
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;

  it("add", () => {
    expect(add()).toBe(0);
    expect(add(1)).toBe(1);
    expect(add(1, 2, 3)).toBe(6);
  });
}
