# Deploying to Netlify

Since your code is already pushed to GitHub, the easiest and best way to deploy is using Netlify's GitHub integration. This sets up **Continuous Deployment**, meaning every time you push changes to your `main` branch, Netlify will automatically rebuild and update your live site.

## Step 1: Sign up / Log in to Netlify
1. Go to [Netlify.com](https://www.netlify.com/).
2. Click **Sign Up** or **Log In**.
3. Choose **Sign up with GitHub** (recommended since your code is there).

## Step 2: Import your Repository
1. Once logged in to the Netlify dashboard, click the **"Add new site"** button.
2. Select **"Import an existing project"**.
3. Choose **GitHub** as your Git provider.
4. You may need to authorize Netlify to access your GitHub account.
5. Search for and select your repository: `saurabh_portfolio`.

## Step 3: Configure Build Settings
Netlify should automatically detect that this is a Vite/React project, but double-check these settings:

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

> **Note:** If these aren't automatically filled, enter them manually.

## Step 4: Deploy
1. Click the **"Deploy site"** button.
2. Netlify will start building your site. You can watch the deployment logs to see the progress.
3. Once finished (usually takes less than a minute), you will see a green "Published" status.
4. Netlify will assign a random URL (e.g., `silly-name-123456.netlify.app`).

## Step 5: Custom Domain (Optional)
1. Go to **Domain Settings** in your site dashboard.
2. Click **Options** > **Edit site name** to change the `silly-name` to something like `saurabh-portfolio.netlify.app`.
3. If you own a custom domain (e.g., `saurabhkhule.com`), you can add it here by clicking **"Add custom domain"** and following the instructions.

## Troubleshooting
- **Page Not Found on Refresh**: If you navigate to a page and refresh, you might get a 404 error. To fix this, you need to tell Netlify to redirect all requests to `index.html` so React Router can handle them.
    - Create a file named `_redirects` in your `public` folder (or create the `public` folder if it doesn't exist, though Vite usually has one).
    - Add this line to the file:
      ```
      /*  /index.html  200
      ```
    - Push this change to GitHub, and Netlify will redeploy automatically.

## Updates
Whenever you want to update your site:
1. Make changes in your code.
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. Netlify will detect the push and update your site automatically!
