export function dailyTemperatures(temperatures: number[]): number[] {
  const stack = [];
  const results = new Array(temperatures.length).fill(0);
  for (let day = 0; day < temperatures.length; day++) {
    while (
      stack.length > 0 &&
      temperatures[day] > temperatures[stack[stack.length - 1]]
    ) {
      const latest = stack.pop()!;
      results[latest] = day - latest;
    }
    stack.push(day);
  }

  return results;
}
