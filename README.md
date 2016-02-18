# angular-dhtmlx-demo

This project aims to create usable and programmer-friendly directives for the dhtmlx components. These will be tested on the GPL version of the dhtmlx components. 
## Disclaimer

First:
Note that if you need to use this code with DHTMLX for commercial purposes you will need to buy the PRO version. Otherwise, you are under the GPL v2 licence.

Second:
I am new to grunt, and overall a recent fan of Angular.js, so feel free to point out any issues. 


## Completed:
<ul>
  <li>
    <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/grid.js">dhtmlXGrid</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/grid">
          Example use
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/tree.js">dhtmlXTree</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/tree">
          Example use
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/layout.js">dhtmlXLayout</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/layout">
          Example use
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/popup.js">dhtmlXPopup</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/popup">
          Example use
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a
      href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/message.js">dhtmlXMessage</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/message">
          Example use (Alert/Confirm and just message)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/chart.js">dhtmlXChart</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/chart">
          Example use (The most basic functionality)
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/components/dhtmlx/directives/tabbar.js">dhtmlXTabBar</a>
    <ul>
      <li>
        <a href="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/root/cmp/tabbar">
          Example use
        </a>
      </li>
    </ul>
  </li>
</ul>

<p>For a much nicer demo just checkout the project and start the SPA application. It lets you preview a demonstration of
  each of the components, as well as its directive and usage in controller/template.<p>
<img src="https://github.com/perushinkov/angular-dhtmlx-demo/blob/master/app/assets/images/example.jpg">


  ## Build & development
<pre>
    git clone https://github.com/perushinkov/angular-dhtmlx-demo.git
    cd angular-dhtmlx-demo/
    npm install
    bower install
    grunt build
    grunt serve
</pre>

  ## Testing

  Running `grunt test` will run no unit tests with karma. (None have been written)

