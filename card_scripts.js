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
//DASHBOARD PAGE PROGRESS BAR SCRIPT
const checkboxes = document.querySelectorAll(".completion input[type='checkbox']");
const progressBar = document.getElementById("progress_bar");            
    let checkedCount = 0;
        checkboxes.forEach(checkbox => {checkbox.addEventListener("change", function() {
            if (this.checked) {
                checkedCount++;
            } else {
                checkedCount--;
            }
                const percentCalculation = (checkedCount / checkboxes.length) * 100;
                progressBar.style.width = percentCalculation + "%";
                if(percentCalculation <= 25){
                    progressBar.style.backgroundColor = "black";
                } 
                else if(percentCalculation <=50){
                    progressBar.style.backgroundColor = "red";
                }
                else if(percentCalculation <= 75){
                    progressBar.style.background = "orange";
                }
                else{
                    progressBar.style.backgroundColor = "green";
                }
                });
            });
//BLOG PAGE READ MORE FUNCTION
document.getElementById("feedback_blog_read").addEventListener("click", () => {
    let content = document.getElementById("feedback_content_active");
    displayBlogContent(content);
});
document.getElementById("blog_motivation_read").addEventListener("click", () => {
    let content = document.getElementById("motivation_content_active");
    displayBlogContent(content);
});
document.getElementById("blog_swot_read").addEventListener("click", () => {
    let content = document.getElementById("swot_content_read");
    displayBlogContent(content);
});
document.getElementById("blog_experience_read").addEventListener("click", () => {
    let content = document.getElementById("experience_content_active");
    displayBlogContent(content);
});
document.getElementById("blog_first_read").addEventListener("click", () => {
    let content = document.getElementById("first_content_active");
    displayBlogContent(content);
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
//FAQ PAGE INTERACTION

const question_1= document.getElementById("question_1");
const question_2= document.getElementById("question_2");
const question_3= document.getElementById("question_3");
const question_4= document.getElementById("question_4");
const question_5= document.getElementById("question_5");

question_1.addEventListener("click", () => {
    let answer = document.getElementById("answer_1");
        answerDisplay(answer);        
});
question_2.addEventListener("click", () => {
    let answer = document.getElementById("answer_2");
        answerDisplay(answer);        
});
question_3.addEventListener("click", () => {
    let answer = document.getElementById("answer_3");
        answerDisplay(answer);        
});
question_4.addEventListener("click", () => {
    let answer = document.getElementById("answer_4");
        answerDisplay(answer);        
});
question_5.addEventListener("click", () => {
    let answer = document.getElementById("answer_5");
        answerDisplay(answer);        
});

function answerDisplay(element){
    element.classList.toggle("active");
    if(element.classList.contains("active")){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
}




















