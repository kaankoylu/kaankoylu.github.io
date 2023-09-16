const profile_button = document.getElementById("profile_button");
const dashboard_button = document.getElementById("dashboard_button");
const faq_button = document.getElementById("faq_button");
const blog_button = document.getElementById("blog_button");

profile_button.addEventListener("click", () => {
    
    let profile_card = document.getElementById("profile_card");
            profile_card.classList.toggle("active");
                if (profile_card.classList.contains("active")) {
                    console.log("profile_card active");
                    showHidden(profile_card);
                    hideAside(profile_card);
                } else {
                    hideElement(profile_card);
                    hideAside(profile_card);
                }
});
dashboard_button.addEventListener("click", () => {
    let dashboard_card = document.getElementById("dashboard_card");
            dashboard_card.classList.toggle("active");
                if(dashboard_card.classList.contains("active")){
                    console.log("dashboard_card active");
                    showHidden(dashboard_card);
                    hideAside(dashboard_card);
                }
                else{
                    hideElement(dashboard_card);
                    hideAside(dashboard_card);
                }
});
faq_button.addEventListener("click" , () => {
    let faq_card = document.getElementById("faq_card");
            faq_card.classList.toggle("active");
                if(faq_card.classList.contains("active")){
                    console.log("faq_card active");
                        showHidden(faq_card);
                        hideAside(faq_card);
                }
                else{
                    hideElement(faq_card);
                    hideAside(faq_card);
                }
});
blog_button.addEventListener("click", () => {
    let blog_card = document.getElementById("blog_card");
            blog_card.classList.toggle("active");    
                if (blog_card.classList.contains("active")) {
                    console.log("blog_card active");
                        showHidden(blog_card);
                        hideAside(blog_card);
                } else {
                        hideElement(blog_card);
                        hideAside(blog_card);
                }
});



function showHidden(element) {
    element.style.display = "block";
}

function hideElement(element) {
    element.style.display = "none";
}
function hideAside(element){

    if(element.classList.contains("active")){

        document.getElementById("aside_menu").style.display= "none";
        document.getElementById("main_page").style.display = "none"
    }
    else{
        document.getElementById("aside_menu").style.display = "block";
        document.getElementById("main_page").style.display = "block";
    };




















}