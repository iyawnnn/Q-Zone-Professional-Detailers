# Q-Zone Professional Detailers

## Installation & GitHub Setup

Follow these steps to set up the project on your machine and collaborate with the team.

---

### 1. Install Angular CLI

Install the latest Angular CLI globally:

```bash
npm install -g @angular/cli@latest
```

Verify installation:

```bash
ng version
```

You should see Angular CLI 21.x (or latest) along with Node and npm versions.

---

### 2. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/iyawnnn/Q-Zone-Professional-Detailers.git
cd Q-Zone-Professional-Detailers
```

---

### 3. Branch Setup

The project uses **two main branches**:

* `dev` → for active development/testing
* `main` → stable, production-ready code

From now on, use `dev` for all development/testing and merge into `main` only when code is stable.

---

### 4. Switch to the Desired Branch

For development/testing:

```bash
git checkout dev
```

For stable/production:

```bash
git checkout main
```

---

### 5. Install Dependencies

Install all project dependencies:

```bash
npm install
```

---

### 6. Running the Project

For development/testing (with live reload):

```bash
ng serve
```

Open your browser at [http://localhost:4200](http://localhost:4200/).

---

### 7. Workflow for Making Changes

1. Pull the latest changes from `dev` before starting new work:

```bash
git checkout dev
git pull origin dev
```

2. Make your changes and commit:

```bash
git add .
git commit -m "Add feature X"
```

3. Push to `dev`:

```bash
git push origin dev
```

4. Open a **Pull Request (PR)** on GitHub to merge `dev` into `main`:

   * Go to your repository on GitHub.
   * Click **Compare & pull request**.
   * Add a description of your changes.

5. Review & merge the PR:

   * Only the repository owner should merge into `main` once the changes are stable.

6. Update your local `main` branch:

```bash
git checkout main
git pull origin main
```

