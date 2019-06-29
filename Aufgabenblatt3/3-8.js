var library = [{
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
}, {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
}, {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
}];

function mainfunction() {

    var txt = "\n " ;
    var i = library.length;
    for (i = 0; i < library.length; i++) {
        txt = txt + "\n" + library.options[i][0].value;
    }

}