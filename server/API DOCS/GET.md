# GET API DOCS
**1. Get All Questions**
* **URL**
    `/api/allQuestions`

* **METHOD**
    `GET`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `


* **Success Response**<br />
    * **Code:** `201` <br />
      **data:** `{ questions: [ displaying all question data] }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `authorization required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**


**2. Get answers**
* **URL**
    `/api/getAnswers/:id`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ answers: [ displaying all answers to a particular question] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**3. Get specific questions**
* **URL**
    `/api/searchQuestions`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ questions: [ displaying all questions related to the search] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**4. Get All Spaces**
* **URL**
    `/api/getSpaces`

* **METHOD**
    `GET`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `


* **Success Response**<br />
    * **Code:** `201` <br />
      **data:** `{ Spaces: [ displaying all available spaces] }`

* **Error Response**
    * **Code:** `401` <br />
      **Message:** `authorization required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**5. Get All Spaces**
* **URL**
    `/api/getSpacebyId`

* **METHOD**
    `GET`

`**NOTE**: in the headers you have to authorize token and you can get token by signin API `


* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ Spaces: [ displaying all spaces created by the specific user] }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `authorization required` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**


**6.ADMIN: Get All users**
* **URL**
    `/api/admin/users`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ users:[array of all the users] }`

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**7.ADMIN: Get All questions**
* **URL**
    `/api/admin/questions`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ questions:[array of all the questions] }`

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**8.ADMIN: Get All answers**
* **URL**
    `/api/admin/answers`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{ answers:[array of all the answers] }`

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**



**6. ADMIN: Get user by Id**
* **URL**
    `/api/admin/user/:id`

* **METHOD**
    `GET`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{user}` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `User not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**7. ADMIN: Get question by Id**
* **URL**
    `/api/admin/question/:id`

* **METHOD**
    `GET`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{question}` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `Question not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**


**8. ADMIN: Get answer by Id**
* **URL**
    `/api/admin/answer/:id`

* **METHOD**
    `GET`

* **URL params**
    `id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{answer}` <br />

* **Error Response**
    * **Code:** `404` <br />
      **Message:** `Answer not found` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : True**

**9. upvote answer**
* **URL**
    `/api/upvote/:id`

* **METHOD**
    `GET`

* **URL params**
    `particular answer id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{message: "upvoted!"}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**10. downvote answer**
* **URL**
    `/api/downvote/:id`

* **METHOD**
    `GET`

* **URL params**
    `particular answer id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{message: "downvoted!"}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False** 

**11. get upvoted answers** 
* **URL**
    `/api/getUpvotedAnswers`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{upvotedAnswers: [array of answers upvoted by the user]}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**12. search answers**
* **URL**
    `/api/searchAnswers`

* **METHOD**
    `GET`

* **query params (optional)**
    `createdBy`,
    `tags`,
    `questionId`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{answers: [array of answers with filter applied as per the query string]}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False** 

**13. get comment by Id** 
* **URL**
    `/api/getCommentById/:id`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `comment found!`
      **data:** `{comment}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `invalid comment id` <br />

    * **Code:** `400` <br />
      **Message:** `comment does not exist!` <br />

    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**14. get my comments** 
* **URL**
    `/api/getMyComments`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `comments found!`
      **data:** `{comments: [array of comments]}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `you have not commented on any answer!` <br />
    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**15. get comments for answer** 
* **URL**
    `/api/getCommentsForAnswer/:id`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `comments found!`
      **data:** `{comments: [array of comments]}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `invalid answer id` <br />

    * **Code:** `400` <br />
      **Message:** `invalid answer id, no such answer exists in the database!` <br />
    
    * **Code:** `400` <br />
      **Message:** `no comments for this particular answer yet!` <br />

    * **Code:** `400` <br />
      **Message:** `something went wrong` <br /> 

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**16. upvote question**
* **URL**
    `/upvoteQuestion/:id`

* **METHOD**
    `GET`

* **URL params**
    `particular question id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{message: "question upvoted!!"}`
    
    * **Code:** `200` <br />
      **data:** `{message: "already upvoted!!"}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**17. downvote question**
* **URL**
    `/upvoteQuestion/:id`

* **METHOD**
    `GET`

* **URL params**
    `particular question id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{message: "downvoted!"}`

    * **Code:** `200` <br />
      **data:** `{message: "already downvoted!"}`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**18. get upvoted questions** 
* **URL**
    `/api/getUpvotedAnswers`

* **METHOD**
    `GET`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{upvotedAnswers: [array of questions upvoted by the user]}`

* **Error Response** 

    * **Code:** `400` <br />
      **Message:** `you haven't upvoted any question!` <br />

    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**19. get upvoted question** 
* **URL**
    `/getUpvotedQuestion/:id`

* **METHOD**
    `GET`

* **URL params**
    `question id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{upvotedQuestion}`

* **Error Response**

    * **Code:** `400` <br />
      **Message:** `invalid question id!` <br />
    
    * **Code:** `400` <br />
      **Message:** `no upvoted question with entered id exists!` <br />
    
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br /> 

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**20. get upvoted answer** 
* **URL**
    `/getUpvotedAnswer/:id`

* **METHOD**
    `GET`

* **URL params**
    `answer id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **data:** `{upvotedAnswer}`

* **Error Response**

    * **Code:** `400` <br />
      **Message:** `invalid answer id!` <br />
    
    * **Code:** `400` <br />
      **Message:** `no upvoted answer with entered id exists!` <br />
    
    * **Code:** `400` <br />
      **Message:** `something went wrong` <br /> 

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**21. get answer stats**
* **URL**
    `/api/getAnswerStats/:id`

* **METHOD**
    `GET`

* **URL params**
    `particular answer id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `answer statistics!`
      **data:** `{statistics: {"views": answer.views, "upvotes": answer.upvotes, "downvotes": answer.downvotes}}`

* **Error Response**

    * **Code:** `400` <br />
      **Message:** `answer does not exist!` <br />
    
    * **Code:** `400` <br />
      **Message:** `invalid answer id!` <br />

    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**

**22. get question stats**
* **URL**
    `/api/getQuestionStats/:id`

* **METHOD**
    `GET`

* **URL params**
    `particular question id`

* **Success Response**<br />
    * **Code:** `200` <br />
      **Message:** `quetsion statistics!`
      **data:** `{statistics: {"views": question.views, "upvotes": question.upvotes, "downvotes": question.downvotes, "answerCount": answerCount}}`

* **Error Response**

    * **Code:** `400` <br />
      **Message:** `question does not exist!` <br />
    
    * **Code:** `400` <br />
      **Message:** `invalid question id!` <br />

    * **Code:** `400` <br />
      **Message:** `something went wrong!` <br />

* **Required Filed**
    * **Auth Need : True**
    * **Admin Auth Need : False**