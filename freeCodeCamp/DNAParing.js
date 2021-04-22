function pairElement(str) {
    let arr = str.split('');
    arr = arr.map(e =>{
      switch(e) {
        case 'G': return  ['G', 'C'];
      
        case 'C': return ['C', 'G'];
      
        case 'A':  return ['A', 'T'];
      
        case 'T':  return ['T', 'A'];
        }
    })
    return arr;
  }
  

 /*  function pairElement(str) {
    
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    
    var arr = str.split("");
    
    return arr.map(x => [x, pairs[x]]);
  } */
  

  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));

