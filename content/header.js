// IMPORTANT: With this method the style of the web has to be a global key to make 0
// the margin and padding of all web's elements

// WHY?: Because the new html code to insert it's been display inside
// another div container

/** Example: remove additional spaces between elements
 * html {
 * 	margin:0;
 * 	padding:0;
 * }
*/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- navbar -->
      <nav id="navbar-menu" class="navbar flex jc-sb ai-c">
          <button id="openTOCbutton" class="button-toc" onclick="TOC_function()">
              <span></span>
              <span></span>
              <span></span>
          </button>
          <!-- The buton with class="toc-icon" is displayed in narrow screens to open and close the TOC -->
          <button class="button-toc toc-icon" onclick="tocFunction_responsive()">
              <span></span>
              <span></span>
              <span></span>
          </button>
          <span id="main-title"><a href="index.html">Responsive Web Design <span class="highlight1">docs</span></a></span>
          <!-- GitHub logo -->
          <a id="github-logo" href="https://github.com/CristianICS" target="_blank">
              <img src="img/github-logo.svg" alt="">
          </a>
      </nav>

      </header>
    `;
  }
}

  customElements.define('reusable-header', Header);