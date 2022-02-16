const ulDOM = document.querySelector("#list")
const textDOM=document.querySelector("#task")

function newElement(){
    if(textDOM.value.trim('').length != 0)
    {
        let liDOM=document.createElement("li")
        let textLiDOM=document.createTextNode(textDOM.value)
        let iconDOM=document.createElement("i")
        iconDOM.classList.add("bi","bi-x-lg","close")
        iconDOM.addEventListener("click",sutDown)
        liDOM.addEventListener("click",taskOk)
        liDOM.append(textLiDOM)
        liDOM.append(iconDOM)
        ulDOM.prepend(liDOM)
        $('#addToast').toast('show')        
    }else{
        $('#errorToast').toast('show') 
    }
    textDOM.value=""  
}
function sutDown(){
        this.parentElement.remove()
        $('#removeToast').toast('show')
}
function taskOk(){    
    this.classList.toggle("bg-success")
}