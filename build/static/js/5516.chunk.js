"use strict";(this.webpackChunkproject_bae=this.webpackChunkproject_bae||[]).push([[5516],{61638:function(e,t,s){s.d(t,{AV:function(){return r},ConfigCtrl:function(){return m},ExplorerCtrl:function(){return k},OptionsCtrl:function(){return u},ThemeCtrl:function(){return R},ToastCtrl:function(){return H},jb:function(){return T},uA:function(){return c},zv:function(){return a}});var n=s(86949);const o=(0,n.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),r={state:o,subscribe(e){return(0,n.Ld)(o,(()=>e(o)))},push(e,t){e!==o.view&&(o.view=e,t&&(o.data=t),o.history.push(e))},reset(e){o.view=e,o.history=[e]},replace(e){o.history.length>1&&(o.history[o.history.length-1]=e,o.view=e)},goBack(){if(o.history.length>1){o.history.pop();const[e]=o.history.slice(-1);o.view=e}},setData(e){o.data=e}},a={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){return a.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;return n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s),`${n}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;return n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s),`${n}wc?uri=${encodeURIComponent(t)}`},async wait(e){return new Promise((t=>{setTimeout(t,e)}))},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(a.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=r.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},i=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),l=(0,n.sj)({enabled:i,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:l,subscribe(e){return(0,n.Ld)(l.events,(()=>e((0,n.CO)(l.events[l.events.length-1]))))},initialize(){l.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(l.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){l.connectedWalletId=e},click(e){if(l.enabled){const t={type:"CLICK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},track(e){if(l.enabled){const t={type:"TRACK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},view(e){if(l.enabled){const t={type:"VIEW",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}}},d=(0,n.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),u={state:d,subscribe(e){return(0,n.Ld)(d,(()=>e(d)))},setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},p=(0,n.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:p,subscribe(e){return(0,n.Ld)(p,(()=>e(p)))},setConfig(e){var t,s;c.initialize(),u.setChains(e.chains),u.setIsAuth(Boolean(e.enableAuthMode)),u.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),u.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),a.setModalVersionInStorage(),Object.assign(p,e)}};var h=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,v=(e,t,s)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const C="https://explorer-api.walletconnect.com",f="wcm",y="js-2.6.2";async function L(e,t){const s=((e,t)=>{for(var s in t||(t={}))b.call(t,s)&&v(e,s,t[s]);if(g)for(var s of g(t))I.call(t,s)&&v(e,s,t[s]);return e})({sdkType:f,sdkVersion:y},t),n=new URL(e,C);return n.searchParams.append("projectId",m.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&n.searchParams.append(e,String(t))})),(await fetch(n)).json()}const w={async getDesktopListings(e){return L("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return L("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return L("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return L("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${C}/w3m/v1/getWalletImage/${e}?projectId=${m.state.projectId}&sdkType=${f}&sdkVersion=${y}`},getAssetImageUrl(e){return`${C}/w3m/v1/getAssetImage/${e}?projectId=${m.state.projectId}&sdkType=${f}&sdkVersion=${y}`}};var W=Object.defineProperty,O=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const U=a.isMobile(),M=(0,n.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),k={state:M,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=m.state;if("NONE"===e||"ALL"===t&&!e)return M.recomendedWallets;if(a.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await w.getAllListings(t),n=Object.values(s);n.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),M.recomendedWallets=n}else{const{chains:e,isAuth:s}=u.state,n=e?.join(","),o=a.isArray(t),r={page:1,sdks:s?"auth_v1":void 0,entries:a.RECOMMENDED_WALLET_AMOUNT,chains:n,version:2,excludedIds:o?t.join(","):void 0},{listings:i}=U?await w.getMobileListings(r):await w.getDesktopListings(r);M.recomendedWallets=Object.values(i)}return M.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))E.call(t,s)&&A(e,s,t[s]);if(O)for(var s of O(t))j.call(t,s)&&A(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=m.state,{recomendedWallets:o}=M;if("ALL"===n)return M.wallets;o.length?t.excludedIds=o.map((e=>e.id)).join(","):a.isArray(s)&&(t.excludedIds=s.join(",")),a.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),u.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:i}=e,{listings:l,total:c}=U?await w.getMobileListings(t):await w.getDesktopListings(t),d=Object.values(l),p=i?"search":"wallets";return M[p]={listings:[...M[p].listings,...d],total:c,page:r??1},{listings:d,total:c}},getWalletImageUrl(e){return w.getWalletImageUrl(e)},getAssetImageUrl(e){return w.getAssetImageUrl(e)},resetSearch(){M.search={listings:[],total:0,page:1}}},D=(0,n.sj)({open:!1}),T={state:D,subscribe(e){return(0,n.Ld)(D,(()=>e(D)))},async open(e){return new Promise((t=>{const{isUiLoaded:s,isDataLoaded:n}=u.state;if(a.removeWalletConnectDeepLink(),u.setWalletConnectUri(e?.uri),u.setChains(e?.chains),r.reset("ConnectWallet"),s&&n)D.open=!0,t();else{const e=setInterval((()=>{const s=u.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),D.open=!0,t())}),200)}}))},close(){D.open=!1}};var N=Object.defineProperty,S=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,x=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const $=(0,n.sj)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),R={state:$,subscribe(e){return(0,n.Ld)($,(()=>e($)))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&($.themeMode=t),s&&($.themeVariables=((e,t)=>{for(var s in t||(t={}))P.call(t,s)&&x(e,s,t[s]);if(S)for(var s of S(t))_.call(t,s)&&x(e,s,t[s]);return e})({},s))}},V=(0,n.sj)({open:!1,message:"",variant:"success"}),H={state:V,subscribe(e){return(0,n.Ld)(V,(()=>e(V)))},openToast(e,t){V.open=!0,V.message=e,V.variant=t},closeToast(){V.open=!1}}},35516:function(e,t,s){s.d(t,{WalletConnectModal:function(){return o}});var n=s(61638);class o{constructor(e){this.openModal=n.jb.open,this.closeModal=n.jb.close,this.subscribeModal=n.jb.subscribe,this.setTheme=n.ThemeCtrl.setThemeConfig,n.ThemeCtrl.setThemeConfig(e),n.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(2660).then(s.bind(s,2660));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),n.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);