function capitalize()
{
    let str = prompt("Enter a string ");
    let splitwords= str.split(' ')
    for(i=0;i<splitwords.length;i++)
    {
        var word=splitwords[i];
        var capitalized=word.charAt(0).toUpperCase()+word.slice(1)
        splitwords[i]=capitalized;    
    }
    let capstr=splitwords.join(' ');
    alert("Resultant string is "+ capstr)
}