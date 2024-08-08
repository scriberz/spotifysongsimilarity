import { Graph } from './components/Graph';
import { Node } from './components/Node';
import { loadSongs } from './services/dataLoader';
import { cosineSimilarity } from './services/similarityCalculator';

const graph = new Graph('songCanvas');
const nodes: Node[] = [];
const fileInput = document.getElementById('fileInput') as HTMLInputElement;

fileInput.addEventListener('change', (event) => {
  const file = (event.target as HTMLInputElement).files![0];
  loadSongs(file).then((songs) => {
    // Пример обработки данных и отрисовки
    songs.forEach((song, index) => {
      const node = new Node(100 + index * 50, 100 + index * 50, 10, song.title);
      nodes.push(node);
      graph.drawNode(node.x, node.y, node.size, node.label);
    });
    // Пример отрисовки связей (сходство между песнями)
    if (nodes.length > 1) {
      graph.drawLink(nodes[0].x, nodes[0].y, nodes[1].x, nodes[1].y);
    }
  });
});
