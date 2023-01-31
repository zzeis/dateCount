window.addEventListener('load', function() {
    const now2 = new Date(); // current date
  
    const specialDay2 = new Date("2022-03-09"); //special date
  
    const countDiff2 = Math.abs(now2.getTime() - specialDay2.getTime());
  
  
  
    var 
      currentDay = now2.getDate(),
      specialD = specialDay2.getDate() + 1;
  
    if (currentDay === specialD) {
        document.getElementById("specialDay").classList.remove("close");
    }

    
})