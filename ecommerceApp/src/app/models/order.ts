export interface Order{
    id: number,
    totalQuantity: number,
    totalPrice: number,
    dateCreated: Date,
    dateUpdated: Date
}


/* 
Need to check to see if the  creation and update dates need to be the 
Date type or a String type  
*/