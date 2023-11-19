function countHours(year, holidays) {
    let counter = 0;
    const sfsf = []
    const newYear = year.toString();
    holidays.forEach((element)=>{
      const division = element.split('/');
      const date = new Date(`${newYear}-${division[0]}-${division[1]}T03:15:00`);
      // console.log(date);
      console.log(date.getDay());
      if(date.getDay() != 6 && date.getDay() != 0){
        counter++;
      }else{
        console.log(date)
      }  
      
    })
    return counter*2;
  }
  // console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']));
  // funciona con date en 6 
  // console.log(countHours(2023, ['01/06', '04/01', '12/25']));
  // console.log(countHours(2022, ['01/06', '04/01', '12/25']));


  // Values 
  function distributeGifts(packOfGifts =  ["book", "doll", "ball", "pedro"], reindeers = ["dasher", "dancer"]) {
    // reinders = a reinders.length *2;
    let totalGift = 0;
    let totalCapacity = 0;
    for(let gift of packOfGifts){
      totalGift += gift.length;
    }
    for(let reinder of reindeers){
      totalCapacity += (reinder.length *  2);
    }
    
    return Math.floor(totalCapacity / totalGift)
   }
  //  console.log(distributeGifts( ["book", "doll", "ball"]));

  // ordernar caja 
  // interface box{
  //   l: number,
  //   w: number,
  //   h: number
  // }
  function fitsInOneBox(boxes) {
    let itsPosible = false;
    const newBoxes = [...boxes].sort((a, b)=>{
      if(a.l < b.l){
        return a.l - b.l
      }else if(a.h < b.h){
        return a.h - b.h
      }else{
        return a.w - b.w
      }
    });
    for(let index in newBoxes){
          if(newBoxes[index].l < newBoxes[parseInt(index) +  1].l){
            return itsPosible 
          }else{
            return itsPosible = true;
          }
    }
    return itsPosible;
  }
  const arr = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
console.log(fitsInOneBox(arr));