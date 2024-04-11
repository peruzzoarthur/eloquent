const count_by = <T, U>(
  items: T[] | string,
  groupName: (item: T | string) => U | string
) => {
  let counts: { name: U | string; count: number }[] = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name === name);

    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
};

const character_script = (code: number): Script | null => {
  for (let script of scripts) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script;
  }
  return null;
};

// const dominantDirection
