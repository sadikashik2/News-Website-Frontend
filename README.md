# 📰 NewsToday - Frontend News Website

A **responsive news website frontend** built with **React**, **Vite**, and **Tailwind CSS**

**Live Demo:** [https://news-website-frontend-psi.vercel.app](https://news-website-frontend-psi.vercel.app)
---

## 🚀 Project Setup

Follow these steps to run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/news-today.git
cd news-today
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📁 Folder Structure

```
src/
 ├─ assets/            # Images for news articles
 ├─ components/        # Reusable components
 │    ├─ Header.jsx
 │    ├─ Footer.jsx
 │    ├─ NewsCard.jsx
 │    ├─ CategoryBar.jsx
 │    └─ SkeletonCard.jsx
 ├─ data/              # Dummy news data (newsData.js)
 ├─ pages/             # Pages
 │    ├─ Home.jsx
 │    └─ NewsDetails.jsx
 ├─ App.jsx            # Layout component
 └─ main.jsx           # App entry point
```

---

## ✨ Features

* **Responsive Design**
  Works seamlessly on **desktop, tablet, and mobile** devices.

* **Header & Navigation**

  * Logo and site name
  * Navigation menu with categories: Home, National, International, Sports, Technology
  * Mobile-friendly hamburger menu with sliding panel

* **Home Page**

  * Trending news section
  * News grid displaying:

    * Thumbnail image
    * Title
    * Short description
    * Category
    * Publish date
  * Skeleton loader for news cards while loading

* **News Details Page**

  * Full news content with proper typography
  * Large cover image
  * Title, category, and date
  * Related news section

* **Category-based Filtering**

  * Filter news based on category

---

## 🛠️ Technologies Used

* **React**
* **Vite**
* **Tailwind CSS v4**
* **React Router v7**
* **React Icons**

---

