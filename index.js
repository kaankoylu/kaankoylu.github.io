const profile_button =  document.getElementById("profile_button");
const dashboard_button = document.getElementById("dashboard_button");
const faq_button =  document.getElementById("faq_button");
const blog_button = document.getElementById("blog_button");
const main_page = document.getElementById("main_page");
const aside_menu = document.getElementById("aside_menu");

aside_menu.classList.add("active");

profile_button.addEventListener("click" , () => {
        
        main_page.innerHTML=""
        let parent_element_profile = document.getElementById("profile_card");

        parent_element_profile.classList.toggle("active");

        

        if(parent_element_profile.classList.contains("active")){aside_menu.classList.remove("active");
            
            let child_update  = `

                <div class="container">
                
                <div class="image">
                    <img src="images/profile_sisyphus.png" width="500" height="500">
                </div>
                <div class="characteristics">
                    <div class="list">
                    <h2><h1>Characteristics:</h1></h2>
                    <ol>
                        <li><h2><p>Friendly</p></h2></li>
                        <li><h2><p>Hardworker</p></h2></li>
                        <li><h2><p>Creative</p></h2></li>
                        <li><h2><p>Adaptable</p></h2></li>
                        <li><h2><p>Philosophy</p></li>
                    </ol>
                    </div>

                    <div class="about">
                    <h2>About me:</h2>
                        <p> After my education about cyber security i ve discovered that im actually like coding,
                         and then i started to code around 2021 but i never stick to the one lanugage so i ve just tried couple of them and stopped.
                         After a long time i ve decided to come back to coding with html/css +js and since that time 
                        im developing myself to become a software engineer.</p>
                    </div>

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

        if(parent_element_dashboard.classList.contains("active")){aside_menu.classList.remove("active");
            let child_update  = `
            
            <table border="1">
            <tr>

                <td>Quartile</td>
                <td>Course</td>
                <td>EC</td>
                <td>Exams</td>
                <td>Grade</td>
                <td class "completion">Completion</td>
            </tr>
            <tr>
            <td rowspan="3">quartile 1</td>
                <td>Program & Career Oriantation</td>
                <td>2.5</td>
                <td>0</td>
                <td>0</td>
                <td class "completion"><input type="checkbox"></td>
                
                
            </tr>
            <tr>
                <td>Computer Science Basics</td>
                <td>5</td>
                <td></td>
                <td>5.5</td>
                <td class "completion"><input type="checkbox"></td>
            </tr>
            <tr>

            <td>Programming Basics</td>
                <td>5</td>
                <td></td>
                <td>5.5</td>
                <td class "completion"><input type="checkbox"></td>
            </tr>
            <tr>
            <td rowspan="1">quartile 2</td>
                <td>The Object-Orianted programming</td>
                <td>10</td>
                <td></td>
                <td>5.5</td>
                <td class "completion"><input type="checkbox"></td> 
            
            </tr>
            <tr>
                <td rowspan="2">quartile 3</td>
                <td>Framework Project</td>
                <td>1.25</td>
                <td></td>
                <td>5.5</td> 
                <td class "completion"><input type="checkbox"></td>
            
            </tr>
            <tr>
                <td>Business IT consultancy Basics</td>
                <td>2.5</td>
                <td></td>
                <td>5.5</td>
                <td class "completion"><input type="checkbox"></td> 
            
            </tr>
            <tr>
                <td rowspan="6">quartile 4</td>
                <td>Framework Project 2</td>
                <td>10</td>
                <td></td>
                <td>5.5</td>
                <td class "completion"><input type="checkbox"></td> 
            
            </tr>
            
            <tr>
                <td>PPDE</td>
                <td>12.5</td>
                <td></td>
                <td>5.5</td>
                <td class "completion"><input type="checkbox"></td> 
            
            </tr>
            <tr>
            <td>IT personality project week 1</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td>
            <td class "completion"><input type="checkbox"></td> 
    
            </tr>
            </tr>
            <tr>
            <td>IT personality international week</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td>
            <td class "completion"><input type="checkbox"></td> 
    
            </tr>
            <tr>
            <td>IT personality 1</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td>
            <td class "completion"><input type="checkbox"></td> 
    
            </tr>
            <tr>
            <td>IT personality 2</td>
            <td>1.25</td>
            <td></td>
            <td>5.5</td>
            <td class "completion"><input type="checkbox"></td> 
    
            </tr>


            </table>
            <div class = "progress_bar">

            <progress value="50" max="100"> </progress>

            </div>

             
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
        if(parent_element_faq.classList.contains("active")){aside_menu.classList.remove("active");
            let child_update  = `
            
            <div class="faq_content">
                <h1>Frequently Asked Questions(FAQ):</h1>
                <ul>
                    <li>
                        <h2>How can you print a document from your laptop at HZ?</h2>
                        <p> • Select the following printer for your job: HZ Printer</p>
                        <p> • When the print job is given, log in using the HZ pass or by entering your HZ username & password.</p>

                        <p> •Then choose the Print Release option. You will then see which print jobs are ready. If there is sufficient balance in your print account,
                             the print jobs will be printed. Tap Access Device to see your balance. After printing, tap the following icon on the printer to log out:</p>
                    </li>
                    <li>
                        <h2>How can you scan a document and send it to your laptop at HZ?</h2>
                        <p>• Log on to the printer using your HZ card or by entering your HZ user name & password.</p>
                        <p>• Choose the Scan option in the menu.</p>
                        <p>• Place the original(s) on the feeder or glass plate.</p>

                        <p> Double-sided scanning (optional)</p>
                        <p>• Press Change settings</p>
                        <p>• For duplex mode, select the 2-sided option</p>

                        <p>• Press Start</p>
                        <p>• After scanning, press the following symbol on the printer to log off:</p>
                            
                    </li>
                    <li>
                        <h2>How can I buy something (like when I sign up for the IT introduction event) on the HZ web shop?</h2>
                        <p>you can buy it from,<a target="_blank" href="https://webshop.hz.nl/webshopapp/defaulten.aspx?menu=082076044027019251066025111065201099237062130097">here</a>                            
                    </li>
                    <li>
                        <h2>How can you book a project space in one of the wings?</h2>
                        <p>it can easily booked from <a target="_blank" href="https://hzuniversity.topdesk.net/tas/public/ssp/content/detail/service?unid=7e54d40b762c4dc79205e200f0d4d818">here</a></p>
                    </li>
                    </li>
                    <li>
                        <h2>What are the instructions if you want to park your car at the HZ parking lot?</h2>
                        <p>At the barrier of the car park the Poelendaelesingel you can ring the bell. After passing the barrier,
                           follow the signs to the HZ parking places, marked with a white sign with the HZ logo.</p>
                        <p>if student or staff: enter by presenting HZ pass at the barriers, guests can ring the bell at the barrier.
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
    if(parent_element_blog.classList.contains("active")){aside_menu.classList.remove("active");
        let child_update  = `

        
        <div class="post">
                <h2>Motivation</h2>
                    <div class="motivation_part">
                        <p class="question">Why ICT?
                        <p class="answer">i love creating things from 0</p>

                        <p class="question">Why am i love creating things?
                        <p class="answer">it makes me only person who has control</p>

                        <p class="question">Why i want control?
                        <p class="answer">it teaches me about avoiding mistakes</p>

                        <p class="question">Why i want avoiding mistakes?
                        <p class="answer">i want to be closest one to  perfect</p>

                        <p class="question">Why i want to be closest one to be perfect?
                        <p class="answer">i believe trying to reach "perfect" is the most efficient way for develop my knowledge</p>

                    </div>
            <div class="post_date">Posted on: September 12, 2023</div>
        </div>


        <div class="post">
        <h2>SWOT</h2>
            <div class="post_content">

                <ol>
                    <p>Strengths:</p>

                    <li>Leadership: i have experiences in team working so i can easily navigate the team to the point</li>
                    <li>Problem Solver: if i can get deep root of problem probably i can solve it with different ways</li>
                    <li>Empathy: i am unconsiously making empathy so i can easily understand the team members mental status </li>
                    <li>Positive Attitude: i ve experienced that if tension arises success rate is decreasing the same way, so i am always positive even in the worst case scenarios </li>

                </ol>

                <ol>
                    <p>Weaknesses:</p>

                    <li>Critical Decisions: critical times needs hardwork, sometimes i am ignoring the whole mentality and tireness of the group and force myself in to excessive working </li>
                    <li>Competetion: my competitive nature can make it difficult for me to collaborate effectively with others.
                    I may focus too much to perfection.</li>
                    <li>Excessive working: i love valuing my free times with working and sometimes i may lose the controls and work more then need</li>

                </ol>

                <ol>
                    <p>Opportunities:</p>

                    
                    <li>Online Coding Communities</li>

                </ol>

                <ol>
                    <p>Threats:</p>

                    <li>Overthinking: Thinking deep is sometimes makes me passive for a small amount of times. </li>
                    

                </ol>


            </div>
    <div class="post_date">Posted on: September 12, 2023</div>
    </div>

        <div class="post">
                <h2>Programming experience</h2>
                        <div class="post_content">
                        <p>
                            About the experiences i can clearly say that i ve tried some languages 
                            such as python,java,c but never just stick to one of them and improve myself specifically in that language.
                            which is i think one of the biggest mistakes i ve ever made. Also, i am actively developing myself about javascript and html/css.
                            and this website is my 2nd big project.  
                        </p>
                        </div>
            <div class="post_date">Posted on: September 10, 2023</div>
        </div>
        </div>
        <div class="post">
                <h2>First Feedback</h2>
                    <div class="post_content">
                        <p>
                        First Feedback was about very "long" css file and approximately everyone liked main design of the website.
                        as a result i ve splitted the css file to 2 different files so it actually made my work easy.
                        </p>

                    </div>
            <div class="post_date">Posted on: September 8, 2023</div>
        </div>
                

        
        
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
    let body = document.body;
    if(parent_element_profile.classList.contains("active")){body.style.overflow = "auto";
        
        
        console.log("profile active");
        document.getElementById("aside_menu").innerHTML ="";

    }
    else if (parent_element_dashboard.classList.contains("active")){body.style.overflow = "auto";
        console.log("dashboard active");
        document.getElementById("aside_menu").innerHTML ="";

    }
    else if (parent_element_faq.classList.contains("active")){body.style.overflow = "auto";
        console.log("faq active");
        document.getElementById("aside_menu").innerHTML ="";
    }
    else if(parent_element_blog.classList.contains("active")){body.style.overflow = "auto";

        console.log("blog active");
        document.getElementById("aside_menu").innerHTML ="";

    }
    else{body.style.overflow = "hidden";
        console.log("nothing active");

          let parent_element = document.getElementById("main_page");
          let parent_element_update = `
          <div class="main_text">
            <p class="main_subject">Welcome to the website.</p>
                <p>here is the quick informations about structure and content of the site:</p>
                    <li>-i ve used javascript too so the interactions with buttons and cards appearances are made with js</li>
                    <li>-Percentages are likely 54.6% javascript, 31.1% CSS and 14.3% HTML</li>
                    <li>-Background image is temprory so colors anda image can be changed</li>
          </div>
          <div class="list_elements" >

                <li class="subject">The meanings of the icons are:</li>
                <li class="list">Profile: Personal information can be found there</li>
                <li class="list">Dashboard: There is a overview of the study.</li>
                <li class="list">faq: Answers for the frequently asked questions.</li>
                <li class="list">Blog: chronogical ordered blog posts.</li>

          </div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          `;
          
          document.getElementById("aside_menu").classList.add("active");
        document.getElementById("aside_menu").innerHTML = `    
        <div class="main_subject">
        <img src="images/hz_logo.png">
        </div>
        <ul>
        <li><a href="https://hz.nl">HZ home</a></li>
        <li><a href="https://hz.nl/en/about-hz/organisation/regulations-and-documents#panel1945070">HZ documents</a></li>
        <li><a href="https://learn.hz.nl/">HZ learn</a></li>
        <li><a href="https://hz.osiris-student.nl/">HZ osiris</a></li>
        <li><a href="https://teams.microsoft.com/l/team/19%3a827654897ab746089c081f24aff1c984%40thread.skype/conversations?groupId=337e8cca-f67d-4132-9fa9-b0c761bbeb94&tenantId=4c16deb3-342d-4fca-bcd5-b1429308034c">ICT teams(algeemen)</a></li>
        <li><a href="https://github.com/HZ-HBO-ICT">ICT github</a></li>
        </ul>
        
        `




          parent_element.innerHTML = parent_element_update;

    }

}














