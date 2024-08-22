var arr = [
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1536344590992-7fd60353f543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1467632499275-7a693a761056?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHwxfDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwxfDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  },
];

var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
     <img id ="${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
   },3000)

});
