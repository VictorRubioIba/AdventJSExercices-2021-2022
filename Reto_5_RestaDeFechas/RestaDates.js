 
 
 function daysToXmas(date) {

    const date2 = new Date('Dec 25, 2021')

    const MIL_TO_DAYS=3600*1000*24
    
    let numDays = (date2-date)/MIL_TO_DAYS;

        return Math.ceil(numDays);
  }
const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5
const date = new Date('Dec 25, 2021')
console.log(daysToXmas(date)) // 0
const date11 = new Date('Dec 26, 2021')
console.log(daysToXmas(date11)) // -1
const date21 = new Date('Dec 31, 2021')
console.log(daysToXmas(date21))// -6
const date31 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date31))// -7
const date41 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date41)) // -7