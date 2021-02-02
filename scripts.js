document.getElementById("num").addEventListener("keyup", function(event){

    alert("Func");

    if(event.keyCode == 13){

        document.getElementById("concat_num").innerHTML = document.getElementById("num").innerHTML;
        alert("Enter");
    }

});