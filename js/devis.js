//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) 
{
    dropdown[i].addEventListener("click", function() 
    {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") 
        {
            dropdownContent.style.display = "none";
        } 
        else
        {
            dropdownContent.style.display = "block";
        }
    });
}



// Add active class to the current button (highlight it)
var header = document.getElementById("choix");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) 
{
    btns[i].addEventListener("click", function() 
    {
        var current = document.getElementsByClassName("allume");
        current[0].className = current[0].className.replace(" allume", "");
        this.className += " allume";
    });
}
