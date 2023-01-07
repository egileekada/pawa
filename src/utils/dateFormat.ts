import { format } from 'date-fns';

export const dateFormat = (x: any) => {

    const format = new Date(x)
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]; 

    return months[format.getMonth()]+" "+format.getDay()+", "+format.getFullYear()
};

export const dateFullFormat = (x: any) => {
 
  
  return  format(
            new Date(x),
            'MMM do, yyyy H:mma'
        )
};

export const dateFullFormatSecond = (x: any) => {

  const format = new Date(x)
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];  

  const minute =(item: any)=> {  
    if(item < 10){ 
      return "0"+item
    } 
    return item
  }

  const hour =(item: any)=> {  
    if(item > 12){
      let newvalue = item - 12 
      return minute(newvalue) 
    }   
    return minute(item)
  }

  const time =(item: any)=> {  
    if(item > 12){ 
      return "PM"
    }   
    return "AM"
  }
  // 30/08/2022, 01:01 AM
  return minute(format.getUTCDay())+"/"+minute(format.getMonth()+1)+"/"+minute(format.getFullYear())+" "+hour(format.getHours())+":"+minute(format.getUTCMinutes())+" "+time(format.getHours())
};