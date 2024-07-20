//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}



 // console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "aniket"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     console.log(website);

     two()

}

// one()

if (true) {
    const username = "aniket"
    if (username === "aniket") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website);
}