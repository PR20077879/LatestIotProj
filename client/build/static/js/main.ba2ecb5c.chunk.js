(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),i=(a(54),a(3)),s=a(4),c=a(6),E=a(5),d=a(7),u=a(151),m=a(152),A=a(150),_=a(29),p=a.n(_),P=a(149),R=a(22),T=a(11),h=a.n(T),C=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"}),w=C.REACT_APP_VM_SERVER,b=C.REACT_APP_REBOOT,f=(n.Component,a(81),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),g=f.REACT_APP_VM_SERVER,O=(f.REACT_APP_UPDATE_REBOOT,n.Component,a(83),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),v=O.REACT_APP_VM_SERVER,S=O.REACT_APP_UPDATE_TWIN,B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(E.a)(t).call(this,e))).updateTwin=function(e){e.preventDefault();var t=a.state,n=t.softwareVersion,r=t.url;t.reboot;""===n||""===r?alert("Please enter all the fields"):(a.setState({updateTwinLoading:!0}),h()({method:"post",url:v+S,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Methods":"POST"},data:{software_version:n,url:r}}).then(function(e){console.log(e),alert("Firmware updated successfully"),a.setState({updateTwinLoading:!1})}).catch(function(e){console.log(e),alert("Error in Firmware update"),a.setState({updateTwinLoading:!1})}))},a.handleInput=function(e){var t=e.target,n=t.name,r=t.value;"url"===n&&a.setState({url:r}),"reboot"===n&&a.setState({reboot:r}),"softwareVersion"===n&&a.setState({softwareVersion:r})},a.state={softwareVersion:"1.0.0.006",updateTwinLoading:!1,reboot:"True",url:"https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.url,a=e.softwareVersion,n=e.updateTwinLoading;e.reboot;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.updateTwin},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Software version"),r.a.createElement("input",{type:"software-version",className:"form-control",id:"software",value:a,name:"softwareVersion","aria-describedby":"softwareHelp",placeholder:"Enter software version",onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Blob URL"),r.a.createElement("input",{type:"text",value:t,name:"url",className:"form-control",id:"blobUrl",placeholder:"Enter Blob URL",onChange:this.handleInput})),r.a.createElement("button",{type:"submit",className:"cust-btn"},n?"Updating Firmware..":"Update firmware")))}}]),t}(n.Component),U=(a(85),a(44)),L=a.n(U);var N=function(e){return r.a.createElement(L.a,{percentage:e.percentage,text:e.text,strokeWidth:5,styles:{root:{},path:{stroke:"#2c55ba",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#2c55ba",fontSize:"30px"}}})},V=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"}),D=V.REACT_APP_VM_SERVER,y=V.REACT_APP_GETSTATUS,k=(n.Component,a(47)),j=(a(88),a(90),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),x=j.REACT_APP_SERVER,G=j.REACT_APP_GETBLOBS,I=j.REACT_APP_UPLOADBLOB,M=[{Header:"Name",accessor:"name"},{Header:"Download Link",resizable:!0,accessor:"name",Cell:function(e){return r.a.createElement("a",{href:"https://wrdm2chetanpackage.blob.core.windows.net/firmware/".concat(e.value)},"Link")}},{Header:"Date",accessor:"lastModified"}],z=(n.Component,a(92),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AZURE_SERVER:"https://wrdm2-api.azurewebsites.net/",REACT_APP_GETBLOBS:"api/file/list",REACT_APP_GETSTATUS:"getupdatestatus",REACT_APP_LOG:"api/log",REACT_APP_REBOOT:"getrebootstatus",REACT_APP_SERVER:"",REACT_APP_UPDATE_REBOOT:"updatereboot",REACT_APP_UPDATE_TWIN:"updatetwin",REACT_APP_UPLOADBLOB:"api/file/upload",REACT_APP_VM_SERVER:"https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/"})),F=(z.REACT_APP_VM_SERVER,z.REACT_APP_GETSTATUS,n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(E.a)(t).call(this,e))).scanCode=function(e){1==e?a.setState({showCam:!1}):a.setState({showCam:!0})},a.handleScan=function(e){e&&a.props.history.push("malls")},a.handleError=function(e){console.error(e)},a.state={showCam:!1,result:"No result"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){navigator.getUserMedia?navigator.getUserMedia({video:!0},function(e){},function(e){alert("The following error occurred when trying to access the camera: "+e)}):alert("Sorry, browser does not support camera access")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"light-blue lighten-1",role:"navigation"},r.a.createElement("div",{className:"nav-wrapper container"},r.a.createElement("div",{className:"row",id:"headerData"},r.a.createElement(P.a,{to:"/"},"Catch By Scan")))),r.a.createElement("div",{className:"section no-pad-bot",id:"index-banner"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"centerData"},r.a.createElement("div",{className:"center",style:{width:"100%"}},1==this.state.showCam?r.a.createElement("div",{className:"qrDiv"},r.a.createElement(p.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%",height:"1px"},ref:function(t){e.videoStream=t}}),r.a.createElement("button",{onClick:function(){return e.scanCode(e.state.showCam)},className:"btn waves-effect waves-light"},"BACK")):r.a.createElement("button",{onClick:function(){return e.scanCode(e.state.showCam)},className:"btn waves-effect waves-light"},"SCAN CODE"))))))}}]),t}(n.Component)),W=a(10),Z=(a(138),a(45)),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(E.a)(t).call(this,e))).scanCode=function(e){1==e?a.setState({showCam:!1}):a.setState({showCam:!0})},a.handleScan=function(e){e&&alert(e)},a.handleError=function(e){console.error(e)},a.state={showCam:!1,result:"No result"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"light-blue lighten-1",role:"navigation"},r.a.createElement("div",{className:"nav-wrapper container"},r.a.createElement("div",{className:"row",id:"headerData"},r.a.createElement(P.a,{to:"/"},"Catch By Scan")))),r.a.createElement("div",{className:"section no-pad-bot",id:"index-banner"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"centerData"},r.a.createElement("div",{style:{width:"100%",paddingTop:"15px"}},r.a.createElement("nav",{className:"row teal"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"col s12"},r.a.createElement("span",null,r.a.createElement("b",null,"Kormangala Forum Mall")))))),r.a.createElement("div",{className:"silderPart"},r.a.createElement(Z.Carousel,{showArrows:!1,showThumbs:!1},r.a.createElement("div",null,r.a.createElement("img",{src:"../images/callbacks.png"})),r.a.createElement("div",null,r.a.createElement("img",{src:"../images/callbackedition.png"})))),r.a.createElement("div",{className:"floorDetails",style:{width:"100%",paddingTop:"15px"}},r.a.createElement(W.Collapsible,{accordion:!0},r.a.createElement(W.CollapsibleItem,{expanded:!1,header:"Ground Floor",node:"div"},r.a.createElement(W.Table,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{"data-field":"id"},"No"),r.a.createElement("th",{"data-field":"name"},"Left Side"),r.a.createElement("th",{"data-field":"price"},"Right Side"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,r.a.createElement(W.Button,{node:"button",style:{marginRight:"5px"},waves:"light"},"Max")),r.a.createElement("td",null,r.a.createElement(W.Button,{node:"button",style:{marginRight:"5px"},waves:"light"},"Levies")))))),r.a.createElement(W.CollapsibleItem,{expanded:!1,header:"Floor 1",node:"div"},r.a.createElement(W.Table,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{"data-field":"id"},"No"),r.a.createElement("th",{"data-field":"name"},"Left Side"),r.a.createElement("th",{"data-field":"price"},"Right Side"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,r.a.createElement(W.Button,{node:"button",style:{marginRight:"5px"},waves:"light"},"Pantloons")),r.a.createElement("td",null,r.a.createElement(W.Button,{node:"button",style:{marginRight:"5px"},waves:"light"},"Jokie")))))),r.a.createElement(W.CollapsibleItem,{expanded:!1,header:"Floor 2",node:"div"},r.a.createElement(W.Table,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{"data-field":"id"},"No"),r.a.createElement("th",{"data-field":"name"},"Left Side"),r.a.createElement("th",{"data-field":"price"},"Right Side"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,r.a.createElement(W.Button,{node:"button",style:{marginRight:"5px"},waves:"light"},"Fastrack")),r.a.createElement("td",null,r.a.createElement(W.Button,{node:"button",style:{marginRight:"5px"},waves:"light"},"Reliance Trends"))))))))))))}}]),t}(n.Component),J=(a(144),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:F}),r.a.createElement(m.a,{exact:!0,path:"/malls",component:H}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){e.exports=a(148)},54:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/play.25419525.svg"},90:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/play.25419525.svg"}},[[48,2,1]]]);
//# sourceMappingURL=main.ba2ecb5c.chunk.js.map