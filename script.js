const body = document.querySelector('body')

// console.log(html);
function createHeader() {
    const header = document.createElement("header")
    const headerDiv = document.createElement("div")
    headerDiv.classList.add("header")
    const imgEle = document.createElement("img")
    imgEle.setAttribute("src", './profile.png')
    imgEle.style.width = "90px"
    const headingWrapperDiv = document.createElement("div")
    headingWrapperDiv.classList.add("heading_wrapper")
    const nameTagDiv = document.createElement("div")
    nameTagDiv.setAttribute("class", 'name_tag')
    nameTagDiv.innerHTML = "<h1>BRIAN DUDEY</h1>"

    const subHeadingDiv = document.createElement("div")
    subHeadingDiv.classList.add("sub-heading")
    const h3Ele = document.createElement('h3')
    h3Ele.innerText = 'N. Damen, Chicago 999999|999-999-9999|hello@kickresume.com|www.kickresume.com'

    subHeadingDiv.append(h3Ele)

    headingWrapperDiv.append(nameTagDiv)

    headerDiv.append(imgEle, headingWrapperDiv)

    const hr = document.createElement('hr')

    header.append(headerDiv, subHeadingDiv, hr)

    body.append(header)


    body.style.margin = 0
    body.style.padding = 0
    body.style.boxSizing = 'border-box'

    body.style.fontFamily = 'sans-serif'
    body.style.display = "flex"
    body.style.width = "100vw"
    body.style.flexDirection = "column"
    // body.style.justifyContent = "center"
    // body.style.alignItems = "center"

    headerDiv.style.background = "#565656"
    headerDiv.style.display = "flex"
    headerDiv.style.flexDirection = "column"
    headerDiv.style.alignItems = "center"
    headerDiv.style.justifyContent = "center"
    headerDiv.style.padding = "30px"
    headerDiv.style.width = "100vw"

    imgEle.style.width = "120px"
    imgEle.style.borderRadius = "100%"
    imgEle.style.border = "5px dotted #fabf29"

    headingWrapperDiv.style.display = "flex"
    headingWrapperDiv.style.justifyContent = "center"
    headingWrapperDiv.style.alignItems = "center"
    headingWrapperDiv.style.background = "#eeee"
    headingWrapperDiv.style.width = "100vw"
    headingWrapperDiv.style.height = "40px"

    nameTagDiv.style.background = "#fabf29"
    nameTagDiv.style.display = "flex"
    nameTagDiv.style.justifyContent = "center"
    nameTagDiv.style.alignItems = "center"
    nameTagDiv.style.textAlign = "center"
    nameTagDiv.style.width = "300px"
    nameTagDiv.style.height = "70px"
    nameTagDiv.style.textAlign = "center"
    nameTagDiv.style.padding = "0px"
    nameTagDiv.style.borderRadius = "10px"

    subHeadingDiv.style.display = "flex"
    subHeadingDiv.style.justifyContent = "center"
    subHeadingDiv.style.alignItems = "center"
    subHeadingDiv.style.color = "#565656"
    subHeadingDiv.style.padding = "5px"
}

createHeader()

