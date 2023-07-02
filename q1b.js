let func = ()=>
{
    let num;
    num=prompt("Enter a number")
    let splitnum = num.split('');
    reversenum = splitnum.reverse().join('')
    let result =parseFloat(reversenum);
    alert(reversenum);
}