function numberWrite(value, event)
{
    if(event.key === 'Enter'){

        event.preventDefault();
        document.getElementById("concat_num").innerHTML += value;

    }
}
