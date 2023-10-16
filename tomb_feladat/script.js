let t = [];

function getInputValue()
{
    let v = document.getElementById("text").value;
    let tartalom = " ";
    t = v.split(" ");
    
    for(let i = 0; i < t.length; i++)
    {
        tartalom += `<div class = "itemek">
        ${t[i]}
        </div>` 
    }
    
    for(let i=0; i < t.length; i++)
    {
        document.getElementById("elements").innerHTML = tartalom;
    }
    
    var inputElement = document.getElementById("text");
    
    if (inputElement) {
    inputElement.value = " ";
    }


    
}
