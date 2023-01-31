let target1 = document.getElementById('targetObject1')
// let target2 = document.getElementById('targetObject2')
let target3 = document.getElementById('targetObject3')

function update(){
    let select = document.getElementById('selection').value
    let input = document.getElementById('inputValue').value

    if (select == "latar") {
        target1.style.backgroundColor = input
    }else if(select == "Wtext"){
        target3.style.color = input
    }else if(select == "Utext"){
        target3.style.fontSize = `${input}px`
    }else if(select == "font"){
        target3.style.fontFamily = input
    }else if(select == "Lkontent"){
        target1.style.width = `${input}px`
        target3.classList.add('text-center')
    }else if(select == "Tkontent"){
        target1.style.height = `${input}px`
        target3.classList.add('items-center')
    }
}