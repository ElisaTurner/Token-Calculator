# CTS2852C - Lab

|Name|Date|Lab #|
| -------- | -- | -- |
| Elisa Turner | September 5 2021 3:15 PM | Lab 2 |

## Table of contents

1. [Instructions](#Instructions)
1. [Projects](#Projects)
1. [Issues](#Issues)
1. [Changes](#Changes)
1. [Requirements](#Requirements)

## Instructions

Before cloning this repository to a local repository, complete the following steps in the remote repository on the GitHub web site:

1. Create a project. See [Projects](#Projects) below.
1. Open two to three initial issues. See [Issues](#Issues) below. E.g. `Create index.html page`
1. Double check that the issues have been opened to the **To do** column in the selected project board.

After cloning this remote repository from GitHub to a local repository for the practice lab, complete the following steps in the local repository:

1. Set your user name and email using the `git config` command. E.g. `git config user.name "your name"` and `git config user.email "your email address"`. Check that the correct username and email is set using the `git config -l` command. This needs to be done every time the remote repository is cloned to a local repository.
1. Create a branch named **develop** off the main branch and push the branch to the remote repository. E.g. `git push -u origin develop` Creation of files for the lab should not start until the **develop** branch has been pushed to the remote repository.
1. Checkout the **develop** branch.
1. Edit this README.md file, then add your name, the current date and the lab number at the top. Save the change, stage the change and then commit the change.
1. Push the changes to the remote repository. E.g. `git push`

To keep the **main** and **develop** in sync, complete the following steps in the local repository:

1. Checkout the **main** branch. E.g. `git checkout main`
1. Merge the **develop** branch into the **main** branch. E.g. `git merge develop`
1. Push the changes to the remote repository. E.g. `git push`

## Projects

### Create a project

1. When in the repository on the GitHub web site, select the `Projects` link.
1. Choose the `Create a project` button.
1. Enter a name for the project. e.g. Kanban
1. Select `Automated kanban` as the template.
1. Choose the `Create project` button.

See [About project boards](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) for more help.

## Issues

### Open an Issue

1. In the repository, select the `Issues` tab.
1. Choose `New issue`.
1. Enter a `Title` for the issue.
1. Enter details in the `Write` tab.
1. From the **Projects** section, select the previously created project. See [Adding issues and pull requests to a project board](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board) for more help.
1. Choose `Submit new issue`.

### Assign an Issue

1. In the repository, select the `Issues` tab.
1. Select the issue that needs to be assigned.
1. Choose the `Assignees` option.
1. Select your name as the assignee to add to the issue.

### Filter issues assigned to you

1. In the repository, select the `Issues` tab.
1. Choose the `Assignee` drop down.
1. Select your username from the list.

### Close an Issue

1. In the repository, select the `Issues` tab.
1. Select the issue that needs to assigned to one or more group members.
1. Enter closing details in the `Write` tab.
1. Choose `Close and comment`.

### Reopen a Closed an Issue

1. In the repository, select the `Issues` tab.
1. Ensure `Closed` issues are displayed.
1. Select the issue that needs to be reopened.
1. Enter reopening details in the `Write` tab.
1. Choose `Reopen issue`.

See [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) for more help.

## Changes

Steps to make changes

1. Check that the correct username and email is set using the `git config -l` command.
1. Checkout the **develop** branch and execute a `git pull` to get the latest code from the remote repository.
1. Create a new branch and checkout the new branch.
1. Add, modify and/or delete a file(s).
1. When the changes are complete:
    1. test the changes
    1. add the file(s) to the staging area
    1. commit the changes
    1. checkout the **develop** branch
    1. execute a `git pull` to get the latest code from the remote repository
    1. merge the changes to the **develop** branch from the new branch previously created
        1. resolve merge conflicts if there are any
        1. test that the code still works after the merge conflict is fixed
        1. add the file(s) fixed from the merge conflict to the staging area
        1. commit the fixed file(s)
    1. push the **develop** branch to the remote repository
    1. create a pull request on the remote repository (GitHub) from the **develop** branch to the **main** branch.
    1. review the pull request and merge to the main branch on the remote repository
1. Delete the branch previously created for coding the changes from the local and remote repositories.

Repeat these steps each time changes are to be made. **NOTE**: Ensure that a `git pull` is regularly executed while checked out on the **develop** branch to get any changes that have been pushed to the develop branch.

## Requirements

Complete the tasks listed in the lab discussion topic within the D2L shell for this class.