// eslint-disable-next-line @typescript-eslint/ban-types
export const format = (args: IArguments, match: String) => {
  let result = match as string;
  // eslint-disable-next-line no-plusplus
  for (let idx = 0; idx < args.length; idx++) {
    const pattern = new RegExp(`\\{${idx}\\}`, 'gm');
    if (args[idx]) {
      const value = args[idx].toString();
      result = result.replace(pattern, value);
    }
  }
  return result;
};
