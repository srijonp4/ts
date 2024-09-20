## How to pull the skeleton branch ??

answer :

To clone only the `skeleton` branch from a remote repository, you can use the following command:

### 1. **Clone the Repository with a Specific Branch**:

Use the `--single-branch` option along with `--branch` to specify the branch you want to clone:

```bash
git clone --single-branch --branch <branch-name> <repository-url>
```

```bash
git clone --single-branch --branch skeleton git@github.com:srijonp4/ts.git
```

### Explanation:

- **`git clone`**: This command is used to clone a repository.
- **`--single-branch`**: This option tells Git to clone only the specified branch, not all branches.
- **`--branch skeleton`**: This specifies that you want to clone the `skeleton` branch.
- **`<repository-url>`**: Replace this with the URL of the remote repository you want to clone.

### Example:

If your repository URL is `https://github.com/username/repo.git`, the command would look like this:

```bash
git clone --single-branch --branch skeleton https://github.com/username/repo.git
```

### After Cloning:

Once the cloning process is complete, you’ll have a local copy of the `skeleton` branch without any other branches.
