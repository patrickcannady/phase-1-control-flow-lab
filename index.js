function scuberGreetingForFeet(someNumber){
  if(someNumber <= '400'){
    return 'This one is on me!';
  } else if(someNumber > '2000' && someNumber <= '2500'){
      return "I will gladly take your thirty bucks."
  } else {
     (someNumber >= '2501');
    return "No can do.";
  }}
  

function ternaryCheckCity(destination){
  return destination === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(amount){
  switch(amount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'

  }
}