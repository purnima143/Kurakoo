# API DOCS
**1. Signup**
* **URL**
    `/api/signup`

* **METHOD**
    `POST`

* **PASSED OBJETCS** <br />
    `firstName [required],` <br />
    `lastName [required],` <br />
    ` password [required],` <br />
    ` confirmPassword [required],` <br /> 
    ` email [required],` <br />
    ` userName,` <br />
    ` year,` <br />
    ` collegeName,` <br />
    ` contactNumber`

* **Success Response**<br />
    * **Code:** `201` <br />
      **Message:** `User Created Succesfully...!` <br />
      **data:** `{ token: "token generetaed" }`

* **Error Response**
    * **Code:** `400` <br />
      **Message:** `User is already registered` <br />

* **Required Filed**
    * **Auth/ Admin Auth: false/false**

