const profile_button =  document.getElementById("profile_button");
const dashboard_button = document.getElementById("dashboard_button");
const faq_button =  document.getElementById("faq_button");
const blog_button = document.getElementById("blog_button")

profile_button.addEventListener("click" , () => {
        
        
        let parent_element_profile = document.getElementById("profile_card");
        parent_element_profile.classList.toggle("active");

        if(parent_element_profile.classList.contains("active")){
            let child_update  = `

                <div class="container">
                
                <div class="image">
                    <img src="images/profile_sisyphus.png" width="500" height="500">
                </div>
                <div class="characteristics">
                    <h2><h1>Characteristics:</h1></h2>
                    <ol>
                        <li><h2><p>Friendly</p></h2></li>
                        <li><h2><p>Hardworker</p></h2></li>
                        <li><h2><p>Creative</p></h2></li>
                        <li><h2><p>Adaptable</p></h2></li>
                        <li><h2><p>Listener</p></h2></li>
                        <li><h2><p>Philosophy</p></li>
                    </ol>
                </div>
            </div>
        
            `
            parent_element_profile.innerHTML = child_update;
        }
        else{parent_element_profile.innerHTML = ""};

        display_function(parent_element_profile)
         
         


});

dashboard_button.addEventListener("click" , () => {

        let parent_element_dashboard = document.getElementById("dashboard_card");
        parent_element_dashboard.classList.toggle("active");

        if(parent_element_dashboard.classList.contains("active")){
            let child_update  = `
            
            <table border="1">
            <tr>

                <td>Program- & Career Orientation (PCO)</td>
                <td>Program- & Career Orientation (PCO)</td>
                <td> Computer Science Basics (CBA)</td>
                <td>Programming Basics (PBA)</td>
                <td>Personal professional development: Exploration (PPD-E)</td>
                <td>IT Personality Projectweek 1 (PPW1) (PBA)</td>
                <td>IT Personality 1 (ITP1) (PBA)</td>
                <td></td>
                <td></td>
                <td>Object-oriented programming (OOP) (PBA)</td>
                <td>Framework development 1 (FDE1) (PBA)</td>
                <td>Framework Project 1 (FPR1)  (PBA)</td>
                <td>Framework project 2 (FPR2) (PBA)</td>
                <td>IT Personality International week (PIW)  (PBA)</td>
                <td>IT Personality2 (ITP2) (PBA)</td>
                <td>--------- end of the Semester 2 ---------</td>

            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td></td>
                <td></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                
            </tr>
        </table>

            <p><h1>The values are temprory</h1></p> 

            `
            parent_element_dashboard.innerHTML = child_update;
        }
        else{parent_element_dashboard.innerHTML = ""};

        display_function(parent_element_dashboard)
         
         
});

faq_button.addEventListener("click" , () => {

    
        let parent_element_faq = document.getElementById("faq_card");
        parent_element_faq.classList.toggle("active");

        if(parent_element_faq.classList.contains("active")){
            let child_update  = `
            
            <div class="faq_content">
                <h1>Frequently Asked Questions(FAQ):</h1>
                <ul>
                    <li>
                        <h2>How can you print a document from your laptop at HZ?</h2>
                        <p>Go to <a href="https://print.hz.nl">print page</a>, select the file and proceed  </p>
                    </li>
                    <li>
                        <h2>How can you scan a document and send it to your laptop at HZ?</h2>
                        <p>Answer2</p>
                    </li>
                    <li>
                        <h2>How can I buy something (like when I sign up for the IT introduction event) on the HZ web shop?</h2>
                        <p>Answer3</p>
                    </li>
                    <li>
                        <h2>How can you book a project space in one of the wings?</h2>
                        <p>Answer4</p>
                    </li>
                    </li>
                    <li>
                        <h2>What are the instructions if you want to park your car at the HZ parking lot?</h2>
                        <p>Answer5</p>
                    </li>
                </ul>
            </div>

            
            `
            parent_element_faq.innerHTML = child_update;
        }
        else{parent_element_faq.innerHTML = ""};

        display_function(parent_element_faq)
         
         
});

document.getElementById("blog_button").addEventListener("click" , () => {


    let parent_element_blog = document.getElementById("blog_card");
    parent_element_blog.classList.toggle("active");

    if(parent_element_blog.classList.contains("active")){
        let child_update  = `

        <h1> Under Maintenance</h1>
        
        `
        parent_element_blog.innerHTML = child_update;
    }
    else{parent_element_blog.innerHTML = ""};

    display_function(parent_element_blog)
     
    


});



function display_function(){

    if(parent_element_profile.classList.contains("active")){

        parent_element_dashboard.classList.remove("active");

        parent_element_faq.classList.remove("active");

        parent_element_blog.classList.remove("active");


    }
    else if (parent_element_dashboard.contains("active")){

        parent_element_profile.classList.remove("active");
        parent_element_faq.classList.remove("active");
        parent_element_blog.classList.remove("active");

    }
    else if (parent_element_faq.contains("active")){

        parent_element_dashboard.classList.remove("active");
        parent_element_profile.classList.remove("active");
        parent_element_blog.classList.remove("active");
    }
    else if(parent_element_blog.contains("active")){

        parent_element_dashboard.classList.remove("active");
        parent_element_profile.classList.remove("active");
        parent_element_faq.classList.remove("active");

    }
    else{

        parent_element_profile.classList.remove("active");
        parent_element_dashboard.classList.remove("active");
        parent_element_faq.classList.classList.remove("active");
        parent_element_blog.classList.remove("active");


    }


}














