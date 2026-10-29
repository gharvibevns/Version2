# GharVibe Interio — Website starter

A responsive, static website starter for GharVibe Interio, Varanasi. Built with HTML, CSS and JavaScript so it can be published on GitHub Pages without a build step.

## Included
- Home hero and brand story
- All 18 service categories
- All 20 product categories
- TV unit feature section
- Gallery with category filters and 12 inspiration images
- 9-step design-to-installation process
- About section
- Contact form that prepares an enquiry in WhatsApp
- Floating WhatsApp button
- Responsive mobile navigation
- Basic SEO title and description

## Before publishing — important
1. Open `script.js` and replace `WHATSAPP_NUMBER="919876543210"` with your real WhatsApp number in international format, digits only.
2. In `index.html`, replace the sample phone and email text/links with the real business contact details.
3. Review all copy and image choices. The gallery images are inspiration/reference images, not proof of completed client work.
4. The contact form opens WhatsApp; it does **not** save enquiries to a database or email them automatically.
5. The `/admin` dashboard and secure login/backend are not included in this static starter. They require a separately hosted API and database.

## Publish on GitHub Pages
1. Sign in to GitHub and create a new **public** repository named `gharvibe-interio` (or your preferred name).
2. Extract this ZIP on your computer.
3. Open the repository page and choose **Add file → Upload files**.
4. Upload the contents of this folder (`index.html`, `styles.css`, `script.js`, `README.md`), not the outer folder itself.
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch `main` and folder `/ (root)`, then click **Save**.
9. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.

## Important limitations
- GitHub Pages hosts static files only. It does not run FastAPI, Python, or MongoDB.
- Do not upload `.env` files, credentials, private customer data, or API keys to a public repository.
- Images and Google Fonts load from third-party services, so those require an internet connection.
- A custom domain is optional; you do not need to buy one to test the site.
