// const itemButtons = document.querySelectorAll(".accordion-item .accordion-header i")
// // const minusButtons = document.querySelectorAll(".accordion-item .accordion-header i:last-child")
// const itemContents = document.querySelectorAll(".accordion-item .accordion-content")
// const accordionHeader = document.querySelector(".accordion-item .accordion-header p")


// itemButtons.forEach(itemButton => {
//     const minusButton = itemButton.nextElementSibling
//     itemButton.addEventListener("click", function () {
//         const item = itemButton.parentNode.parentNode
//         const accordionItems = Array.from(item.parentNode.children)

//         item.classList.toggle("active")

        
//         // if(minusButton.classList.contains("d-none")){
//         //     minusButton.classList.remove("d-none")
//         //     itemButton.classList.add("d-none")
//         // }


//         accordionItems.forEach(accordionItem => {
//             if(item.classList.contains("active")){
//                 console.log(accordionText);
//                 accordionHeader.style.color = "#099a71"
//             }
//             else{
//                 accordionText.style.color = "purple"

//             }
//             if (!accordionItem.classList.contains("active")) {
//                 // console.log(accordionItem);
//                 accordionText.style.display = "none"
//             }
//             else{
//                 accordionText.style.display = "block"
//                 accordionHeader.style.color = "#099a71"
//                 //     minusButton.classList.remove("d-none")
//                 // itemButton.classList.add("d-none")
//                 // minusButton.classList.remove("d-none")
//                 // itemButton.classList.add("d-none")
                
                
//             }
//             accordionItem.classList.remove("active")
//             // accordionHeader.style.color = "#212529"
            
//         })

        
//     })
// })

const accordionItems = document.querySelectorAll(".accordion-item")

accordionItems.forEach((accordionItem,index) => {
    let header = accordionItem.querySelector(".accordion-header")
    header.addEventListener("click", function(){
        accordionItem.classList.toggle("open")

        let description = accordionItem.querySelector(".accordion-content")
        if(accordionItem.classList.contains("open")){
            description.style.display = "block"
            header.querySelector("i").classList.replace("fa-plus", "fa-minus")
            header.style.color = "green"
        }
        else{
            description.style.display = "none"
            header.querySelector("i").classList.replace("fa-minus", "fa-plus")

        }
        removeOpen(index)
    })
})

function removeOpen(index1){
    accordionItems.forEach((item2, index2) =>{
        if(index1 !== index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".accordion-content")
            des.style.display = "none"
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus")
        }
    })
}