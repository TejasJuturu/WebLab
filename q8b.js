function validateUSN()
{
    let usn=prompt("Enter USN")
    let pattern = /1[Nn][Tt][0-9]{2}[A-z]{2}[0-9]{3}/g
    if(pattern.test(usn))
    {
        alert("Its a valid USN")
    }
    else
    {
        alert("Its not a valid USN")
    }
}