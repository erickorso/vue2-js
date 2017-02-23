Vue.component('nav-fixed-top', {
    props   : ['nav'],
    template: `<ul class="navbar-nav mr-auto">
                    <li 
                        v-for="link in nav" 
                        class="hvr-underline-from-center nav-item" 
                        v-bind:class="{dropdown:link.submenu!=false, active:link.active}"
                        >
                        <a 
                            class="nav-link" 
                            v-bind:class="{'dropdown-toggle':link.submenu!=false}" 
                            v-bind:href="link.link" 
                            id="navbarDropdownMenuLink" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            >{{link.text}}</a>

                        <div 
                            v-if="link.submenu.length > 0" 
                            class="dropdown-menu" 
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <a 
                                v-for="sub in link.submenu" 
                                class="hvr-underline-from-center 
                                dropdown-item" 
                                v-bind:href="sub.link"
                                >{{sub.text}}</a>
                        </div>
                    </li>
                </ul>`
});
// main nav bar
Vue.component('search-form', {
    props   : [],
    template: `<form class="form-inline my-2 my-lg-0 hidden">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>`
});
// main nav bar
Vue.component('middle-nav', {
    props   : ['nav'],
    template: `<nav class="middle-nav nav" id="middle-nav">
                            <ul class="anchor-nav">
                                <li v-for="link in nav">
                                    <a class="anchor" v-bind:data-ref="link.link" v-bind:href="link.link">
                                        {{link.text}}
                                    </a>
                                </li>
                            </ul>
                        </nav>`
});