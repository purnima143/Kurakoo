# Contributing to Kurakoo

## The following would remain the general workflow for issue allotement:

1. Issues will be created on GitHub.
2. The participant should comment on the issue he/she is interested to work on, mentioning the same.
3. One of our team members will assign the issue to the participant who commented. 
   (Please note that assignment will be on a first come first serve basis. One issue can be reserved by one participant at a time.)
4. Once the participant is assigned an issue, he/she will be given a deadline under which they need to create a PR which solves that issue.
5. If they fail to do the same, then the issue will be unassigned and we'll wait for someone else to take it up.

## Now, follow the steps below to get started on develpoing the solutions immediately!

- **Fork this repo**: You'll see a Fork button on the top right against the name of this repository. This creates a copy of this repository in your repositories collection.

![Fork Example](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

- **Open the forked repository**: Navigate to your profile find the repository

  `github.com/<your_github_username>/BuildWithGSBlr-Raahat`

- **Clone the repository**: Clone the repository in your local machine by using the below CLI command

  `git clone https://github.com/<your-username>/BuildWithGSBlr-Raahat`
  
- **Move to the directory**: Move to the directory by using the below CLI command
 
  `cd BuildWithGSBlr-Raahat`

- **Create a new branch**: Always create a new branch from the already existing `develop` branch. Follow proper naming convention before creating your own branch. The example of the naming is as follows

    - **Example**: If you want to create a pull request for solving the issue #2, then your branch name should be `issue-2`.
    
  Now, execute the following command to create your own branch from the `develop` branch
  
    ```
    git checkout develop
    git checkout -b <your-branch-name>
    ```

- **Update the changes to repo**: Add your solution in the new branch. 

- **To stage the file(s)** , use the following CLI command

  `git add .`

- **Commit the file(s)**: For locally cloned repository, use the following CLI command to commit your file(s).

  `git commit -m "<your-message>"`

  For GitHub web, simply add the commit message and description at the bottom of the page to add the new file.(Please use an appropriate commit message and follow this git commit message guidelines)
  
- **Push the file(s)**: For locally cloned repository, use the following CLI command to push your file(s).

  `git push -u origin <you-branch>`.

- **Create pull request**: Please create a Pull Request(PR) from GitHub to the `develop` branch. If you are new to creating pull requests, watch the video for reference. [Your First GitHub Pull Request (in 10 Mins)](https://www.youtube.com/watch?v=dSl_qnWO104)

  For GitHub web, simply move over to the original repository and click on New Pull Request and compare forked repositories. Provide appropriate description and VOILA!

  ![Pull Request](assets/images/pr.png)

  ![Pull Request and Compare](assets/images/pr_compare.png)

- **PR Review**: Once you have created the PR, it will be reviewed soon by the maintainers of the repository


If there are any changes suggested by the reviewers, do make the same and follow to steps to update:

- stage the changes, using command: `git add .`.
- commit the changes, using command: `git commit -m "Commit Message"`.
- rebase the branch, using command: `git rebase master`.
- squash the commits, using command: `git stash`.
- push the changes, using command: `git push -u origin <your-branch-name>`.

The PR with correct and optimised solution, which satisfies the deadline criteria, will be merged soon😄

> If you have successfully followed these steps, you're one step closer to being a proficient developer. But don't stop, continue making contributions and improve your chances every month!

> Let's build a strong community of kind developers! 👭👫👬

To know more about the program and it's guidelines do check [README.md](README.md) file.


That's it! Thank you for your contribution! 😃

