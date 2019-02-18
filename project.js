



function generateId() {
  var dataAzi = new Date();
  var time = dataAzi.getFullYear()+"-"+(dataAzi.getMonth()+1)+"-"+dataAzi.getDate();
  document.querySelector('.nameBy').innerHTML = time;
  document.querySelector('.name').innerHTML = time;
  
  //var numOne = 10000;
  //var numTwo = 1000;
  document.querySelector('.idname').innerHTML ="#" +Math.floor(Math.random()*10000);
  
  var nuMe = document.querySelector('.nume').value;
  document.querySelector('.nume100').innerHTML = nuMe;
}
  
  
  
  
  
  
     
 
