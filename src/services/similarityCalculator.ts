export const cosineSimilarity = (vec1: number[], vec2: number[]): number => {
    const dotProduct = vec1.reduce((acc, val, i) => acc + val * vec2[i], 0);
    const magnitude1 = Math.sqrt(vec1.reduce((acc, val) => acc + val * val, 0));
    const magnitude2 = Math.sqrt(vec2.reduce((acc, val) => acc + val * val, 0));
    return dotProduct / (magnitude1 * magnitude2);
  };
  