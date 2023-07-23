export const formatString = (format: string, ...args: string[]): string => {
  return format.replace(/{(\d+)}/g, (match: string, index: string) => {
    const argIndex = parseInt(index, 10);
    return args[argIndex] !== undefined ? args[argIndex].toString() : match;
  });
};
