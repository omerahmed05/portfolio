import Proj1 from "../assets/ATS-Icon.jpg";
import Proj2 from "../assets/portfolio-icon.jpg";
import Proj3 from "../assets/autoprint.jpg";

export const ProjectList = [
  {
    name: "Discord ATS Resume Scanner Bot",
    image: Proj1,
    skills: "Python, NLTK, JSON, Git, Git Bash",
    githubUrl: "https://github.com/omerahmed05/Discord-Resume-Grader-Bot",
    youtubeUrl: "https://www.youtube.com/embed/z1FrYoyHqrE",
    description: (
      <div>
        As part of the Virginia Tech 2023 Hackathon under the VTHax organization, our team of three developed a cutting-edge ATS (Applicant Tracking System) Resume Scanner Discord bot. Our aim was to address the common frustration among job seekers with the lack of truly insightful resume feedback, often limited to mere template suggestions.
        <br/><br/>
        🔍 Project Inspiration
        <br/><br/>
        Our inspiration stemmed from recognizing the repetitive cycle where job seekers receive generic advice to switch templates without genuine insight into how to improve their resumes effectively.
        <br/><br/>
        💡 Innovative Approach
        <br/><br/>
        My primary focus in the project was on the back-end development, specifically in implementing the resume parser. The bot's functionality includes the conversion of PDF resumes into text files, followed by the extraction of information using natural language processing techniques.
        <br/><br/>
        🎯 Key Features
        <br/><br/>
        Comprehensive Feedback: Our bot goes beyond template suggestions, offering in-depth analysis of a candidate's resume.
        <br/><br/>
        Skills Evaluation: Using advanced algorithms, we evaluate the presentation of technical, academic, and social skills on the resume.
        <br/><br/>
        Discord Integration: Seamlessly integrated into Discord, the bot provides instant feedback, making the process efficient and accessible.
        <br/><br/>
        🌐 Impact & Future Scope
        <br/><br/>
        Our project addresses a real need in the job-seeking community by providing actionable feedback to enhance resumes effectively. Moving forward, we envision expanding the bot's capabilities to cover a broader range of resume aspects, ensuring even more comprehensive assistance to users.
        <br/><br/>
        👨‍💻 My Contribution
        <br/><br/>
        I took the lead on developing the back-end functionalities, including the crucial resume parsing feature. By leveraging natural language processing, I facilitated the extraction of key information from resumes, enabling our bot to deliver insightful feedback.
        <br/><br/>
        This project not only showcases my technical proficiency but also shows my commitment to solving real-world problems through innovative solutions.
        <br/><br/>
        Collaborators: Omer Ahmed (VT CS '26), Muhammad Nabil (VT CS '27), Jonathon Woodbury (VT CS '27)
      </div>
    )
  },
  {
    name: "Personal Portfolio Website",
    image: Proj2,
    skills: "ReactJS, NodeJS, JavaScript, Git, HTML, CSS, NPM, Yarn, JSON",
    githubUrl: "https://github.com/omerahmed05/portfolio",
    description: (
      <div>
        I built a dynamic personal portfolio website to showcase my work, creativity, skills, and projects beyond the confines of a traditional resume 🎨. 
        <br/><br/>
        This platform embodies my personal brand, offering visitors a comprehensive view of my expertise, professional journey, and also a little spill about myself!
        <br/><br/>
        It also serves as a powerful tool for career advancement, enabling me to stand out and open doors to new opportunities 🚀.
      </div>
    )
  },

  {
  name: "AutoPrint Debugging Tool",
    image: Proj3,
    skills: "JavaParser, Java",
    githubUrl: "https://github.com/minhyukko/AutoPrint",
    pdfUrl: "https://icse2024-demo.hotcrp.com/doc/icse2024-demo-paper46.pdf?cap=hcav46TPULLoeFjjniYAiVmpYrpKCA",
    description: (
      <div>
        Debugging is one of the most difficult and tedious tasks for software engineers. While various tools and techniques have been introduced to automate debugging tasks, most programmers admit that they use print statements to debug their code. 
        <br/><br/>
        That is, they manually add code to print values stored in a variable to verify if the code is executing as expected, or even a gibberish string to make sure a certain section of the code is reached. However, this process can be time-consuming and error-prone, especially in large and complex programs. 
        <br/><br/>
        To that end, we introduce AutoPrint, a tool that automatically inserts print statements on behalf of programmers to debug Java code.  This tool also removes inserted print statements once users finish debugging, eliminating the need for manual removal.
        <br/><br/>       
        We conduct a focus group to elicit feedback from programmers on AutoPrint. This tool will help developers save time and effort in print statement debugging. 
        <br/><br/>
        However, ideally, programmers should adopt automated debugging tools to debug their code in a more efficient manner. Thus, we plan to incorporate functionality in AutoPrint to encourage debugger usage in the future.
        <br/><br/>
        If you would like to learn more about this project, please check out our paper!
        <br/><br/>
        Author: Minhyuk Ko (Computer Science Ph.D. Student @ Virginia Tech)
        <br/><br/>
        Collaborators: Dr. Chris Brown (Assistant Professor @ Virginia Tech, Director of Code World, No Blanket Lab), Omer Ahmed (VT CS '26)
      </div>
      )
  }
];
