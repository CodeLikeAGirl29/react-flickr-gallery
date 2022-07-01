# Gallery Image Search

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Flickr](https://a11ybadges.com/badge?logo=flickr)

Built with React, using Flickr API for the search.
Made by Lindsey.

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/codelikeagirl29/react-flickr-gallery">
    📷
  </a>

<h3 align="center">React Flickr Gallery</h3>

  <p align="center">
Search Flickr's image gallery!
    <br />
    <a href="https://github.com/codelikeagirl29/react-flickr-gallery"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/codelikeagirl29/react-flickr-gallery">View Demo</a>
    ·
    <a href="https://github.com/codelikeagirl29/react-flickr-gallery/issues">Report Bug</a>
    ·
    <a href="https://github.com/codelikeagirl29/react-flickr-gallery/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A React app to demonstrate my understanding of a few of React's best features - React Router Dom, using axios, using an API, with NavLink and several components.

### Built With

- [React.js](https://reactjs.org/)
- [Flickr](https://www.flickr.com/services/developer/api/)
- [JavaScript](https://javascript.com/)
- [Vercel](https://vercel.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

`npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

#### Installation

1. Get a free API Key at [https://flickr.com](https://www.flickr.com/services/developer/api/)
2. Clone the repo

```sh
git clone https://github.com/codelikeagirl29/react-flickr-gallery.git
```

3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const apiKey = "<API_KEY_HERE>";
   export default apiKey;
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b main`)
3. Commit your Changes (`git commit -m 'commit message here'`)
4. Push to the Branch (`git push origin main`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Lindsey - [@dev_lindseyk](https://twitter.com/dev_lindseyk) - admin@lindseyk.dev

Project Link: [https://github.com/codelikeagirl29/react-flickr-gallery](https://github.com/codelikeagirl29/react-flickr-gallery)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Team Treehouse Project # 7](https://teamtreehouse.com/projects/react-gallery-app)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/codelikeagirl29/react-flickr-gallery.svg?style=for-the-badge
[contributors-url]: https://github.com/codelikeagirl29/react-flickr-gallery/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/codelikeagirl29/react-flickr-gallery.svg?style=for-the-badge
[forks-url]: https://github.com/codelikeagirl29/react-flickr-gallery/network/members
[stars-shield]: https://img.shields.io/github/stars/codelikeagirl29/react-flickr-gallery.svg?style=for-the-badge
[stars-url]: https://github.com/codelikeagirl29/react-flickr-gallery/stargazers
[issues-shield]: https://img.shields.io/github/issues/codelikeagirl29/react-flickr-gallery.svg?style=for-the-badge
[issues-url]: https://github.com/codelikeagirl29/react-flickr-gallery/issues
[license-shield]: https://img.shields.io/github/license/codelikeagirl29/react-flickr-gallery.svg?style=for-the-badge
[license-url]: https://github.com/codelikeagirl29/react-flickr-gallery/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lindsey-howard
[product-screenshot]: https://res.cloudinary.com/codelikeagirl29/image/upload/v1652567412/screencapture-localhost-3000-react-flickr-api-2022-05-14-18_29_31_eaddgs.png
