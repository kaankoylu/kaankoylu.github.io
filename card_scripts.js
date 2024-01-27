//CARD CLOSER BUTTON 


closerButton('profile');
closerButton('dashboard');
closerButton('faq');
closerButton('blog');

function closerButton(cardName) {
    document.getElementById(`${cardName}_card_closer`).addEventListener("click", () => {
        let card = document.getElementById(`${cardName}_card`);
        card.classList.remove("active");
        card.style.display = "none";
        hideAside(card)
    });
}


//DASHBOARD PAGE PROGRESS BAR SCRIPT
const checkboxes = document.querySelectorAll(".completion input[type='checkbox']");
const progressBar = document.getElementById("progress_bar");
let checkedCount = 0;
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            checkedCount++;
        } else {
            checkedCount--;
        }
        const percentCalculation = (checkedCount / checkboxes.length) * 100;
        progressBar.style.width = percentCalculation + "%";
        if (percentCalculation <= 25) {
            progressBar.style.backgroundColor = "black";
        }
        else if (percentCalculation <= 50) {
            progressBar.style.backgroundColor = "red";
        }
        else if (percentCalculation <= 75) {
            progressBar.style.background = "orange";
        }
        else {
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

function displayBlogContent(element) {
    element.classList.toggle("active");
    if (element.classList.contains("active")) {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}
//-------------------------------------------------------------------------------
//FAQ PAGE INTERACTION

const question_1 = document.getElementById("question_1");
const question_2 = document.getElementById("question_2");
const question_3 = document.getElementById("question_3");
const question_4 = document.getElementById("question_4");
const question_5 = document.getElementById("question_5");

questionContent(question_1, 1);
questionContent(question_2, 2);
questionContent(question_3, 3);
questionContent(question_4, 4);
questionContent(question_5, 5);

function questionContent(question, questionNumber) {
    question.addEventListener("click", () => {
        let answer = document.getElementById(`answer_${questionNumber}`);
        answerDisplay(answer);
    });
}

function answerDisplay(element) {
    element.classList.toggle("active");
    if (element.classList.contains("active")) {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}