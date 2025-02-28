export function splitString(input) {
  const words = input.trim().split(/\s+/);
  if (words.length < 2) {
    return [input.trim(), ""]; // If less than 2 words, return as is
  }
  const firstPart = words.slice(0, 2).join(" ");
  const secondPart = words.slice(2).join(" ");
  return { firstPart, secondPart };
}
