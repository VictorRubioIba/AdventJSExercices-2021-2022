function countHours(year, holidays) {
    let totalDays =0;

    holidays.forEach(element => {
        const newYear = year+"/"+element;
        const newDate = new Date (newYear.split("/").join("-"))
        if(newDate.getDay()!=0 && newDate.getDay()!=6){
        totalDays += 1
        }
         });
        
         
    return totalDays*2

  
  }
  
  const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año