(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var b=2;b<i;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},114:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},119:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},120:function(e,t,a){"use strict";var n=a(0),r=a(119);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},138:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(120),s=a(114),o=a(48),c=a.n(o),b=37,l=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,p=e.values,u=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(n.useState)(o),O=v[0],j=v[1],f=Object(n.useState)(!1),y=f[0],N=f[1];if(null!=u){var g=m[u];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=u&&h(u,e)},k=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},T=function(){N(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",T)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),C(e)},onFocus:function(){return w(t)},onClick:function(){w(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},139:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(112)),s=a(138),o=a(139),c={id:"admin_ftrack",title:"Ftrack Setup",sidebar_label:"Ftrack Setup"},b={unversionedId:"admin_ftrack",id:"admin_ftrack",isDocsHomePage:!1,title:"Ftrack Setup",description:"Ftrack is currently the main project management option for Pype. This documentaion assumes that you are familiar with Ftrack and it's basic principles. If you're new to Ftrack, we recommend having a thorough look at Ftrack Official Documentation.",source:"@site/docs\\admin_ftrack.md",slug:"/admin_ftrack",permalink:"/docs/admin_ftrack",version:"current",sidebar_label:"Ftrack Setup",sidebar:"Admin",previous:{title:"Studio Config",permalink:"/docs/admin_config"},next:{title:"Hosts Setup",permalink:"/docs/admin_hosts"}},l=[{value:"Prepare Ftrack for Pype",id:"prepare-ftrack-for-pype",children:[]},{value:"Event Server",id:"event-server",children:[{value:"Running event server",id:"running-event-server",children:[]},{value:"Where to run event server",id:"where-to-run-event-server",children:[]},{value:"Which user to use",id:"which-user-to-use",children:[]},{value:"Run Linux service - step by step",id:"run-linux-service---step-by-step",children:[]}]},{value:"Ftrack events",id:"ftrack-events",children:[{value:"Delete Avalon ID from new entity <em>(DelAvalonIdFromNew)</em>",id:"delete-avalon-id-from-new-entity-delavalonidfromnew",children:[]},{value:"Next Task update <em>(NextTaskUpdate)</em>",id:"next-task-update-nexttaskupdate",children:[]},{value:"Synchronization to Avalon database <em>(Sync_to_Avalon)</em>",id:"synchronization-to-avalon-database-sync_to_avalon",children:[]},{value:"Synchronize hierarchical attributes <em>(SyncHierarchicalAttrs)</em>",id:"synchronize-hierarchical-attributes-synchierarchicalattrs",children:[]},{value:"Thumbnails update <em>(ThumbnailEvents)</em>",id:"thumbnails-update-thumbnailevents",children:[]},{value:"Version to Task status <em>(VersionToTaskStatus)</em>",id:"version-to-task-status-versiontotaskstatus",children:[]},{value:"Update First Version status <em>(FirstVersionStatus)</em>",id:"update-first-version-status-firstversionstatus",children:[]}]},{value:"Credentials",id:"credentials",children:[{value:"Credentials in tray",id:"credentials-in-tray",children:[]},{value:"Credentials in event server",id:"credentials-in-event-server",children:[]},{value:"Where to find API key",id:"where-to-find-api-key",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ftrack is currently the main project management option for Pype. This documentaion assumes that you are familiar with Ftrack and it's basic principles. If you're new to Ftrack, we recommend having a thorough look at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://ftrack.rtd.ftrack.com/en/stable/"}),"Ftrack Official Documentation"),"."),Object(i.b)("h2",{id:"prepare-ftrack-for-pype"},"Prepare Ftrack for Pype"),Object(i.b)("p",null,"If you want to connect Ftrack to Pype you might need to make few changes in Ftrack settings. These changes would take a long time to do manually, so we prepared a few Ftrack actions to help you out. First, you'll need to launch Pype's tray application and set ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#credentials"}),"Ftrack credentials")," to be able to run our Ftrack actions."),Object(i.b)("p",null,"The only action that is strictly required is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"manager_ftrack_actions#create-update-avalon-attributes"}),"Pype Admin - Create/Update Avalon Attributes"),", which creates and sets the Custom Attributes necessary needed for Pype to function. If you want to use pype only for new projects then you should read about best practice with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#new-project"}),"new project"),"."),Object(i.b)("p",null,"If you want to switch projects that are already in production, you might also need to run ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"manager_ftrack_actions#custom-attr-doc"}),"Pype Doctor - Custom attr doc"),"."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Keep in mind that ",Object(i.b)("strong",{parentName:"p"},"Custom attr doc")," action will migrate certain attributes from ftrack default ones to our custom attributes. Some attributes will also be renamed. We make backup of the values, but be very carefull with this option and consults us before running it."))),Object(i.b)("h2",{id:"event-server"},"Event Server"),Object(i.b)("p",null,"Ftrack Event Server is the key to automation of many tasks like ",Object(i.b)("em",{parentName:"p"},"status change"),", ",Object(i.b)("em",{parentName:"p"},"thumbnail update"),", ",Object(i.b)("em",{parentName:"p"},"automatic synchronization to Avalon database")," and many more. Event server should run at all times to perform all the required processing as it is not possible to catch some of them retrospectively with enough certainty."),Object(i.b)("h3",{id:"running-event-server"},"Running event server"),Object(i.b)("p",null,"There are specific launch arguments for event server. With ",Object(i.b)("inlineCode",{parentName:"p"},"$PYPE_SETUP/pype eventserver")," you can launch event server but without prior preparation it will terminate immediately. The reason is that event server requires 3 pieces of information: ",Object(i.b)("em",{parentName:"p"},"Ftrack server url"),", ",Object(i.b)("em",{parentName:"p"},"paths to events")," and ",Object(i.b)("em",{parentName:"p"},"Credentials (Username and API key)"),". Ftrack server URL and Event path are set from Pype's environments by default, but the credentials must be done separatelly for security reasons."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"There are 2 ways of passing your credentials to event server.")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)(s.a,{defaultValue:"args",values:[{label:"Additional Arguments",value:"args"},{label:"Environments Variables",value:"env"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"args",mdxType:"TabItem"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},'--ftrack-user "your.username"'))," : Ftrack Username"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},'--ftrack-api-key "00000aaa-11bb-22cc-33dd-444444eeeee"'))," : User's API key"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"--store-crededentials"))," : Entered credentials will be stored for next launch with this argument ",Object(i.b)("em",{parentName:"li"},"(It is not needed to enter ",Object(i.b)("strong",{parentName:"em"},"ftrackuser")," and ",Object(i.b)("strong",{parentName:"em"},"ftrackapikey")," args on next launch)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"--no-stored-credentials"))," : Stored credentials are loaded first so if you want to change credentials use this argument"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'--ftrack-url "https://yourdomain.ftrackapp.com/"')," : Ftrack server URL ",Object(i.b)("em",{parentName:"li"},"(it is not needed to enter if you have set ",Object(i.b)("inlineCode",{parentName:"em"},"FTRACK_SERVER")," in Pype' environments)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'--ftrack-events-path "//Paths/To/Events/"')," : Paths to events folder. May contain multiple paths separated by ",Object(i.b)("inlineCode",{parentName:"li"},";"),". ",Object(i.b)("em",{parentName:"li"},"(it is not needed to enter if you have set ",Object(i.b)("inlineCode",{parentName:"em"},"FTRACK_EVENTS_PATH")," in Pype' environments)"))),Object(i.b)("p",{parentName:"div"},"So if you want to use Pype's environments then you can launch event server for first time with these arguments ",Object(i.b)("inlineCode",{parentName:"p"},'$PYPE_SETUP/pype eventserver --ftrack-user "my.username" --ftrack-api-key "00000aaa-11bb-22cc-33dd-444444eeeee" --store-credentials'),". Since that time, if everything was entered correctly, you can launch event server with ",Object(i.b)("inlineCode",{parentName:"p"},"$PYPE_SETUP/pype eventserver"),".")),Object(i.b)(o.a,{value:"env",mdxType:"TabItem"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FTRACK_API_USER")," - Username ",Object(i.b)("em",{parentName:"li"},'("your.username")')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FTRACK_API_KEY")," - User's API key ",Object(i.b)("em",{parentName:"li"},'("00000aaa-11bb-22cc-33dd-444444eeeee")')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FTRACK_SERVER")," - Ftrack server url ",Object(i.b)("em",{parentName:"li"},'("',Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://yourdomain.ftrackapp.com/%22"}),'https://yourdomain.ftrackapp.com/"'),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FTRACK_EVENTS_PATH")," - Paths to events ",Object(i.b)("em",{parentName:"li"},'("//Paths/To/Events/")'),"\nWe do not recommend you this way.")))))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We do not recommend setting your ftrack user and api key environments in a persistent way, for security reasons. Option 1. passing them as arguments is substantially safer."))),Object(i.b)("h3",{id:"where-to-run-event-server"},"Where to run event server"),Object(i.b)("p",null,"We recommend you to run event server on stable server machine with ability to connect to Avalon database and Ftrack web server. Best practice we recommend is to run event server as service."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Event server should ",Object(i.b)("strong",{parentName:"p"},"not")," run more than once! It may cause big pipeline issues."))),Object(i.b)("h3",{id:"which-user-to-use"},"Which user to use"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"must have at least ",Object(i.b)("inlineCode",{parentName:"li"},"Administrator")," role"),Object(i.b)("li",{parentName:"ul"},"same user should not be used by an artist")),Object(i.b)("h3",{id:"run-linux-service---step-by-step"},"Run Linux service - step by step"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"create file:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo vi /opt/pype/run_event_server.sh"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"add content to the file:"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"export PYPE_DEBUG=3\npushd /mnt/pipeline/prod/pype-setup\n. pype eventserver --ftrack-user <pype-admin-user> --ftrack-api-key <api-key>\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"create service file:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo vi /etc/systemd/system/pype-ftrack-event-server.service"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"add content to the service file"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),"[Unit]\nDescription=Run Pype Ftrack Event Server Service\nAfter=network.target\n\n[Service]\nType=idle\nExecStart=/opt/pype/run_event_server.sh\nRestart=on-failure\nRestartSec=10s\n\n[Install]\nWantedBy=multi-user.target\n")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"change file permission:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo chmod 0755 /etc/systemd/system/pype-ftrack-event-server.service"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"enable service:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo systemctl enable pype-ftrack-event-server"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"start service:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo systemctl start pype-ftrack-event-server")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"ftrack-events"},"Ftrack events"),Object(i.b)("p",null,"Events are helpers to automation. They react to Ftrack Web Server events like change entity attribute, create of entity, etc. ."),Object(i.b)("h3",{id:"delete-avalon-id-from-new-entity-delavalonidfromnew"},"Delete Avalon ID from new entity ",Object(i.b)("em",{parentName:"h3"},"(DelAvalonIdFromNew)")),Object(i.b)("p",null,"Is used to remove value from ",Object(i.b)("inlineCode",{parentName:"p"},"Avalon/Mongo Id")," Custom Attribute when entity is created."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Avalon/Mongo Id")," Custom Attribute stores id of synchronized entities in pipeline database. When user ",Object(i.b)("em",{parentName:"p"},"Copy -> Paste")," selection of entities to create similar hierarchy entities, values from Custom Attributes are copied too. That causes issues during synchronization because there are multiple entities with same value of ",Object(i.b)("inlineCode",{parentName:"p"},"Avalon/Mongo Id"),". To avoid this error we preventively remove these values when entity is created."),Object(i.b)("h3",{id:"next-task-update-nexttaskupdate"},"Next Task update ",Object(i.b)("em",{parentName:"h3"},"(NextTaskUpdate)")),Object(i.b)("p",null,"Change status of next task from ",Object(i.b)("inlineCode",{parentName:"p"},"Not started")," to ",Object(i.b)("inlineCode",{parentName:"p"},"Ready")," when previous task is approved."),Object(i.b)("p",null,"Multiple detailed rules for next task update can be configured in the presets."),Object(i.b)("h3",{id:"synchronization-to-avalon-database-sync_to_avalon"},"Synchronization to Avalon database ",Object(i.b)("em",{parentName:"h3"},"(Sync_to_Avalon)")),Object(i.b)("p",null,"Automatic ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"manager_ftrack#synchronization-to-avalon-database"}),"synchronization to pipeline database"),"."),Object(i.b)("p",null,"This event updates entities on their changes Ftrack. When new entity is created or existing entity is modified. Interface with listing information is shown to users when ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"manager_ftrack#synchronization-rules"}),"synchronization rules")," are not met. This event may also undo changes when they might break pipeline. Namely ",Object(i.b)("em",{parentName:"p"},"change name of synchronized entity"),", ",Object(i.b)("em",{parentName:"p"},"move synchronized entity in hierarchy"),"."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Deleting an entity by Ftrack's default is not processed for security reasons ",Object(i.b)("em",{parentName:"p"},"(to delete entity use ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"manager_ftrack_actions#delete-asset-subset"}),"Delete Asset/Subset action"),")"),"."))),Object(i.b)("h3",{id:"synchronize-hierarchical-attributes-synchierarchicalattrs"},"Synchronize hierarchical attributes ",Object(i.b)("em",{parentName:"h3"},"(SyncHierarchicalAttrs)")),Object(i.b)("p",null,"Auto-synchronization of hierarchical attributes from Ftrack entities."),Object(i.b)("p",null,"Related to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#synchronization-to-avalon-database"}),"Synchronize to Avalon database")," event ",Object(i.b)("em",{parentName:"p"},"(without it, it makes no sense to use this event)"),". Hierarchical attributes must be synchronized with special way so we needed to split synchronization into 2 parts. There are ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"manager_ftrack#synchronization-rules"}),"synchronization rules")," for hierarchical attributes that must be met otherwise interface with messages about not meeting conditions is shown to user."),Object(i.b)("h3",{id:"thumbnails-update-thumbnailevents"},"Thumbnails update ",Object(i.b)("em",{parentName:"h3"},"(ThumbnailEvents)")),Object(i.b)("p",null,"Updates thumbnail of Task and it's parent when new Asset Version with thumbnail is created."),Object(i.b)("p",null,"This is normally done by Ftrack Web server when Asset Version is created with Drag&Drop but not when created with Ftrack API."),Object(i.b)("h3",{id:"version-to-task-status-versiontotaskstatus"},"Version to Task status ",Object(i.b)("em",{parentName:"h3"},"(VersionToTaskStatus)")),Object(i.b)("p",null,"Updates Task status based on status changes on it's ",Object(i.b)("inlineCode",{parentName:"p"},"AssetVersion"),"."),Object(i.b)("p",null,"The issue this solves is when Asset version's status is changed but the artist assigned to Task is looking at the task status, thus not noticing the review."),Object(i.b)("p",null,"This event makes sure statuses Asset Version get synced to it's task. After changing a status on version, this event first tries to set identical status to version's parent (usually task). At this moment there are a few more status mappings hardcoded into the system. If Asset version's status was changed to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Reviewed")," then Task's status will be changed to ",Object(i.b)("inlineCode",{parentName:"li"},"Change requested")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Approved")," then Task's status will be changed to ",Object(i.b)("inlineCode",{parentName:"li"},"Complete"))),Object(i.b)("h3",{id:"update-first-version-status-firstversionstatus"},"Update First Version status ",Object(i.b)("em",{parentName:"h3"},"(FirstVersionStatus)")),Object(i.b)("p",null,"This event handler allows setting of different status to a first created Asset Version in ftrack."),Object(i.b)("p",null,"This is usefull for example if first version publish doesn't contain any actual reviewable work, but is only used for roundtrip conform check, in which case this version could receive status ",Object(i.b)("inlineCode",{parentName:"p"},"pending conform")," instead of standard ",Object(i.b)("inlineCode",{parentName:"p"},"pending review")),Object(i.b)("p",null,"Behaviour can be filtered by ",Object(i.b)("inlineCode",{parentName:"p"},"name")," or ",Object(i.b)("inlineCode",{parentName:"p"},"type")," of the task assigned to the Asset Version. Configuration can be found in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"admin_presets_ftrack#first_version_status-dict"}),"ftrack presets")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"If you want to be able use Ftrack actions with Pype tray or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#event-server"}),"event server")," you need to enter credentials. The credentials required for Ftrack are ",Object(i.b)("inlineCode",{parentName:"p"},"Username")," and ",Object(i.b)("inlineCode",{parentName:"p"},"API key"),"."),Object(i.b)("h3",{id:"credentials-in-tray"},"Credentials in tray"),Object(i.b)("p",null,"How to handle with credentials in tray is described ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#artist_ftrack#first-use-best-case-scenario"}),"here"),"."),Object(i.b)("h3",{id:"credentials-in-event-server"},"Credentials in event server"),Object(i.b)("p",null,"How to enter credentials to event server is described ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#how-to-run-event-server"}),"here"),"."),Object(i.b)("h3",{id:"where-to-find-api-key"},"Where to find API key"),Object(i.b)("p",null,"Please check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://ftrack.rtd.ftrack.com/en/backlog-scaling-ftrack-documentation-story/developing/api_keys.html"}),"official documentation"),"."))}u.isMDXComponent=!0}}]);