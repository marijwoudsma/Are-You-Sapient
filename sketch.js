let listOfLists = [ zeroList, firstList, secondList,thirdList]

let counters = [0,0,0,0,0,0,0,0,0,0] //ignore first

function nextImage(pic) {
  
  img = document.getElementById("img-" + pic);
  
  counters[pic]++ // increase counter of pic by one
  
  el = counters[pic]
 
  img.src = listOfLists[pic][el]
  
  console.log("image clicked: " + pic);
  console.log(counters)
}
