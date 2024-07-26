let Year=2100
// 4 divide aagumn, 100 divide aaga koodathu aana 400 divide aaganum
if((Year%4==0 && Year%100!=0) || Year%400==0) {
    console.log(Year,"is a leap year")
}
else{
    console.log(Year,"is not a leap year")
}