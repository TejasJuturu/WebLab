function countVowels() 
{
    str=prompt("Enter a string")
    const LStr = str.toLowerCase();
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let char;
    for (char of LStr) 
    {
      if (vowels.includes(char)) 
      {
        vowelCount++;
      }
    }
    alert("Number of vowels in the string is "+vowelCount)
}
