function mainfunction(fuctionname, a) {
    alert(fuctionname.toString());


        var isArray = Array.isArray(a);
        alert("array: " + isArray);  
    
}
function echofunction(a) {
    var fuctionname = mainfunction;
    mainfunction(fuctionname, a);
}