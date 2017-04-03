var post = document.getElementById("boton");
var comentario = document.getElementById("comentario");
var textarea = document.getElementById("textarea");
function postear(){
    var div = document.createElement("div");
    div.setAttribute("id","coment");
    comentario.appendChild(div);
    div.innerHTML = textarea.value;
    textarea.value = "";
  }
window.addEventListener("load",function(){
      boton.addEventListener("click", function(){
            if (textarea.value.trim().length==0){
                alert("The field is empty");
                textarea.focus();
            }
            else {
                postear();
                textarea.focus();
            }

      });
});
