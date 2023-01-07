export const cashFormat = (x: any) => {
  if(x){ 
    return "₦"+Number(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } 
  return "₦0"
};