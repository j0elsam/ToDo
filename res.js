const button = document.getElementById("myButton");
button.addEventListener("click", function() 
{
    const event= document.getElementById("field");
    const content = event.value.trim();
    
    if(content == ""){
        return alert("Enter a task")
    }

    const li = document.createElement("li");
    li.classList.add("listgroup")
    
    const span = document.createElement("span")
    span.innerText=content
    li.appendChild(span)

    const complete = document.createElement("i")
    complete.classList.add("bi" , "bi-check2" , "text-success")
    complete.style.scale = "110%"
    complete.style.marginLeft = "600px"
    complete.style.paddingRight = "0px"
    li.appendChild(complete)

    let flag = true

    complete.addEventListener("click",function()

    {   
        flag = !flag

        complete.style.scale=flag ? "110%" : "90%"
        span.classList.toggle("completed")
    })

    const deleted = document.createElement("i")
    deleted.classList.add("bi" , "bi-trash" , "text-danger")
    deleted.style.scale = "100%"
    deleted.style.paddingRight ="20px"
    deleted.style.paddingLeft = "10px"
    li.appendChild(deleted)

    deleted.addEventListener("click",function()
    {

        li.remove()
    })

    document.getElementById("list").appendChild(li)
    event.value =""
});