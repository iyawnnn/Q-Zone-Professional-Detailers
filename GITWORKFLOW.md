# Q-Zone Git Workflow Guide

This guide explains how the team should work with branches, push changes, and create pull requests to keep development organized using only `dev` and `main` branches.

---

## 1. Branch Structure

* `main` → stable, production-ready code.
* `dev` → active development and testing.

**Rule:** All development work happens in `dev`. `main` is only updated after `dev` is stable and tested.

---

## 2. Workflow for Working Locally

### Step 1: Start from the latest `dev`

```bash
git checkout dev
git pull origin dev
```

### Step 2: Work on your changes

* Edit files and test locally:

```bash
ng serve
```

* Commit your changes:

```bash
git add .
git commit -m "Describe your changes"
```

### Step 3: Push your changes to `dev`

```bash
git push origin dev
```

---

## 3. Pull Request to `main`

1. Once `dev` is tested and stable, create a Pull Request on GitHub:

   * Base branch = `main`
   * Compare branch = `dev`
   * Add a descriptive title and details
2. The repository owner or maintainer reviews and merges the PR into `main`.

---

## 4. Updating Local Branches

* After a PR is merged into `main`, update your local branches:

```bash
git checkout main
git pull origin main
git checkout dev
git pull origin dev
```

* Always pull the latest `dev` before starting new work.

---

## 5. Summary

1. Pull latest `dev` before starting work.
2. Make changes and test locally.
3. Commit and push to `dev`.
4. Open a Pull Request from `dev` → `main` when stable.
5. Repository owner/maintainer merges PR into `main`.
6. Update local branches after merging.

This workflow ensures that `main` remains stable and the team collaborates efficiently without using additional feature branches.
