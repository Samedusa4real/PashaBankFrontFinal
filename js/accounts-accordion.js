const itemButtons = document.querySelectorAll(".accordion-item .accordion-header i")
// const minusButtons = document.querySelectorAll(".accordion-item .accordion-header i:last-child")
const itemContents = document.querySelectorAll(".accordion-item .accordion-content")
const accordionHeader = document.querySelector(".accordion-item .accordion-header p")


itemButtons.forEach(itemButton => {
    const minusButton = itemButton.nextElementSibling
    itemButton.addEventListener("click", function () {
        const item = itemButton.parentNode.parentNode
        const accordionItems = Array.from(item.parentNode.children)

        item.classList.toggle("active")

        
        // if(minusButton.classList.contains("d-none")){
        //     minusButton.classList.remove("d-none")
        //     itemButton.classList.add("d-none")
        // }


        accordionItems.forEach(accordionItem => {
            if(item.classList.contains("active")){
                console.log(accordionText);
                accordionHeader.style.color = "#099a71"
            }
            else{
                accordionText.style.color = "purple"

            }
            if (!accordionItem.classList.contains("active")) {
                // console.log(accordionItem);
                accordionText.style.display = "none"
            }
            else{
                accordionText.style.display = "block"
                accordionHeader.style.color = "#099a71"
                //     minusButton.classList.remove("d-none")
                // itemButton.classList.add("d-none")
                // minusButton.classList.remove("d-none")
                // itemButton.classList.add("d-none")
                
                
            }
            accordionItem.classList.remove("active")
            // accordionHeader.style.color = "#212529"
            
        })

        
    })
})