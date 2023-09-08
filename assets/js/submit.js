
var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("button").click();
    }
})  
function handle_form_submission()
{
  window.location.replace('kontakt-oss.html');
  alert('Skjemaet er sendt!');
    return false;
}