function mainContent() {

    const mainEle = document.createElement("main")
    const sectionEle = document.createElement("section")
    sectionEle.classList.add("sectiontag1")
    const divEle = document.createElement("div")
    divEle.classList.add('section_container')
    const divEle2 = document.createElement("div")
    divEle2.classList.add("profile")
    const i = document.createElement("i")
    i.setAttribute("class", 'fa-solid fa-user profile_picture')
    const h1Ele = document.createElement("h1")
    h1Ele.innerText = "Profile"
    const pEle = document.createElement("p")
    pEle.innerHTML = `
    innovative optimized solution seeker. Excited to be <br> at the deployment
    phase of my new career as a <br> web developer. I am ambitious, adventurous, <br>
    assiduous, animated, and an a lliteration advocate.
    `
    divEle2.append(i, h1Ele)
    divEle.append(divEle2)
    sectionEle.append(divEle, pEle)
    mainEle.append(sectionEle)
    body.append(mainEle)

    mainEle.style.display = "flex"
    mainEle.style.justifyContent = "space-between"
    mainEle.style.padding = "50px"

    h1Ele.style.color = "#565656"
    h1Ele.style.fontSize = "30px"

    divEle.style.marginTop = "10px"
    divEle.style.width = "50%"

    divEle2.style.display = "flex"
    divEle2.style.alignItems = "center"
    divEle2.style.margin = "20px 0"

    i.style.fontSize = "30px"
    i.style.background = "#565656"
    i.style.color = "#fabf29"
    i.style.borderRadius = "100%"
    i.style.padding = "10px"
    i.style.outline = "3px dotted #fabf29"
    i.style.marginRight = "15px"

    mainEle.style.display = "flex"
    mainEle.style.justifyContent = "space-between"


    //container 1 was completed

    const section_container2Div = document.createElement("div")
    divEle.classList.add("section_container2")
    const skillsDiv = document.createElement("div")
    skillsDiv.classList.add("skills")
    const i2 = document.createElement("i")
    i2.setAttribute("class", "fa-solid fa-flask")
    const h1Skill = document.createElement("h1")
    h1Skill.textContent = "Skills"

    h1Skill.style.color = "#565656"
    h1Skill.style.fontSize = "30px"

    skillsDiv.append(i2, h1Skill)
    section_container2Div.append(skillsDiv)
    sectionEle.append(skillsDiv)

    subHeadingH3 = document.createElement("h3")
    subHeadingH3.classList.add("sub-heading2")
    subHeadingH3.innerText = "Technical Skills"

    section_container2Div.append(subHeadingH3)
    sectionEle.append(section_container2Div)



    const section_container2_skills = document.createElement("div")
    section_container2_skills.classList.add("section_container2_skills")

    const div = document.createElement("div")
    div.classList.add("js")
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    div.innerHTML = `
  <h3 style="padding: 5px 0;">Js</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const div2 = document.createElement("div")
    div2.classList.add("css")
    div2.style.display = "flex"
    div2.style.justifyContent = "space-between"
    div2.innerHTML = `
<h3 style="padding: 5px 0;">CSS</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const div3 = document.createElement("div")
    div3.classList.add("html")
    div3.style.display = "flex"
    div3.style.justifyContent = "space-between"
    div3.innerHTML = `
<h3 style="padding: 5px 0;">HTML</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const div4 = document.createElement("div")
    div4.classList.add("react")
    div4.style.display = "flex"
    div4.style.justifyContent = "space-between"
    div4.innerHTML = `
<h3 style="padding: 5px 0;">React</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const div5 = document.createElement("div")
    div5.classList.add("redux")
    div5.style.display = "flex"
    div5.style.justifyContent = "space-between"
    div5.innerHTML = `
<h3 style="padding: 5px 0;">Redux</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const div6 = document.createElement("div")
    div6.classList.add("mongo")
    div6.style.display = "flex"
    div6.style.justifyContent = "space-between"
    div6.innerHTML = `
<h3 style="padding: 5px 0;">Mongo</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const div7 = document.createElement("div")
    div7.classList.add("deployment")
    div7.style.display = "flex"
    div7.style.justifyContent = "space-between"
    div7.innerHTML = `
<h3 style="padding: 5px 0;">Deployment</h3>
<input type="range" name="css" id="" style="margin-right: 150px; padding: 5px;" />`

    const h3Ele = document.createElement("h3")
    h3Ele.classList.add("sub-heading2")
    h3Ele.innerText = "Additional Skills"

    const wrapper2Div = document.createElement("div")
    wrapper2Div.classList.add("wrapper2")

    wrapper2Div.innerHTML = `
    <div class="projectManagement" style="display: flex; justify-content: space-between;">
                        <h3 style="padding: 5px 0;">Project Management</h3>
                        <input type="range" name="projectManagement" id="" style="margin-right: 150px; padding: 5px;" />
                    </div>
                    <div class="recruitment" style="display: flex; justify-content: space-between;">
                        <h3 style="padding: 5px 0;">Recruitment</h3>
                        <input type="range" name="recruitment" id="" style="margin-right: 150px; padding: 5px;" />
                    </div>
                    <div class="businessDevelopment" style="display: flex; justify-content: space-between;">
                        <h3 style="padding: 5px 0;">Business Development</h3>
                        <input type="range" name="businessDevelopment" id=""
                            style="margin-right: 150px; padding: 5px;" />
                    </div>
                    <div class="editing" style="display: flex; justify-content: space-between;">
                        <h3 style="padding: 5px 0;">Editing</h3>
                        <input type="range" name="editing" id="" style="margin-right: 150px; padding: 5px;" />
                    </div>
                    <div class="fundraising" style="display: flex; justify-content: space-between;">
                        <h3 style="padding: 5px 0;">fundraising</h3>
                        <input type="range" name="fundraising" id="" style="margin-right: 150px; padding: 5px;" />
                    </div>`

    section_container2_skills.append(
        div,
        div2,
        div3,
        div4,
        div5,
        div6,
        div7,

    )
    section_container2Div.append(section_container2_skills, h3Ele, wrapper2Div)

    // console.log(section_container2Div);
    section_container2Div.style.marginTop = "10px"

    skillsDiv.style.display = "flex"
    skillsDiv.style.alignItems = "center"

    i2.style.fontSize = "30px"
    i2.style.background = "#565656"
    i2.style.color = "#fabf29"
    i2.style.borderRadius = "100%"
    i2.style.padding = "10px"
    i2.style.outline = "3px dotted #fabf29"
    i2.style.marginRight = "15px"

    subHeadingH3.style = textAlign = "center"



    //container 2 was completed now container 2

    const section_container3 = document.createElement("div")
    div.setAttribute("class", 'section_container3')
    const workExperience = document.createElement('div')
    const i3 = document.createElement("i")
    i3.setAttribute("class", "fa-solid fa-briefcase")
    const h1Ele3 = document.createElement("h1")
    h1Ele3.setAttribute("style", 'color: #565656; font-size: 30px;')
    h1Ele3.innerText = "Work experience"
    workExperience.append(i3, h1Ele3)

    const workExperienceHeader = document.createElement("div")
    workExperienceHeader.innerHTML = `
    <h3>
    Event Manager
</h3>
<span class="date" style="margin-left:15px;">03/2014-02/2017</span>`

    const p = document.createElement("p")
    p.innerText = "C3 Presents, Washington DC"

    const ul = document.createElement("ul")
    ul.setAttribute("style", 'margin-left: 30px;')
    ul.innerHTML = `
    <li>
    <p>
        Lead and execute all phases of event planning <br> and production spanning
        connitee <br> recruitment, training, vendor relationships and <br>
        on-site facilitation.
    </p>
</li>
<li>
    <p>
        Brought new business to the organization <br> throungh relentless
        networking and stewardship <br> which helped the company win the bid for
        the <br> State Department Summit on the Middle East <br> and, the companies
        largest civic event to date, <br> the United State of Women
    </p>
</li>
<li>
    <p>
        Exercise fiscal control over budget creation, <br>tracking and reporting.
        Collaborate with employees at all <br> orgavizational levels to advance cohesive
        operations.
    </p>
</li>`

    section_container3.append(workExperience, workExperienceHeader, p, ul)
    sectionEle.append(section_container3)

    section_container3.style.marginTop = "10px"
    workExperience.style.display = "flex"
    workExperience.style.alignItems = "center"
    workExperience.style.marginBottom = "20px"
    i3.style.fontSize = "30px"
    i3.style.background = "#565656"
    i3.style.color = "#fabf29"
    i3.style.borderRadius = "100%"
    i3.style.padding = "10px"
    i3.style.outline = "3px dotted #fabf29"
    i3.style.marginRight = "15px"
    workExperienceHeader.style.display = "flex"
    workExperienceHeader.style.alignItems = "center"
    sectionEle.style.width = "50%"

    const line = document.createElement("div")
    line.setAttribute("style", 'height:80rem; border-left: 3px solid lightgray; margin-right: 160px;')

    mainEle.append(line)

    // section 2 tag

    const sectiontag2 = document.createElement("section")
    const section2_container = document.createElement("div")
    const workExperience2 = document.createElement("div")
    //     workExperience2.innerHTML = `
    //     <div class="sectiontag2_heading" style=" display: flex; align-items: center; margin-bottom: 20px;">
    //     <i class="fa-solid fa-briefcase"></i>
    //     <h1 style="color: #565656; font-size: 30px;">Work experience</h1>
    // </div>`
    const sectiontag2_heading = document.createElement("div")
    sectiontag2_heading.innerHTML = `
<i 
class="fa-solid fa-briefcase" 
style="
    font-size: 30px;
    background: #565656;
    color: #fabf29;
    border-radius: 100%;
    padding: 10px;
    outline: 3px dotted #fabf29;
    margin-right: 15px;">
</i>
<h1 style="color: #565656; font-size: 30px;">Work experience</h1>`
    const workExperienceHeader2 = document.createElement("div")
    workExperienceHeader2.innerHTML = `
    <h3>
    Community Relations <br>
    Manager
</h3>
<span style="margin-left: 15px";>06/2011-01/2014</span>`


    const h4 = document.createElement("h4")
    h4.setAttribute("style", "font-weight: normal; padding-bottom: 10px;")
    h4.innerText = "Gay & Lesbian Elder Housing, Los Angeles"

    const ul2 = document.createElement("ul")
    ul2.innerHTML = `
                        <li>
                            <p>
                                Arranging presentations and pitch deck.
                            </p>
                        </li>
                        <li>
                            <p>
                                Designing, a PR plan and establishing <br> important focus
                                points.
                            </p>
                        </li>
                        <li>
                            <p>
                                Designing, creating and managing content <br> across
                                multiple communication platforms.
                            </p>
                        </li>
                        <li>
                            <p>
                                Building relationships with key media players.
                            </p>
                        </li>`

    sectiontag2.style.width = "50%"
    section2_container.style.marginBottom = "10px"
    sectiontag2_heading.style.display = "flex"
    sectiontag2_heading.style.alignItems = "center"
    sectiontag2_heading.style.marginBottom = "20px"
    workExperienceHeader2.style.display = "flex"
    ul2.style.marginLeft = "30px"

    const section2_container2 = document.createElement("div")
    const education = document.createElement("div")
    const sectiontag2_heading2 = document.createElement("div")
    sectiontag2_heading2.innerHTML = `
    <i class="fa-solid fa-graduation-cap"
    style='
    font-size: 30px;
    background: #565656;
    color: #fabf29;
    border-radius: 100%;
    padding: 10px;
    outline: 3px dotted #fabf29;
    margin-right: 15px;'></i>
    <h1 style="color: #565656; font-size: 30px;">Education</h1>`

    const educationHeader = document.createElement("div")
    educationHeader.innerHTML = `
    <b>
    <h3>Engineering Immersion</h3>
</b>
<span style="margin-left: 15px;">11/2018-06/2018</span>`

    const p2 = document.createElement("p")
    p2.setAttribute("style", 'margin-bottom: 10px;')
    p2.innerText = `Thinkful, Chicago, IL`

    const p3 = document.createElement("p")
    p3.setAttribute("style", 'margin-bottom: 10px;')
    p3.innerText = `Project-focused intensive program with emphasis <br>
on Mongo, Express, React, and JavaScript (MERN) <br>
technical stack.`

    const ul3 = document.createElement("ul")
    ul3.innerHTML = `
<li>
                            <p>
                                Developed a full-stack web application, <br>
                                "RenewU", using React that allows users to <br>
                                explore various aspects of meditation. User's <br>
                                progress is stored on a backend created using <br> Node
                                and MongoDB.
                            </p>
                        </li>
                        <li>
                            <p>
                                Developed a language learning app, "Foodle <br>
                                Phonetics" using spaced repetition and a linked <br>
                                list data structure. React was used to create the <br>
                                front end components while Node and <br>
                                Mongo were used to create a backend that <br>
                                stores user data.
                            </p>
                        </li>
                        <li>
                            <p>
                                Developed a concierge app, "Pley", for <br>
                                individulas looking for curated suggestions <br>
                                when visiting a new place. React was used to <br>
                                develop the front end which includes real-time <br>
                                chat, drag and drop and variety of advanced features. <br>
                                The backend, built using Node, <br> Express, and Mongo, takes <br>
                                advantage of well developed <br> RESTful API, Geospatial searching, <br>
                                and user authentication with JWT.
                            </p>
                        </li>`

    const sectiontag2_footer = document.createElement("div")
    sectiontag2_footer.innerHTML = `
    <b>
    <h3>BA, English</h3>
</b>
<span style="margin-left: 15px;">00/2001-90/2005</span>`

    const p4 = document.createElement("p")
    p4.textContent = "University of california, LosAngles"
    education.append(sectiontag2_heading2,
        educationHeader,
        p2,
        p3,
        ul3,
        sectiontag2_footer,
        p4,
        p4)
    section2_container2.append(education)

    workExperience2.append(sectiontag2_heading, workExperienceHeader2, h4, ul2)
    section2_container.append(workExperience2)

    // const section2_container2 = document.createElement('div')


    sectiontag2.append(section2_container, section2_container2)
    mainEle.append(sectiontag2)

    educationHeader.style.display = "flex"
    sectiontag2_footer.style.display = "flex"
    sectiontag2_footer.style.marginTop = "10px"
    ul3.style.marginLeft = "15px"
    sectiontag2_heading2.style.display="flex"
    // sectiontag2_heading2.style.justifyContent="center"
    sectiontag2_heading2.style.alignItems="center"
    sectiontag2_heading2.style.marginBottom="20px"

}

mainContent()