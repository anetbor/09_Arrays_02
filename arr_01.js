/*********   Theorie **********/

//push
// let arr = [];
// output (arr);
// arr.push("Ich")
// output(arr)
// arr.push("bin")
// output(arr)
// arr.push("Max Mütze")
// output(arr)

// //pop
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);


/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];

output(getHTML());
function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        // htmlStr +=  "<" + tags[i] + "> ";  // 1.Variante
        // htmlStr +=  "</" + tags[i] + "> ";  
        // htmlStr += controls[0] + tags[i] + controls[2]; //2.Variante
        // htmlStr += controls[1] + tags[i] + controls[2];
         if ( isOpenElement(tags[i])) { 
            htmlStr += getElement(tags [i],"open");
        } else {
            htmlStr += getElement(tags [i],"close");

        }
        // htmlStr += getElement(tags [i],"open");
        // htmlStr += getElement(tags [i],"close");

    }
    return htmlStr;
}

function isOpenElement(tag) {
    let cond = (tag != stack[stack.length-1])  // tag liegt oben!

   

    if (cond) {  // open

        stack.push(tag);

        output(stack);

        return true;

    } else {  // close

        stack.pop();

        output(stack);

        return false;

    }
}
// output(getElement(tags[1], "open"));
// output(getElement(tags[1], "close"));
// output(getElement(tags[1]));
function getElement(tag,op) {
    switch (op) {
        case "open":
            return controls[0] + tag + controls[2];
    
        case"close":
            return controls[1] + tag + controls[2];
        default:
            return"#!?";
    }

    htmlStr += controls[0] + tags[i] + controls[2]; //2.Variante
    htmlStr += controls[1] + tags[i] + controls[2];

    // return getElement;
}


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
