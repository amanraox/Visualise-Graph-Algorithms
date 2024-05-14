function prim(g,node){
  g.vertices.forEach(vertex => { if(vertex.id==node){s = vertex;}});

  var mst = new graph();;
  var explored = new Set();
  var edgeQueue = new PriorityQueue();
  g.vertices[s.id].visited=true;
  cy.getElementById(s.id).addClass('visited');

  timer=1;

  while(explored.size != g.vertices.length ){

  console.log("ADDING "+s.id);
  if(explored.has(s)){
    break;
  }
  explored.add(s);

  mst.vertices.push(s);


  g.edges.forEach(edge => { if(edge.destination.id == s.id || edge.source.id == s.id){
    console.log("ENQUEUE - >");
    console.log(edge);
    edgeQueue.enqueue(edge,edge.weight);}});
  // ^^ add egdes from s to priorityQueue
  var minEdge = null;


  while(!edgeQueue.isEmpty()){

    minEdge = edgeQueue.dequeue();
    minEdge=minEdge.element;
    console.log("DEQUEUE");
    console.log(minEdge);
    console.log(s.id);
    if(minEdge.destination.id == s.id){
      console.log("inside")
      if(!explored.has(g.vertices[minEdge.source.id])){
        //mst.vertices.push(g.vertices[minEdge.from]);
        s=g.vertices[minEdge.source.id];
        mst.edges.push(minEdge);
        setTimeout(colorEdge,timer*1000,minEdge);
        timer=timer+2;
        setTimeout(colorVertex,timer*1000,s);
        timer=timer+2;

        break;
      }
    }else if(minEdge.source.id==s.id){
      if(!explored.has(g.vertices[minEdge.destination.id])){
        //mst.vertices.push(g.vertices[minEdge.to]);
        s=g.vertices[minEdge.destination.id];
        mst.edges.push(minEdge);
        setTimeout(colorEdge,timer*1000,minEdge);
        timer=timer+2;
        setTimeout(colorVertex,timer*1000,s);
        timer=timer+2;

        break;
      }
    }else{
      //This is a case where vertex is in cut but not selected.
      if(!explored.has(g.vertices[minEdge.destination.id])){
        s=g.vertices[minEdge.destination.id];
        mst.edges.push(minEdge);
        setTimeout(colorEdge,timer*1000,minEdge);
        timer=timer+2;
        setTimeout(colorVertex,timer*1000,s);
        timer=timer+2;
        break;
      }else if(!explored.has(g.vertices[minEdge.source.id])){
        s=g.vertices[minEdge.source.id];
        mst.edges.push(minEdge);
        setTimeout(colorEdge,timer*1000,minEdge);
        timer=timer+2;
        setTimeout(colorVertex,timer*1000,s);
        timer=timer+2;
        break;
      }else{
        console.log("HEY RAAM, Yeh toh cut mei hai");
      }
    }
  }


}
setTimeout(load_page,timer*1000);
return mst;
}

function colorEdge(edge){
  cy.getElementById("e"+""+edge.source.id+","+edge.destination.id).addClass('evisited');
}

function colorVertex(v){
  g.vertices[v.id].visited=true;
  cy.getElementById(v.id).addClass('visited');
}

function set(){
  x = document.getElementsByName('textbox1')[0].value;
  if(x < g.vertices.length){
    prim(g,x);
  }
  else{
    window.alert("Please Enter a valid node!");
  }
}

function load_page(){
  window.alert("Refresh to start again or go back home!");
}
