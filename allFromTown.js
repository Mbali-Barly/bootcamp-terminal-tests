export default function allFromTown(regNum, idNum) {
    const mpho = []
    const tsholo = regNum.split(',');
    for (var i=0;i<tsholo.length;i++) { 
    //console.log(tsholo)
    const mbali = tsholo[i].trim();  
     if (mbali.startsWith(idNum)) {
       mpho.push(mbali);
     } 
    }
    return mpho
  }