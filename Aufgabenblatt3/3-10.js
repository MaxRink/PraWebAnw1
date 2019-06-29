function getOptions() {
    let listlen = document.getElementById("mySelect").length;
    var x = document.getElementById("mySelect");
    var txt = "\n " ;
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + "\n" + x.options[i].text;
    }
    alert(listlen + txt);
}