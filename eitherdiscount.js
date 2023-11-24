// get either of the below discounts
// customers who have purchased more than 4 products gets a 10% discount.
// customers who have spent more than $200 gets a $25 discount


let customers = [
    {
        id:1,
        name: 'Alice',
        totalAmountSpent: 150,
        totalProductsPurchased: 5
    },
    {
        id:2,
        name: 'Bob',
        totalAmountSpent: 100,
        totalProductsPurchased: 3
    },
    {
        id:3,
        name: 'Charlie',
        totalAmountSpent: 300,
        totalProductsPurchased: 8
    }
];

const getDiscount = (customers)=>{
    let moreThan4 = 4;
    let tenPercentDiscount = 0.1;
    let moreThan200 = 200;
    let gets25Discount = 25;
    return customers.map((customer)=>{
        let discount = 0;
        if(customer.totalProductsPurchased > moreThan4){
            discount=tenPercentDiscount * customer.totalAmountSpent
        }if(customer.totalAmountSpent > moreThan200){
            discount=gets25Discount
        } return {...customer, discountGiven: discount}
    })
}
console.log(getDiscount(customers));

//or

const getDiscounts = (customers)=>{
    let moreThan4 = 4;
    let tenPercentDiscount = 0.1;
    let moreThan200 = 200;
    let gets25Discount = 25;
    return customers.map((customer)=>{
        let discount = 0;
        if(customer.totalProductsPurchased > moreThan4){
            discount=tenPercentDiscount * customer.totalAmountSpent
        }else if(customer.totalAmountSpent > moreThan200){
            discount=gets25Discount
        } return {...customer, discountGiven: discount}
    })
}
console.log(getDiscounts(customers));