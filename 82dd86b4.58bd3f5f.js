(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),s=(n(0),n(113)),o={id:"admin_presets_ftrack",title:"Presets > Ftrack",sidebar_label:"Ftrack"},i={unversionedId:"admin_presets_ftrack",id:"admin_presets_ftrack",isDocsHomePage:!1,title:"Presets > Ftrack",description:"PROJECT_DEFAULTS.json",source:"@site/docs/admin_presets_ftrack.md",slug:"/admin_presets_ftrack",permalink:"/docs/admin_presets_ftrack",version:"current",sidebar_label:"Ftrack",sidebar:"Admin",previous:{title:"Presets > NukeStudio",permalink:"/docs/admin_presets_nukestudio"},next:{title:"Presets > Maya",permalink:"/docs/admin_presets_maya"}},c=[{value:"PROJECT_DEFAULTS.json",id:"project_defaultsjson",children:[]},{value:"FTRACK_CONFIG.json",id:"ftrack_configjson",children:[{value:"<code>sync_to_avalon</code> dict",id:"sync_to_avalon-dict",children:[]},{value:"<code>status_update</code> dict",id:"status_update-dict",children:[]},{value:"<code>status_version_to_task</code> dict",id:"status_version_to_task-dict",children:[]}]},{value:"SERVER.json",id:"serverjson",children:[{value:"<code>first_version_status</code> dict",id:"first_version_status-dict",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"project_defaultsjson"},"PROJECT_DEFAULTS.json"),Object(s.b)("p",null,"path: ",Object(s.b)("inlineCode",{parentName:"p"},"pype-config/presets/ftrack/project_defauls.json")),Object(s.b)("p",null,'A list of all project defaults to be set when you run "Ftrack Prepare Project"'),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "fps": 25,\n    "frameStart": 1001,\n    "frameEnd": 1100,\n    "clipIn": 1001,\n    "clipOut": 1100,\n    "handleStart": 10,\n    "handleEnd": 10,\n\n    "resolutionHeight": 1080,\n    "resolutionWidth": 1920,\n    "pixelAspect": 1.0,\n    "applications": [\n        "maya_2019", "nuke_11.3", "nukex_11.3", "nukestudio_11.3", "deadline"\n    ],\n    "tools_env": [],\n    "avalon_auto_sync": true\n}\n')),Object(s.b)("h2",{id:"ftrack_configjson"},"FTRACK_CONFIG.json"),Object(s.b)("p",null,"path: ",Object(s.b)("inlineCode",{parentName:"p"},"pype-config/presets/ftrack/ftrack_config.json")),Object(s.b)("h3",{id:"sync_to_avalon-dict"},Object(s.b)("inlineCode",{parentName:"h3"},"sync_to_avalon")," ","[dict]"),Object(s.b)("p",null,"list of statuses that allow moving, deleting and changing of names on ftrack entities. Once any child of and entity is set to a status different than those listed in this list, it is considered to have been worked on and will not allow any major changes to hierarchy any more."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"statuses_name_change [list]"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "sync_to_avalon": {\n        "statuses_name_change": ["not ready", "ready"]\n    }\n}\n')),Object(s.b)("h3",{id:"status_update-dict"},Object(s.b)("inlineCode",{parentName:"h3"},"status_update")," ","[dict]"),Object(s.b)("p",null,"mapping of status for automatic updates.\nKey specifies the resulting status and value is a list of statuses from which we allow changing to the target status."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"_ignore_")," ","[list]",": source statuses to ignore"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"target_status")," ","[list]",": target  "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status_update": {\n        "_ignore_": ["in progress", "ommited", "on hold"],\n        "Ready": ["not ready"],\n        "In Progress" : ["_any_"]\n    }\n}\n')),Object(s.b)("h3",{id:"status_version_to_task-dict"},Object(s.b)("inlineCode",{parentName:"h3"},"status_version_to_task")," ","[dict]"),Object(s.b)("p",null,"mapping of status that propagate automatically from published version to it's task. By default we search for identical status, however this preset let's you remap between different statuses on versions and tasks."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"status_version_to_task")," ","[dict]",":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "status_version_to_task": {\n        "__description__": "Status `from` (key) must be lowered!",\n        "in progress": "in progress",\n        "approved": "approved"\n    }\n}\n')),Object(s.b)("h2",{id:"serverjson"},"SERVER.json"),Object(s.b)("p",null,"path: ",Object(s.b)("inlineCode",{parentName:"p"},"pype-config/presets/ftrack/server.json")),Object(s.b)("h3",{id:"first_version_status-dict"},Object(s.b)("inlineCode",{parentName:"h3"},"first_version_status")," ","[dict]"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"task_status_map")," ","[list]",": List of dictionaires specifying individual mappings"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"status")," ","[string]",": status to set if ",Object(s.b)("inlineCode",{parentName:"p"},"key")," and ",Object(s.b)("inlineCode",{parentName:"p"},"name")," match."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"name")," ","[string]",": name of task or task's type."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"key")," ","[enumerator]",": ",Object(s.b)("em",{parentName:"p"},"optional")," specify where to look for name. There are two possible value:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"task"),": task's name (default)"),Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"task_type"),": task type's name")),Object(s.b)("p",null,"It doesn't matter if values are lowered or capitalized."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "FirstVersionStatus": {\n        "task_status_map": [{\n            "key": "task",\n            "name": "compositing",\n            "status": "Blocking"\n        }, {\n            "MORE ITEMS...": "MORE VALUES..."\n        }]\n    },\n    "...": "{...}"\n}\n')))}p.isMDXComponent=!0}}]);