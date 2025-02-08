export default function buildTree<K>(array: K[], idField: keyof K, parentIdField: keyof K) {
  const nodeMap = new Map<K[typeof idField], K & { children: K[] }>();
  const tree: (K & { children: K[] })[] = [];

  array.forEach((item) => {
    nodeMap.set(item[idField], { ...item, children: [] });
  });

  array.forEach((item) => {
    const node = nodeMap.get(item[idField])!;
    if (node[parentIdField]) {
      nodeMap.get(node[parentIdField])!.children?.push(node);
    } else {
      tree.push(node);
    }
  });

  return tree;
}
