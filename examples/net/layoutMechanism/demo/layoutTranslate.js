import G6 from '@antv/g6';

const tipDiv = document.createElement('div');
tipDiv.innerHTML = 'Random Layout';
const graphDiv = document.getElementById('container');
graphDiv.appendChild(tipDiv);
const width = graphDiv.scrollWidth;
const height = (graphDiv.scrollHeight || 500) - 20;
const graph = new G6.Graph({
  container: 'container',
  width,
  height,
  layout: {
    type: 'random',
  },
  modes: {
    default: ['drag-node'],
  },
  animate: true
});

fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
  .then((res) => res.json())
  .then((data) => {

    graph.data(data);
    graph.render();
    setTimeout(() => {
      tipDiv.innerHTML = 'Circular Layout';
      graph.updateLayout({
        type: 'circular',
        radius: 200
      });
    }, 3000);
    setTimeout(() => {
      tipDiv.innerHTML = 'Grid Layout';
      graph.updateLayout({
        type: 'grid'
      });
    }, 6000);
    setTimeout(() => {
      tipDiv.innerHTML = 'Force Layout';
      graph.updateLayout({
        type: 'force',
        preventOverlap: true,
        nodeSize: 20,
      });
    }, 9000);
    setTimeout(() => {
      tipDiv.innerHTML = 'Radial Layout';
      graph.updateLayout({
        type: 'radial',
        preventOverlap: true,
        nodeSize: 15
      });
    }, 12000);
    setTimeout(() => {
      tipDiv.innerHTML = 'Concentric Layout';
      graph.updateLayout({
        type: 'concentric',
        minNodeSpacing: 30
      });
    }, 15000);
    setTimeout(() => {
      tipDiv.innerHTML = 'MDS Layout';
      graph.updateLayout({
        type: 'mds',
        linkDistance: 100,
      });
    }, 18000);
  });