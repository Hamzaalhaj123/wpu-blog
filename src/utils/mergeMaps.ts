export default function mergeMaps<K, V>(...maps: Map<K, V>[]) {
  const mergedMap = new Map<K, V>();

  maps.forEach((map) => {
    map.forEach((value, key) => {
      mergedMap.set(key, value);
    });
  });

  return mergedMap;
}
