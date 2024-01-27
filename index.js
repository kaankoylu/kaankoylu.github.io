const profile_button = document.getElementById("profile_button");
const dashboard_button = document.getElementById("dashboard_button");
const faq_button = document.getElementById("faq_button");
const blog_button = document.getElementById("blog_button");

function createElement(element,id) {
    element.addEventListener("click", () => {
        let card = document.getElementById(id);
                card.classList.toggle("active");
                    if (card.classList.contains("active")) {
                        showHidden(card);
                        hideAside(card);
                    } else {
                        hideElement(card);
                        hideAside(card);
                    }
    });
}

createElement(profile_button, 'profile_card');
createElement(dashboard_button, 'dashboard_card');
createElement(faq_button, 'faq_card');
createElement(blog_button, 'blog_card');

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
        let profile = document.getElementById("profile_card");
        let dashboard = document.getElementById("dashboard_card");
        let faq = document.getElementById("faq_card");
        let blog = document.getElementById("blog_card");

        if(profile.classList.contains("active")||dashboard.classList.contains("active")||faq.classList.contains("active")||blog.classList.contains("active")){
            document.getElementById("aside_menu").style.display= "none";
            document.getElementById("main_page").style.display = "none";
        }
        else{
            document.getElementById("aside_menu").style.display= "block";
            document.getElementById("main_page").style.display = "block";
        }
    };
}









