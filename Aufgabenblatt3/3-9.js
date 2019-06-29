function getFormvalue() {

    var x = document.getElementById("form1");
    var text = "";
    var i;
    for (i = 1; i < x.length; i++) {
        text += x.elements[i - 1].value + " ";
    }
    alert(text);
}