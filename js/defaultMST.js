g=new graph("ug");

g.createVertex("a",300,300);
g.createVertex("b",350,500);
g.createVertex("c",700,500);
g.createVertex("d",100,700);
// g.createVertex("e",500,700);

g.createEdge(0,1,5);
g.createEdge(1,2,1);
g.createEdge(2,3,4);
g.createEdge(3,0,10);
// g.createEdge(3,1,6);
// g.createEdge(3,4,2);
console.log(g);

var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [ // list of graph elements to start with

  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': 'grey',
        'label': 'data(weight)',
        'curve-style' : 'bezier'
      }
    },
    {
      selector: '.visited',
      style: {
        'background-color': 'red'

      }
    },
    {
      selector: '.backtracking',
      style: {
        'background-color': 'yellow'

      }
    },
    {
      selector: '.evisited',
      style: {
        'width': 3,
        'line-color': 'green',
        'curve-style' : 'bezier'
      }
    },
    {
      selector: '.eAlreadyvisited',
      style: {
        'width': 3,
        'line-color': 'red',
        'curve-style' : 'bezier'

      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }

});

var eles = cy.add(g.drawGraph());

cy.panningEnabled( false );
cy.userPanningEnabled( false );
