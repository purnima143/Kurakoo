# API DOCS
**1. Signup**
* **URL**
    `/api/signup`

* **METHOD**
    `POST`

* **PASSED OBJETCS**
    `firstName [required] , lastName [required], password [required], confirmPassword [required],` 
    ` email [required], userName, year, collegeName, contactNumber`

* **Success Response**<br />
      * **Code:** 201 <br />
      **Message:** User Created Succesfully...! <br />
    **data:** `{ token: "token generetaed" }`

* **Error Response**
    * **Code:** 400 <br />
      **Message:**User is already registered <br />

* **Required Filed**
    * **Auth/ Admin Auth: false/false**

