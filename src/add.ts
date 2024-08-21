export function add(...arguments_: number[]): number {
  const initialValue = 0
  return arguments_.reduce((a, b) => a + b, initialValue)
}

// Stryker disable all
if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test("add", () => {
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    expect(add()).toStrictEqual(0)
    expect(add(1)).toStrictEqual(1)
    expect(add(1, 2, 3)).toStrictEqual(6)
    /* eslint-enable @typescript-eslint/no-magic-numbers */
  })
}
