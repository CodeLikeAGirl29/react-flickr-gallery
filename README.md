# 📸 SnapShot | Modern Image Gallery

A high-performance, responsive image gallery built with **React**, **Vite**, and **Tailwind CSS**, powered by the **Unsplash API**. 

This project was originally a Flickr-based gallery and has been completely overhauled with a modern "masonry" layout, glassmorphism UI elements, and faster build tooling.

---

## ✨ Features

- **Unsplash Integration**: Access to millions of high-resolution, professional photos.
- **Masonry Layout**: A dynamic grid that handles images of different aspect ratios perfectly.
- **Vite-Powered**: Near-instant hot module replacement (HMR) and lightning-fast builds.
- **Tailwind CSS Styling**: A fully responsive, "facelifted" UI featuring:
  - Sticky glassmorphism search & navigation bar.
  - Interactive photo cards with photographer attribution.
  - Smooth hover transitions and cinematic zoom effects.
- **Intelligent Routing**: Uses `react-router-dom` to handle category navigation and custom searches.

---

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/) (v16.11+)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [Unsplash API](https://unsplash.com/developers)
- **HTTP Client**: Axios

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/codelikeagirl29/react-flickr-gallery.git](https://github.com/codelikeagirl29/react-flickr-gallery.git)
cd react-unsplash-gallery
````

### 2\. Install dependencies

```bash
npm install
```

### 3\. Set up your Environment Variables

Create a `.env` file in the root directory and add your Unsplash Access Key:

```text
VITE_UNSPLASH_API_KEY=your_access_key_here
```

### 4\. Start the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

-----

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx         # Branding and title
│   ├── Nav.jsx            # Category pill buttons
│   ├── SearchForm.jsx     # Modern search input
│   ├── PhotoContainer.jsx # Grid logic and API triggering
│   ├── Photos.jsx         # Individual photo cards
│   └── NotFound.jsx       # 404/No results state
├── App.jsx                # Main application logic & Routes
├── config.js              # Environment variable bridge
└── index.css              # Tailwind directives
```

-----

## 📸 Screenshots

| Desktop Masonry | Mobile Responsive |
| :--- | :--- |
|  |  |

-----

## 📝 License

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

**Developed with ❤️ by Lindsey**
