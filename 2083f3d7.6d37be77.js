(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),d=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,O=p["".concat(l,".").concat(u)]||p[u]||s[u]||r;return n?c.a.createElement(O,o(o({ref:t},i),{},{components:n})):c.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<r;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),c=n(6),r=(n(0),n(113)),l={id:"admin_pype_commands",title:"Pype Commands Reference",sidebar_label:"Pype Commands"},o={unversionedId:"admin_pype_commands",id:"admin_pype_commands",isDocsHomePage:!1,title:"Pype Commands Reference",description:"Help",source:"@site/docs/admin_pype_commands.md",slug:"/admin_pype_commands",permalink:"/docs/admin_pype_commands",version:"current",sidebar_label:"Pype Commands",sidebar:"Admin",previous:{title:"Hosts Setup",permalink:"/docs/admin_hosts"},next:{title:"Setup Troubleshooting",permalink:"/docs/admin_setup_troubleshooting"}},b=[{value:"Help",id:"help",children:[]},{value:"<code>clean</code>",id:"clean",children:[]},{value:"<code>coverage</code>",id:"coverage",children:[{value:"<code>--pype</code>",id:"--pype",children:[]}]},{value:"<code>deploy</code>",id:"deploy",children:[{value:"<code>--force</code>",id:"--force",children:[]}]},{value:"<code>download</code>",id:"download",children:[]},{value:"<code>eventserver</code>",id:"eventserver",children:[{value:"<code>--debug</code>",id:"--debug",children:[]},{value:"<code>--ftrack-url</code>",id:"--ftrack-url",children:[]},{value:"<code>--ftrack-user</code>",id:"--ftrack-user",children:[]},{value:"<code>--ftrack-api-key</code>",id:"--ftrack-api-key",children:[]},{value:"<code>--ftrack-events-path</code>",id:"--ftrack-events-path",children:[]},{value:"<code>--no-stored-credentials</code>",id:"--no-stored-credentials",children:[]},{value:"<code>--store-credentials</code>",id:"--store-credentials",children:[]}]},{value:"<code>install</code>",id:"install",children:[{value:"<code>--force</code>",id:"--force-1",children:[]},{value:"<code>--offline</code>",id:"--offline",children:[]}]},{value:"<code>launch</code>",id:"launch",children:[{value:"<code>--app</code>",id:"--app",children:[]},{value:"<code>--project</code>",id:"--project",children:[]},{value:"<code>--asset</code>",id:"--asset",children:[]},{value:"<code>--task</code>",id:"--task",children:[]},{value:"<code>--tools</code>",id:"--tools",children:[]},{value:"<code>--user</code>",id:"--user",children:[]},{value:"<code>--ftrack-server</code> / <code>-fs</code>",id:"--ftrack-server---fs",children:[]},{value:"<code>--ftrack-user</code> / <code>-fu</code>",id:"--ftrack-user---fu",children:[]},{value:"<code>--ftrack-key</code> / <code>-fk</code>",id:"--ftrack-key---fk",children:[]}]},{value:"<code>make_docs</code>",id:"make_docs",children:[]},{value:"<code>mongodb</code>",id:"mongodb",children:[]},{value:"<code>publish</code>",id:"publish",children:[{value:"<code>--gui</code>",id:"--gui",children:[]},{value:"<code>--debug</code>",id:"--debug-1",children:[]}]},{value:"<code>test</code>",id:"test",children:[{value:"<code>--pype</code>",id:"--pype-1",children:[]}]},{value:"<code>texturecopy</code>",id:"texturecopy",children:[{value:"<code>--project</code>",id:"--project-1",children:[]},{value:"<code>--asset</code>",id:"--asset-1",children:[]},{value:"<code>--path</code>",id:"--path",children:[]}]},{value:"<code>tray</code>",id:"tray",children:[{value:"<code>--debug</code>",id:"--debug-2",children:[]}]},{value:"<code>update-requirements</code>",id:"update-requirements",children:[]},{value:"<code>validate</code>",id:"validate",children:[]},{value:"<code>validate-config</code>",id:"validate-config",children:[]}],i={rightToc:b};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"help"},"Help"),Object(r.b)("p",null,"To get all available commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype --help\n")),Object(r.b)("p",null,"To get help on particular command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype <command> --help\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"clean"},Object(r.b)("inlineCode",{parentName:"h2"},"clean")),Object(r.b)("p",null,"Command to clean Python bytecode files from Pype and it's environment. Useful\nfor developers after code or environment update."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"coverage"},Object(r.b)("inlineCode",{parentName:"h2"},"coverage")),Object(r.b)("h3",{id:"--pype"},Object(r.b)("inlineCode",{parentName:"h3"},"--pype")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"without this option, tests are run on ",Object(r.b)("em",{parentName:"li"},"pype-setup")," only.")),Object(r.b)("p",null,"Generate code coverage report."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype coverage --pype\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"deploy"},Object(r.b)("inlineCode",{parentName:"h2"},"deploy")),Object(r.b)("p",null,"To deploy Pype:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype deploy\n")),Object(r.b)("h3",{id:"--force"},Object(r.b)("inlineCode",{parentName:"h3"},"--force")),Object(r.b)("p",null,"To force re-deploy:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype deploy --force\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"download"},Object(r.b)("inlineCode",{parentName:"h2"},"download")),Object(r.b)("p",null,"To download required dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype download\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"eventserver"},Object(r.b)("inlineCode",{parentName:"h2"},"eventserver")),Object(r.b)("p",null,"This command launches ftrack event server."),Object(r.b)("p",null,"This should be ideally used by system service (such us systemd or upstart\non linux and window service)."),Object(r.b)("p",null,"You have to set either proper environment variables to provide URL and\ncredentials or use option to specify them. If you use ",Object(r.b)("inlineCode",{parentName:"p"},"--store_credentials"),"\nprovided credentials will be stored for later use."),Object(r.b)("p",null,"To run ftrack event server:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype eventserver --ftrack-url=<url> --ftrack-user=<user> --ftrack-api-key=<key> --ftrack-events-path=<path> --no-stored-credentials --store-credentials\n")),Object(r.b)("h3",{id:"--debug"},Object(r.b)("inlineCode",{parentName:"h3"},"--debug")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"print debug info")),Object(r.b)("h3",{id:"--ftrack-url"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-url")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"URL to ftrack server")),Object(r.b)("h3",{id:"--ftrack-user"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-user")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"user name to log in to ftrack")),Object(r.b)("h3",{id:"--ftrack-api-key"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-api-key")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ftrack api key")),Object(r.b)("h3",{id:"--ftrack-events-path"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-events-path")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"path to event server plugins")),Object(r.b)("h3",{id:"--no-stored-credentials"},Object(r.b)("inlineCode",{parentName:"h3"},"--no-stored-credentials")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"will use credential specified with options above")),Object(r.b)("h3",{id:"--store-credentials"},Object(r.b)("inlineCode",{parentName:"h3"},"--store-credentials")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"will store credentials to file for later use")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"install"},Object(r.b)("inlineCode",{parentName:"h2"},"install")),Object(r.b)("p",null,"To install Pype:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype install\n")),Object(r.b)("h3",{id:"--force-1"},Object(r.b)("inlineCode",{parentName:"h3"},"--force")),Object(r.b)("p",null,"To reinstall Pype:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype install --force\n")),Object(r.b)("h3",{id:"--offline"},Object(r.b)("inlineCode",{parentName:"h3"},"--offline")),Object(r.b)("p",null,"To install Pype in offline mode:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype install --offline\n")),Object(r.b)("p",null,"To reinstall Pype in offline mode:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype install --offline --force\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"launch"},Object(r.b)("inlineCode",{parentName:"h2"},"launch")),Object(r.b)("p",null,"Launch application in Pype environment."),Object(r.b)("h3",{id:"--app"},Object(r.b)("inlineCode",{parentName:"h3"},"--app")),Object(r.b)("p",null,"Application name - this should be the same as it's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"admin_hosts#launchers"}),"defining toml")," file (without .toml)"),Object(r.b)("h3",{id:"--project"},Object(r.b)("inlineCode",{parentName:"h3"},"--project")),Object(r.b)("p",null,"Project name"),Object(r.b)("h3",{id:"--asset"},Object(r.b)("inlineCode",{parentName:"h3"},"--asset")),Object(r.b)("p",null,"Asset name"),Object(r.b)("h3",{id:"--task"},Object(r.b)("inlineCode",{parentName:"h3"},"--task")),Object(r.b)("p",null,"Task name"),Object(r.b)("h3",{id:"--tools"},Object(r.b)("inlineCode",{parentName:"h3"},"--tools")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Optional: Additional tools environment files to add")),Object(r.b)("h3",{id:"--user"},Object(r.b)("inlineCode",{parentName:"h3"},"--user")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Optional: User on behalf to run")),Object(r.b)("h3",{id:"--ftrack-server---fs"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-server")," / ",Object(r.b)("inlineCode",{parentName:"h3"},"-fs")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Optional: Ftrack server URL")),Object(r.b)("h3",{id:"--ftrack-user---fu"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-user")," / ",Object(r.b)("inlineCode",{parentName:"h3"},"-fu")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Optional: Ftrack user")),Object(r.b)("h3",{id:"--ftrack-key---fk"},Object(r.b)("inlineCode",{parentName:"h3"},"--ftrack-key")," / ",Object(r.b)("inlineCode",{parentName:"h3"},"-fk")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Optional: Ftrack API key")),Object(r.b)("p",null,"For example to run Python interactive console in Pype context:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype launch --app python --project my_project --asset my_asset --task my_task\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"make_docs"},Object(r.b)("inlineCode",{parentName:"h2"},"make_docs")),Object(r.b)("p",null,"Generate API documentation into ",Object(r.b)("inlineCode",{parentName:"p"},"docs/build")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype make_docs\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"mongodb"},Object(r.b)("inlineCode",{parentName:"h2"},"mongodb")),Object(r.b)("p",null,"To run testing mongodb database (requires mongoDB installed on the workstation):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype mongodb\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"publish"},Object(r.b)("inlineCode",{parentName:"h2"},"publish")),Object(r.b)("p",null,"Pype takes JSON from provided path and use it to publish data in it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype publish <PATH_TO_JSON>\n")),Object(r.b)("h3",{id:"--gui"},Object(r.b)("inlineCode",{parentName:"h3"},"--gui")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"run Pyblish GUI")),Object(r.b)("h3",{id:"--debug-1"},Object(r.b)("inlineCode",{parentName:"h3"},"--debug")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"print more verbose infomation")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"test"},Object(r.b)("inlineCode",{parentName:"h2"},"test")),Object(r.b)("h3",{id:"--pype-1"},Object(r.b)("inlineCode",{parentName:"h3"},"--pype")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"without this option, tests are run on ",Object(r.b)("em",{parentName:"li"},"pype-setup")," only.")),Object(r.b)("p",null,"Run test suite on Pype:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype test --pype\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Pytest")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For more information about testing see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.pytest.org/en/latest/"}),"Pytest documentation")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"texturecopy"},Object(r.b)("inlineCode",{parentName:"h2"},"texturecopy")),Object(r.b)("p",null,"Copy specified textures to provided asset path."),Object(r.b)("p",null,"It validates if project and asset exists. Then it will\ncopy all textures found in all directories under ",Object(r.b)("inlineCode",{parentName:"p"},"--path")," to destination\nfolder, determined by template texture in ",Object(r.b)("strong",{parentName:"p"},"anatomy"),". I will use source\nfilename and automatically rise version number on directory."),Object(r.b)("p",null,"Result will be copied without directory structure so it will be flat then.\nNothing is written to database."),Object(r.b)("h3",{id:"--project-1"},Object(r.b)("inlineCode",{parentName:"h3"},"--project")),Object(r.b)("h3",{id:"--asset-1"},Object(r.b)("inlineCode",{parentName:"h3"},"--asset")),Object(r.b)("h3",{id:"--path"},Object(r.b)("inlineCode",{parentName:"h3"},"--path")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype texturecopy --project <PROJECT_NAME> --asset <ASSET_NAME> --path <PATH_TO_JSON>\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"tray"},Object(r.b)("inlineCode",{parentName:"h2"},"tray")),Object(r.b)("p",null,"To launch Tray:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype tray\n")),Object(r.b)("h3",{id:"--debug-2"},Object(r.b)("inlineCode",{parentName:"h3"},"--debug")),Object(r.b)("p",null,"To launch Tray with debugging information:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype tray --debug\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"update-requirements"},Object(r.b)("inlineCode",{parentName:"h2"},"update-requirements")),Object(r.b)("p",null,"Synchronize dependecies in your virtual environment with requirement.txt file.\nEquivalent of running ",Object(r.b)("inlineCode",{parentName:"p"},"pip freeze > pypeapp/requirements.txt")," from your virtual\nenvironmnet. This is useful for development purposes."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype update-requirements\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"validate"},Object(r.b)("inlineCode",{parentName:"h2"},"validate")),Object(r.b)("p",null,"To validate deployment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype validate\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"validate-config"},Object(r.b)("inlineCode",{parentName:"h2"},"validate-config")),Object(r.b)("p",null,"To validate JSON configuration files for syntax errors:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pype validate-config\n")))}d.isMDXComponent=!0}}]);