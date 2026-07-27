# Jawharat Al Shami — bilingual butchery website

This is a complete single-page website starter for a business group with five showrooms. It works without a database or server and is designed so the business information is stored in one simple file.

## Before publishing

1. The business name, branch photos, English and Arabic copy, and listed phone numbers have already been added.
2. In `content.js`, add each branch's opening hours when they are confirmed.
3. Replace the temporary Google Maps search links with the exact shared Google Maps pins when available.

### Adding your own photos

The five supplied branch photos are already saved in the `images` folder. To add or replace a photo, put it in this folder, for example `images/dubai-showroom.jpg`, and change the matching `image:` line in `content.js` to:

```js
image: "images/dubai-showroom.jpg"
```

Use wide, bright photos at least 1600 pixels wide. Keep each file below about 1 MB so the site opens quickly.

## Easiest professional hosting and editing setup

**Recommended: GitHub + Netlify.** It is reliable, gives the business a secure website address, and keeps every change saved in history.

1. Create a free GitHub account and a new private repository, then upload these files.
2. Create a free Netlify account, choose **Add new site → Import an existing project**, then connect the GitHub repository.
3. Click **Deploy site**. Netlify will give a temporary address immediately.
4. Buy a domain such as `businessname.com` from Namecheap, GoDaddy, or Cloudflare, then connect it in Netlify's **Domain management** screen.
5. For later edits, change `content.js` in GitHub's browser editor and click **Commit changes**. Netlify automatically publishes the new version in about a minute.

For a non-technical owner who wants to update photos and text from a dashboard, the next upgrade is adding a content-management system such as **Sanity** or **Storyblok**. This template is an excellent first version; a CMS can be connected when the real content and hosting account are ready.

## Important notes

- The current map links search Google Maps using the business name and stated branch area. They are clickable, but the exact street address was not available in the supplied material. Replace each link with the official Google Maps share link once confirmed.
- The Arabic round button switches the complete page between English (left-to-right) and Arabic (right-to-left).
- Every showroom includes a photo, address, opening hours, directions link, and click-to-call action.
