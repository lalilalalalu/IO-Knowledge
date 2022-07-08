<div id="top"></div>
<br />
<!--
<div align="center">
  <a href="https://github.com/lalilalalalu/IO-Knowledge.git">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->
<h3 align="center">IO-Knowledge-Cycle</h3>

  <p align="center">
    With the growing gap between computational power and underlying storage systems, and the lack of I/O expertise, I/O resources need to be used efficiently, and the required knowledge needs to be easily accessible. For this purpose, we present a generic workflow, and a possible implementation that realizes each phase of the knowledge cycle.
    <br />
    <a href="https://github.com/lalilalalalu/IO-Knowledge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lalilalalalu/IO-Knowledge/issues">Report Bug</a>
    ·
    <a href="https://github.com/lalilalalalu/IO-Knowledge/issues">Request Feature</a>
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
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With
#### IO-Knowledge-Analyzer
[![Angular][Angular.io]][Angular-url]
#### IO-Knowledge-Extractor and IO-Knowledge-API
[![Python][Python3]](https://www.python.org/) [![Flask][flask]](https://www.python.org/)


<p align="right">(<a href="#top">back to top</a>)</p>


## Demo - Screenshots
### Performance analysis through multi iterations for a benchmark run
[![Product Name Screen Shot][io500_anomaly]](https://example.com)
### IO500 Viewer
[![Product Name Screen Shot][io500Testcases]](https://example.com) 
### IO500 Dashboard
[![Product Name Screen Shot][io500Charts]](https://example.com)
### IO500 Scoreboard
[![Product Name Screen Shot][io500Score]](https://example.com)
### Generate new knowledge based existing knowledge
[![Product Name Screen Shot][generateKownledge]](https://example.com)
### Comparison over multi runs
[![Product Name Screen Shot][multiComp2]](https://example.com)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Regarding the I/O knowledge cycle, different tools can be applied in different phase. 

### Prerequisites
For IO-Knowledge-Analyzer:
* Install [Node.js] which includes [Node Package Manager][npm]
* Install [Angular-CLI] [ng]

For IO-Knowledge-Extractor and IO-Knowledge-API:
* Install [Python3]
* Install [Flask]


### Installation for IO-Knowledge Analyzer

1. Clone the repo
   ```sh
   git clone https://github.com/lalilalalalu/IO-Knowledge.git
   ```
2. Go to the project folder
    ```sh
    cd /IO-Knowledge/IO-Knowledge-Analyzer
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Change to your API `services/web-service.service.ts`
   ```js
    url = "http://Knowledge-API-URL:PORT";
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Coming soon.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Integrate further parallel file systems
    - [ ] Lustre
    - [ ] IBM Spectrum Scale
    - [ ] OrangeFS
- [ ] Unified performance model
- [ ] Additional charts types.
    - [ ] bounding box
    - [ ] heat-map 
- [ ] IO-Optimization    

See the [open issues](https://github.com/lalilalalalu/IO-Knowledge/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sarah Neuwirth - s.neuwirth@em.uni-frankfurt.de
Zhaobin Zhu - zhu@em.uni-frankfurt.de


Project Link: [https://github.com/lalilalalalu/IO-Knowledge](https://github.com/lalilalalalu/IO-Knowledge)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[node.js]: https://nodejs.org/
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Angular-CLI]: https://angular.io/cli
[cycle]: figures/iocycle.png
[io500_anomaly]: figures/anomaly.PNG
[generateKownledge]: figures/generateKownledge.PNG
[io500Charts]: figures/io500Charts.png
[multiComp2]: figures/multiComp2.PNG
[io500Testcases]: figures/io500Testcases.PNG
[io500Score]: figures/io500_score.png
[Python3]: https://img.shields.io/badge/Python3-563D7C?style=for-the-badge&logo=python&logoColor=white
[flask]: https://img.shields.io/badge/Flask-563D7C?style=for-the-badge&logo=flask&logoColor=white
