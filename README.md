![kurakoo-logo](https://user-images.githubusercontent.com/57852378/104982229-3cce1180-5a30-11eb-9d02-3c32878c6a42.png)

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)

**Kurakoo is a website where you can make friends (safely) and learn more from people you trust.** It is an online community of people providing answers to questions, just like 'Quora'. **Kurakoo** is specially catered to meet the needs of school/college students. Students from different colleges/universities around the world visit **Kurakoo to ask questions to a community of people who are always ready to answer them.**


## Project Background💡

In the majority of the colleges and universities across India, thousands of students have many doubts and queries from **"Which branch to choose?"** to **"How to crack interviews?"**. Kurakoo is a one-stop solution for all these problems. It serves as a platform where students can drop in their questions for public view and any person from this vibrant community can help by providing answers to these questions. 


![Issues](https://img.shields.io/github/issues/purnima143/Kurakoo)
![Pull Requests](https://img.shields.io/github/issues-pr/purnima143/Kurakoo)
![Forks](https://img.shields.io/github/forks/purnima143/Kurakoo)
![Stars](https://img.shields.io/github/stars/purnima143/Kurakoo)
[![License](https://img.shields.io/github/license/purnima143/Kurakoo)](https://github.com/purnima143/Kurakoo/blob/master/LICENSE)
![](https://img.shields.io/github/repo-size/purnima143/Kurakoo.svg?label=Repo%20size&style=flat-square)&nbsp;

## Areas of Collaboration 👨‍🏭

Project Managers, Developers, and Designers would be collaborating on various domains like:

-   **UI Prototyping** with figma tool [figma design](https://www.figma.com/file/1gYZlafa8bUZu61ji10unF/Kurakoo?node-id=0%3A1).
    
-   **Front-End Development with ReactJS**
    
-   **Developing Backend APIs with NodeJS and MongoDB**
    
-   **Working on a NoSQL Database Management System**
    
-   **Working on a User-Experience rich platform for a Social Cause**
    

This would be an enriching experience for all Student Developers, Project Managers, and Designers.


## Technology Stack 🛠️

- **Coding Languages**: <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

- **Tools & Technologies**: <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>


- **Project Management Tools**: <img alt="Trello" src="https://img.shields.io/badge/Trello%20-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/> <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/> <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>


## Flow of the site :computer:
Below is a basic idea as to how the website works. We will also be working on adding more features to this project, like sharing of questions, an option to follow people, a feature that allows users to filter and view specific content, etc.

![Kurakoo Website](https://user-images.githubusercontent.com/68965499/119776203-4259cd80-bee2-11eb-8a6e-84ed4ce0ad93.gif)

## General Guidelines :dart:
 - Before working on any issue, kindly go through the instructions given in the [contributing](CONTRIBUTING.md) and readme the file carefully.
 - For each issue, a detailed explanation is mentioned in the issue ticket itself, for more details refer to [figma design](https://www.figma.com/file/1gYZlafa8bUZu61ji10unF/Kurakoo?node-id=0%3A1).

 - While making any component, make sure that the code for the all generalised/common components is kept in [src->components->common](src/components/common) folder.
 - Kindly keep the source code in the [src->components](src/components/) folder while making specific components.
 - Please make sure to adhere to the folder structure of the project.

We will also be working on adding more features to this project.

## Setup Guidelines
Clone the repository -
```
git clone https://github.com/purnima143/Kurakoo.git
```

### Backend

1. Run `cd server` on your CLI.

2. Create a `.env` file and paste the MONGO_URL in the given format

    ```
    MONGO_URL = <your_url>
    ```
     or

  We have added a string for the local mongoDB connection inside index.js `mongodb://localhost:27017/kurakooDB`

    _NOTE: To get the MONGO_URL, take a look at this article for reference [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)_

3. Install the dependencies by running
    ```
    npm install
    ```

4. Run the server
    ```
    npm run server
    ```

    Link for the screenshots, how to setup backend locally are kept in
    [assets->backend](assets/backend) folder.

### Frontend

1. Run `cd client` on your CLI.

2. Install the dependencies by running
    ```
    npm install
    ```

3. Run the server
    ```
    npm start
    ```
_NOTE: To run the Frontend side of the application is recommended to run the backend server too._

## Start Frontend & Backend simultaneously

 1. Navigate to the root folder i.e.  Kurakoo.git

 2. Install the dependencies by running

    ```
    npm install
    ```

 3. Start Frontend & Backend simultaneously

    ```
    npm run dev
    ```

    

## Open source contest
Girlscript Summer of Code 2021: The GirlScript Summer of Code is a 3 month long Open Source program conducted every summer by the GirlScript Foundation. It was started in 2018 to help beginners to get started with Open Source Development while encouraging diversity.

![0_hvZkvLGPR4t6TFhS](https://user-images.githubusercontent.com/57852378/108583937-3ef2fb00-7363-11eb-9239-a274fbe00bdd.png)


## Learning Resources 🧰


- [Figma for Developers](https://www.youtube.com/playlist?list=PL7e8VJ_ZN6epq-oiYOufiuPI-fpDC2Mby)
- [Git Documentation](https://git-scm.com/docs)
- [GitHub Guides](https://guides.github.com/)
- [How to think in react](https://www.youtube.com/watch?v=YJPSR9dEQV8&t=17s)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Routing Video](https://www.youtube.com/watch?v=Law7wfdg_ls&t=1778s)
- [Top 5 Skills you must read before working with react](https://www.geeksforgeeks.org/top-5-skills-you-must-know-before-you-learn-reactjs/)


-   [Complete Intro to React, v5](https://frontendmasters.com/courses/complete-react-v5/)
    
-   [Intermediate React](https://frontendmasters.com/courses/intermediate-react/)
    
-   [Introduction to MongoDB](https://frontendmasters.com/courses/mongodb/)
    
- [API Design in Node.js (using Express & Mongo)](https://frontendmasters.com/courses/api-design-nodejs/using-the-mongo-with-node/)

## License📜

[MIT License](https://github.com/purnima143/Kurakoo/blob/master/LICENSE)




<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Project Admin 📆

<td align="center"><img src="https://avatars1.githubusercontent.com/u/57852378?v=4?s=100" width="100px;" alt=""/> 
	<b>Purnima Sharma</b>
</td>

## Project Mentors 👨‍💻
<table>
<tr>
    <td align="center"><a href="https://www.linkedin.com/in/maw1a/"><img src="https://avatars.githubusercontent.com/u/48566609?s=460&u=47e205d9f0802abd125b2410d9bc12cbcd10bd1b&v=4" width="100px;" alt=""/><br /><sub><b>Ahmed Mawia</b></sub></a><br /><a href="https://github.com/maw1a" >  <img src="https://user-images.githubusercontent.com/57852378/93742503-d664ee00-fc0b-11ea-8f75-db2448ff01f1.png"  width="40" height="40"/>
</a> </td>
    <td align="center"><a href="https://www.linkedin.com/in/ir2010/"><img src="https://avatars.githubusercontent.com/u/46022116?s=460&u=5a5db16a4d00686752dff0cd7b3c7e03c1e956df&v=4" width="100px;" alt=""/><br /><sub><b>Ishu Raj</b></sub></a><br /><a href="https://github.com/ir2010" >  <img src="https://user-images.githubusercontent.com/57852378/93742503-d664ee00-fc0b-11ea-8f75-db2448ff01f1.png"  width="40" height="40"/>
</a></td>
   <td align="center"><a href="https://www.linkedin.com/in/vivekkumarjaviya/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFXupHLPz5GOA/profile-displayphoto-shrink_800_800/0/1620704251868?e=1626307200&v=beta&t=JF_Xc9XBCsX1hJBIuwmkX9NjDH6Piq9KfUH2PPzydLQ" width="100px;" alt=""/><br /><sub><b>Vivekkumar Javiya</b></sub></a><br /><a href="https://github.com/codewithvk" >  <img src="https://user-images.githubusercontent.com/57852378/93742503-d664ee00-fc0b-11ea-8f75-db2448ff01f1.png"  width="40" height="40"/>
</a></td>

  </tr>
</table>



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<table>
	<tr>
		<td>
			<a href="https://github.com/purnima143/Kurakoo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=purnima143/Kurakoo" />
</a>
		</td></tr></table>


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


