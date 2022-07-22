const nav = document.getElementById("nav");
nav.innerHTML = `
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="index.html" class="hvr-underline-from-center">Home</a>
              </li>
              <li>
                <a href="about.html" class="hvr-underline-from-center"
                  >About Us</a
                >
              </li>
              <li>
                <a href="code.html" class="hvr-underline-from-center">Code</a>
              </li>
              <li>
                <a href="build.html" class="hvr-underline-from-center">Build</a>
              </li>
              <li>
                <a href="media.html" class="hvr-underline-from-center">Media</a>
              </li>
              <li>
                <a href="timeline.html" class="hvr-underline-from-center"
                  >Timeline</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
`;
