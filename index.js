const profile_button =  document.getElementById("profile_button");
const dashboard_button = document.getElementById("dashboard_button");
const faq_button =  document.getElementById("faq_button");
const blog_button = document.getElementById("blog_button");
const main_page = document.getElementById("main_page");


profile_button.addEventListener("click" , () => {
        
        main_page.innerHTML=""
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
        main_page.innerHTML=""

        if(parent_element_dashboard.classList.contains("active")){
            let child_update  = `
            
            <table border="1">
            <tr>

                <td>Quartile</td>
                <td>Course</td>
                <td>EC</td>
                <td>Exams</td>
                <td>Grade</td>
            </tr>
            <tr>
            <td rowspan="3">1</td>
                <td>Program & Career Oriantation</td>
                <td>2.5</td>
                <td>0</td>
                <td>0</td>
                
                
            </tr>
            <tr>
                <td>Computer Science Basics</td>
                <td>5</td>
                <td></td>
                <td>5.5</td>
            </tr>
            <tr>

            <td>Programming Basics</td>
                <td>5</td>
                <td></td>
                <td>5.5</td>
            </tr>
            <tr>
            <td rowspan="9">2</td>
                <td>The Object-Orianted programming</td>
                <td>10</td>
                <td></td>
                <td>5.5</td> 
            
            </tr>
            <tr>
                <td>Framework Project</td>
                <td>1.25</td>
                <td></td>
                <td>5.5</td> 
            
            </tr>
            <tr>
                <td>Framework Project 2</td>
                <td>10</td>
                <td></td>
                <td>5.5</td> 
            
            </tr>
            <tr>
                <td>Business IT consultancy Basics</td>
                <td>2.5</td>
                <td></td>
                <td>5.5</td> 
            
            </tr>
            <tr>
                <td>PPDE</td>
                <td>12.5</td>
                <td></td>
                <td>5.5</td> 
            
            </tr>
            <tr>
            <td>IT personality project week 1</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td> 
    
            </tr>
            </tr>
            <tr>
            <td>IT personality international week</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td> 
    
            </tr>
            <tr>
            <td>IT personality 1</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td> 
    
            </tr>
            <tr>
            <td>IT personality 2</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td> 
    
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
        main_page.innerHTML=""
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

blog_button.addEventListener("click" , () => {

    let parent_element_blog = document.getElementById("blog_card");
    parent_element_blog.classList.toggle("active");
    main_page.innerHTML=""
    if(parent_element_blog.classList.contains("active")){
        let child_update  = `

        <h1> Under Maintenance</h1>
        
        `
        parent_element_blog.innerHTML = child_update;
    }
    else{parent_element_blog.innerHTML = ""};

    display_function(parent_element_blog)
     
    


});



async function display_function(){

    let parent_element_profile = document.getElementById("profile_card");
    let parent_element_dashboard = document.getElementById("dashboard_card");
    let parent_element_faq = document.getElementById("faq_card");
    let parent_element_blog = document.getElementById("blog_card");

    if(parent_element_profile.classList.contains("active")){
        console.log("profile active");

    }
    else if (parent_element_dashboard.classList.contains("active")){
        console.log("dashboard active");


    }
    else if (parent_element_faq.classList.contains("active")){
        console.log("faq active");

    }
    else if(parent_element_blog.classList.contains("active")){

        console.log("blog active");


    }
    else{
        console.log("nothing active");
          let parent_element = document.getElementById("main_page");
          let parent_element_update = `
          
          <div class="main_text">
          <p class="main_subject">Welcome to the website.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, 
              mollis ac nibh at, pharetra vestibulum libero. Donec elit metus, 
              hendrerit et convallis at, auctor et lacus. Pellentesque hendrerit 
              justo mollis, hendrerit velit vitae, rutrum lorem. 
              Suspendisse et diam ac odio eleifend sagittis pulvinar et elit. 
              Ut luctus ultricies magna, nec laoreet augue efficitur ac. 
              Quisque ullamcorper nunc in velit vehicula, 
              vitae condimentum lacus pretium. Quisque odio tortor, 
              aliquam vitae mi vitae, lobortis iaculis libero. Duis leo ex, 
              dignissim at volutpat non, malesuada malesuada massa. 
              Integer convallis, erat vitae dapibus ultrices, odio tellus blandit neque, 
              vitae viverra eros mauris eu libero. Nam eu facilisis elit. 
              Mauris vitae fermentum felis.</p>
          </div>
  
          <div class="list_elements">
              <li class="subject">The meainings of the icons are:</li>
              <li class="list">Profile: Personal information can be found there</li>
              <li class="list">Dashboard: There is a overview of the study.</li>
              <li class="list">faq: Answers for the frequently asked questions.</li>
              <li class="list">Blog: chronogical ordered blog posts.
              </div>
          `

          parent_element.innerHTML = parent_element_update;

    }

}














