g=new graph("ug");



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

function addVertex(x,y){
  var id= g.vertices.length;
  g.createVertex("vertex",x,y);
  var node = {};
  node.group = "nodes";
  var data = {};
  data.id =id;
  var position = {};
  position.x = x;
  position.y = y;
  node.data = data;
  node.position = position;

  console.log(node);
  cy.add(node);
}

function addEdge(source,target,weight){
  console.log("Addedge",source,target);
  g.createEdge(source,target,weight);
  var edge = {};
  edge.group = "edges";
  var data = {};
  data.id = "e"+""+source+","+target;
  data.weight = weight;
  data.source = source;
  data.target = target;
  edge.data = data;
  cy.add(edge);
}
$("#cy").dblclick(function(e){

    var offset = $(this).offset();
    var x = (e.pageX - offset.left);
    var y = (e.pageY - offset.top);
    console.log(x,y);
    addVertex(x,y);
});

parent = null;
child = null;

cy.on('tap', 'node', function(evt){
  var node = evt.target;
  if(parent == null){
    parent = node;
  }
  else if(child == null){
    child = node;
    addEdge(parent.id(),child.id(),1);
    parent = null;
    child = null
  }
  console.log( 'tapped ' + node.id() );
});
