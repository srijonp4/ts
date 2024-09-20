## Git commands used

## 1. `git init`

## 2. `git add .`

## 3. `git reset .\src\binarySearch.ts` : remove the file from the staging area

## 4. `git commit -m "initial commit" ` : commit with message

---

## 5. `git branch -M main` : 👇Explaination👇

The command `git branch -M main` is used to rename the current branch to `main`, and the `-M` flag indicates that the rename should be forced even if a branch named `main` already exists.

### Breakdown of the Command:

- **`git branch`**: This is the Git command used for managing branches.
- **`-M`**: This option stands for "move/rename" and is a shorthand for `--move --force`. It allows you to rename a branch, and if the target branch name already exists, it will overwrite it without prompting for confirmation. This is useful when you want to ensure the renaming takes place regardless of whether a branch with that name exists.

- **`main`**: This is the new name you are assigning to the current branch.

### Usage Context:

- If you run `git branch -M main` while on a branch named `feature-xyz`, it will rename `feature-xyz` to `main`. If a branch named `main` already exists, it will be replaced.

### Example:

1. Suppose you are on a branch called `development` and want to rename it to `main`:

   ```bash
   git branch -M main
   ```

2. If `main` already exists, this command will overwrite it. If it doesn't, your current branch will simply be renamed to `main`.

### Caution:

Using the `-M` flag can lead to data loss if you overwrite a branch that has unmerged changes. Always ensure that overwriting is your intention before using this command.

---

## 6. `git remote add origin git@github.com:srijonp4/ts.git`

## 7. `git push -u origin main` : 👇Explaination👇

The command `git push -u origin main` is used to upload your local `main` branch to a remote repository, typically on platforms like GitHub or GitLab. Here's a breakdown of the components of this command:

### Breakdown of the Command:

- **`git push`**: This is the command used to upload local changes to a remote repository. It sends your commits from the specified branch to the remote branch.

- **`-u`**: This flag stands for "set upstream." It tells Git to set the `origin/main` branch as the upstream tracking branch for your local `main` branch. This means that future `git push` and `git pull` commands can be executed without specifying the remote branch explicitly. Git will know to push or pull from `origin/main` by default.

- **`origin`**: This refers to the name of the remote repository. By convention, the first remote repository you add is called `origin`. It’s a shorthand for the URL of the remote repository.

- **`main`**: This specifies the local branch you want to push to the remote. In this case, you are pushing the `main` branch.

### What Happens When You Run This Command:

1. Git checks if there are any commits on your local `main` branch that are not in the `origin/main` branch.
2. If there are commits, Git uploads those changes to the remote repository (`origin`).
3. The `-u` flag sets up tracking for the local `main` branch with the remote `main` branch, so subsequent `git push` and `git pull` commands will default to this branch.

### Example Scenario:

If you've made some changes on your local `main` branch and want to push those changes to the remote repository:

1. You run:
   ```bash
   git push -u origin main
   ```
2. Git pushes the changes to `origin/main` and sets up the tracking relationship.

### Summary:

## Using `git push -u origin main` simplifies future pushes and pulls for that branch by establishing a direct link between your local and remote branches.

## 8. `git branch`

## 9. `git checkout -b skeleton ` : 👇Explanation👇

- `git checkout -b`: This part of the command creates a new branch and switches to it immediately.
- `skeleton`: This is the name of the new branch you are creating.

## 10. `git add .`

## 11. `git commit -m "message"`

## 12. `git push origin skeleton`
