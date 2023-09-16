//CARD CLOSER BUTTON 

document.getElementById("profile_card_closer").addEventListener("click" , () =>{
    let profile_card = document.getElementById("profile_card");
    profile_card.classList.remove("active");
    profile_card.style.display = "none";
    hideAside(profile_card)

});
document.getElementById("dashboard_card_closer").addEventListener("click" , () =>{
    let dashboard_card = document.getElementById("dashboard_card");
    dashboard_card.classList.remove("active");
    dashboard_card.style.display = "none";
    hideAside(dashboard_card)
});
document.getElementById("faq_card_closer").addEventListener("click" , () =>{
    let faq_card = document.getElementById("faq_card");
    faq_card.classList.remove("active");
    faq_card.style.display = "none";
    hideAside(faq_card)
});
document.getElementById("blog_card_closer").addEventListener("click" , () =>{
    let blog_card = document.getElementById("blog_card");
    blog_card.classList.remove("active");
    blog_card.style.display = "none";
    hideAside(blog_card)
});

//BLOG PAGE READD MORE FUNCTION


document.getElementById("feedback_blog_read").addEventListener("click", () => {
    let content = document.getElementById("feedback_content_active");
    displayBlogContent(content)
});
document.getElementById("blog_motivation_read").addEventListener("click", () => {
    let content = document.getElementById("motivation_content_active");
    displayBlogContent(content)
});
document.getElementById("blog_swot_read").addEventListener("click", () => {
    let content = document.getElementById("swot_content_read");
    displayBlogContent(content)
});
document.getElementById("blog_experience_read").addEventListener("click", () => {
    let content = document.getElementById("experience_content_active");
    displayBlogContent(content)
});
document.getElementById("blog_first_read").addEventListener("click", () => {
    let content = document.getElementById("first_content_active");
    displayBlogContent(content)
});

function displayBlogContent(element){
    element.classList.toggle("active");
    if(element.classList.contains("active")){
        element.style.display = "block";
    }
    else{
        element.style.display="none";   
    }    
}

//-------------------------------------------------------------------------------






















