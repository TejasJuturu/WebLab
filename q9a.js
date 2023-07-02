function findleapyear()
{
    let startyear=parseInt(prompt("Enter the starting year in format yyyy"));
    let endyear=parseInt(prompt("Enter the end year in format yyyy"));
    let leapyears=[];
    for(let i=startyear;i<=endyear;i++)
    {
        if(i%4===0 && (i%100!==0 || i%400===0))
        {
            leapyears.push(i)
        }

    }
    alert("Leapyears in the range of the given years are "+leapyears);
    
}