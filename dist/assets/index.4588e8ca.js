import{a as w,c as K,d as y,o as r,b as l,e as s,w as D,v as L,f as S,F as u,r as m,t as g,g as v,h as p,i as M,n as A,j as $,k as P,l as E,m as T,p as I}from"./vendor.4782baad.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}};N();var F=function(){return{url:"https://aqdghome.herokuapp.com/models",modelNameList:[],getModelData(){return new Promise((t,i)=>{w.get(this.url).then(a=>{if(a.status==200)t(a.data);else throw new Error(a.statusText)}).catch(a=>{i(a)})})},getModelAttrList(t,i){return t.map(a=>a[i])},getModelResultList(t,i){let a=t;return i.name!=null&&i.name!=""?this.getFilterWithName(t,i.name):(i.statusFilter!=null&&i.statusFilter.length>0&&(a=this.getFilterWithStatus(a,i.statusFilter)),i.categoryFilter!=null&&i.categoryFilter.sub!=null&&(a=this.getFilterWithCategory(a,i.categoryFilter)),i.styleFilter!=null&&(a=this.getFilterWithStyle(a,i.styleFilter)),i.tagFilter!=null&&i.tagFilter.length>0&&(a=this.getFilterWithTag(a,i.tagFilter)),a)},getFilterWithName(t,i){return t.filter(a=>{if(a.name.toLowerCase().indexOf(i.toLowerCase())!==-1)return!0})},getFilterWithStatus(t,i){return t.filter(a=>a.status.find(n=>{if(i.includes(n)==!0)return!0}))},getFilterWithCategory(t,i){return t.filter(a=>{if(i.main.includes(a.category.main)==!0&&i.sub.includes(a.category.sub)==!0)return!0})},getFilterWithStyle(t,i){return t.filter(a=>{if(a.style==i)return!0})},getFilterWithTag(t,i){return t.filter(a=>a.tags.find(n=>{if(i.includes(n)==!0)return!0}))}}}(),C=K({state:{listModelName:[],searchKey:""},mutations:{addDataForListName(e,t){e.listModelName=t},setSearchKey(e,t){e.searchKey=t}},getters:{getListModelName(e){return e.listModelName},getSearchKey(e){return e.searchKey}},actions:{updateListName(e,t){e.commit("addDataForListName",t)},updateSearchKey(e,t){e.commit("setSearchKey",t)}}}),U="data:image/png;base64,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",R="/DGHOME/assets/search.5dcbcfec.svg",Q="/DGHOME/assets/close.7e7ee5ec.svg",B="/DGHOME/assets/question-circle.53ff6b34.svg",G="/DGHOME/assets/bell.64013f0a.svg",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS9SURBVHgBjVVtTFNXGH7ubWkpULida/mYkUsUxpe0AYZzEYVpZlSyof5Y4maMS9xHYgJkX1m20XaLc1myjF8LMVs0MY45s4iGqPuDZaAbMWCHwIBtoUXWlpauBUoLbenduZe2tKUQn+S097znvc/znvO+570UNoFGN8mEKKaJ4rg6MmUBjg0vuQHKyHHcDZrydxp1uaaNOKjkxFaWg/QiIayLtQe8s8J/StrTia9couDXJxNaJ1Chd5GIQzryyPDzOXMv5k19WHZPIRTwRv1kymJk5e9BJlsbMbk5Dvoh/Za2DQUIuTZMjgj5zIPvsBmYwpegUr8WnXMUrRvSKvTrBMKRR9Wdo51kXMeTQKk+AUXhwTURDi2RndD8D3/miZFHyCsKcvB6vXpTAccfP0TzI0RNQctzRgU4SLQIn7kQ/Uhn1PnqB6/iwtlG/PLZKdSWsRuKzJt6Y6fMapEQsdWKkUxGVnyOMTzuOS88f/XGQZw98nwckdnuxrmfDPh12IwphztqlzLbkH/g8zhfCrRCHOLEjVRMqv1kq2nUMpRiD+jFGRw404J/7bOoKS/BF01n4Fv0Ytk6Csr6J4rTswBJOpzeFfh900hECMFmUU79R3y4bMR4LNcN59gNsCoGtZU7cXR/Lc43vRkth1n3HPZUVgg2lUJOLocPTvs08uQS1KjrYV5Oi90BxCQDmoghV7KMZtaO+1IpGvbuhsM1hzv3HuD767dRVVqEoy+u1vyFn7sEGw/ersiUY3rKik/y/8KxkSx4VsRhRo7lk8ysCSwhIzUVlYXbkavcgolpG4orquHPyEPHnW5MmKZhGDCiq7cfDiiw64VaGAYfYV+1Gjuys5EhCkJORgwEgSgmfOnC/+Fdz8HqcCJXpSJtIQspskwUFbBY8HqxsOhDZXkpLPNBKJU5yMtW8bdLCMrql5KRGpcHXsAUmfBbu2rPwz51OapKitDVbUA+OebqPAmsMzMoYreijkQ7ODyCj4/XwGoax8DQCJ4l9r3qMtxyZiMBbkqt++9uYlN7t9SGk2ovBkYnhKPJSJPhreMNUKWmI+DywCWj8PXla4L9xKH9KMrfii/75PjxsTKBnzNQFTqHjmRbG2uWS0K49fIU5CmhOPeVOS/8swuQbY+P1LIoxuGb2xKjJy0j1EKTQmpLXFjw07gylrXuBVqeCukzT2Hx9l34fhuI2tsfKZAMNCXupI06Bf/xMCQutg8rcHNSHmdb6n8I97cXEbTZISnesaFfGJcIt0koWArUaQ7cQ8SULI/W35WweMR4e6dLmMt2V0FaUgiaycRCgEb7oAJXxrOSkbvJsetXucPQaJ3NpNq+SfSkgh4cUTnxaZkDdGqKYAstBXDyHrknoYJk5CCducWoV661ax5G0r8phPSJznTPO7D1nMOKZwkBkmB+8M/eng8huv/eenLCESGPExBEdEodRT4WED7qBAEPKL8Hf9tssLnXOue1/v7VOVmPOxY+csIRL5gEGp2LDWFFR8//c8rX/T5kmAfDMDhUXQ2LxYK+8XEEAgEskYuZ1nAZnCzbQEF0mk/q+h1tAo1Gw9I03UjIXmltbdWYzWamo6MDfr/fJBaLTSKRqCcYDLYZjUb3Rhz/A8bR58OLFlfyAAAAAElFTkSuQmCC";var f=(e,t)=>{const i=e.__vccOpts||e;for(const[a,n]of t)i[a]=n;return i};const V=y({name:"Header",data(){return{store:C,service:{ModelsService:F},searchQuery:"",isShowAutoComplete:!1,defaultItemNumber:10,isShowCloseIcon:!1,maxItem:6,isShowLoadMore:!1,isSelectedName:!1}},watch:{searchQuery(e){e?this.isSelectedName==!1?this.isShowAutoComplete=!0:this.isSelectedName=!1:this.store.dispatch("updateSearchKey",e)}},computed:{listName(){return this.maxItem=6,this.searchQuery!=""?this.store.state.listModelName.filter(e=>{if(e.toLowerCase().indexOf(this.searchQuery.toLowerCase())!==-1)return!0}):this.store.state.listModelName}},methods:{clearSearchBar(){this.searchQuery="",this.isShowCloseIcon=!1,this.isShowAutoComplete=!1,this.store.dispatch("updateSearchKey",this.searchQuery)},closeAutoComplete(){this.isShowAutoComplete=!1},getName(e){this.searchQuery=e,this.isShowAutoComplete=!1,this.isSelectedName=!0,document.getElementById("search").focus()},handleEnter(e){e.key==="Enter"&&this.handleSearch()},handleBLur(){window.onclick=e=>{this.isShowAutoComplete=!1}},handleSearch(){this.searchQuery!=""&&(this.isShowCloseIcon=!0,this.isShowAutoComplete=!1,this.store.dispatch("updateSearchKey",this.searchQuery))},loadMore(){window.onclick=e=>{},this.maxItem+=6}}}),H={class:"topbar-wrapper"},z=s("div",{class:"logo-area"},[s("img",{src:U,alt:"logo"})],-1),W={class:"search-area"},Y={class:"search-container"},J=s("img",{class:"close-icon",src:Q,alt:"search"},null,-1),Z=[J],j={class:"result-area txt-normal"},x=s("p",null,"Models",-1),X={class:"search-results",id:"results"},ee=["onClick"],te={key:1,class:"no-result"},se=s("p",null,"See more results",-1),ae=[se],ie=s("div",{class:"action-icon-area"},[s("img",{src:B,alt:"info"}),s("img",{src:G,alt:"bell"}),s("img",{src:q,alt:"user"})],-1);function oe(e,t,i,a,n,c){return r(),l("div",H,[z,s("div",W,[s("div",Y,[D(s("input",{class:"search-input txt-normal",id:"search",type:"text",onClick:t[0]||(t[0]=(...o)=>e.handleBLur&&e.handleBLur(...o)),autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=o=>e.searchQuery=o),onKeyup:t[2]||(t[2]=(...o)=>e.handleEnter&&e.handleEnter(...o)),placeholder:"Search for models..."},null,544),[[L,e.searchQuery]]),e.isShowCloseIcon?(r(),l("span",{key:1,onClick:t[5]||(t[5]=(...o)=>e.clearSearchBar&&e.clearSearchBar(...o)),class:"gourp-search-btn"},Z)):(r(),l("span",{key:0,onClick:t[4]||(t[4]=(...o)=>e.handleSearch&&e.handleSearch(...o)),class:"gourp-search-btn"},[s("img",{class:"search-icon",onClick:t[3]||(t[3]=(...o)=>e.handleSearch&&e.handleSearch(...o)),src:R,alt:"search"})])),D(s("div",j,[x,s("ul",X,[e.listName.length>0?(r(!0),l(u,{key:0},m(e.listName.length>e.maxItem?e.maxItem:e.listName.length,o=>(r(),l("li",{key:o,onClick:h=>e.getName(e.listName[o-1])},g(e.listName[o-1]),9,ee))),128)):(r(),l("li",te,"No results")),D(s("li",{class:"more-result",onClick:t[6]||(t[6]=(...o)=>e.loadMore&&e.loadMore(...o))},ae,512),[[S,e.maxItem<e.listName.length]])])],512),[[S,e.isShowAutoComplete]])])]),ie])}var re=f(V,[["render",oe]]);const le={},ne={class:"sidebar-area"},ce={class:"list-menu"},de=s("li",{class:"active"},[s("span",{class:"icon icon-dashboard"}),s("p",null,"Overview")],-1),he=s("li",null,[s("span",{class:"icon icon-list"}),s("p",null,"Model Listing")],-1);function ue(e,t){const i=v("router-link");return r(),l("div",ne,[s("ul",ce,[p(i,{to:"/"},{default:M(()=>[de]),_:1}),p(i,{to:"/model-list"},{default:M(()=>[he]),_:1})])])}var ge=f(le,[["render",ue]]);const me={class:"content-wrapper"},pe=y({setup(e){return(t,i)=>{const a=v("router-view");return r(),l(u,null,[p(re),s("div",me,[p(ge),p(a)])],64)}}});const ye=y({name:"Overview",data(){return{service:{ModelsService:F},listModelName:[]}},created(){this.service.ModelsService.getModelData().then(e=>{this.listModelName=this.service.ModelsService.getModelAttrList(e,"name"),C.dispatch("updateListName",this.listModelName)})}}),fe={class:"content-area"},ve=s("h1",null,"Overview",-1),_e=s("div",{class:"txt-large"},[s("p",null,"This is homepage, display overview information"),s("p",null,"Comming soon")],-1),De=[ve,_e];function Se(e,t,i,a,n,c){return r(),l("div",fe,De)}var ke=f(ye,[["render",Se]]),we="/DGHOME/assets/Home.277d4315.svg",b="/DGHOME/assets/right-icon.2a33f582.svg";const Ae=y({props:{crumbs:{type:Array,required:!0}},methods:{isLast(e){return e===this.crumbs.length-1},selected(e){this.$emit("selected",e)}}}),Ce={class:"breadcrumb"},be=s("li",{class:"breadcrumb-item"},[s("img",{src:we,class:"home-icon",width:"20",height:"20",alt:"Home icon"}),s("span",null,"Home"),s("img",{src:b,class:"right-icon",width:"16",height:"16",alt:"right icon"})],-1),Me=["onClick"];function $e(e,t,i,a,n,c){const o=v("router-link");return r(),l("ul",Ce,[p(o,{to:"/"},{default:M(()=>[be]),_:1}),(r(!0),l(u,null,m(e.crumbs,(h,_)=>(r(),l("li",{key:_,class:A(["breadcrumb-item",{disabled:e.isLast(_)}]),onClick:d=>e.selected(h)},[s("span",null,g(h),1),s("img",{src:b,class:A(["right-icon",{"d-none":e.isLast(_)}]),width:"16",height:"16",alt:"right icon"},null,2)],10,Me))),128))])}var Fe=f(Ae,[["render",$e]]);const Le=y({name:"CategoryDialog",props:{categoryData:{type:Object,required:!0}},data(){return{selectedData:{main:[],sub:[]}}},methods:{submitData(){let e={type:"category",key:this.selectedData};this.$emit("selected",e),this.$emit("closePopup",!1)},selectAll(e){const t=document.querySelector("."+e).querySelectorAll('input[type="checkbox"]');this.selectedData.main.push(e);for(let i of t)i.checked=!0,this.selectedData.sub.push(i.value)},deSelectAll(){const e=document.querySelector(".list-container").querySelectorAll('input[type="checkbox"]');for(let t of e)t.checked=!1;this.selectedData={main:[],sub:[]}},onChange(e,t,i){if(i.target.checked==!0)this.selectedData.main.includes(e)==!1&&this.selectedData.main.push(e),this.selectedData.sub.includes(t)==!1&&this.selectedData.sub.push(t);else{let a=-1;a=this.selectedData.sub.indexOf(i.target.value),a>-1&&this.selectedData.sub.splice(a,1),this.selectedData.sub.length<1&&(this.selectedData.main=[])}}}}),Oe={class:"category-dropdown dropdown"},Ke={class:"list-container"},Pe={class:"category-title"},Ee={class:"txt-normal"},Te=["onClick"],Ie={class:"category-option"},Ne=["for"],Ue=["onChange","name","value","id"],Re=s("span",{class:"checkmark"},null,-1),Qe={class:"dropdown-footer"};function Be(e,t,i,a,n,c){return r(),l("div",Oe,[s("div",Ke,[(r(!0),l(u,null,m(e.categoryData,o=>(r(),l("div",{key:o.id,class:A(["category-group",o.name])},[s("div",Pe,[s("p",Ee,g(o.name),1),s("button",{onClick:h=>e.selectAll(o.name)},"SELECT ALL",8,Te)]),s("div",Ie,[(r(!0),l(u,null,m(o.sub,(h,_)=>(r(),l("label",{key:_,class:"checkbox-container",for:h.name},[s("p",null,g(h.name),1),s("input",{type:"checkbox",onChange:d=>e.onChange(o.name,h.name,d),name:o.name,value:h.name,id:h.name},null,40,Ue),Re],8,Ne))),128))])],2))),128))]),s("div",Qe,[s("button",{onClick:t[0]||(t[0]=(...o)=>e.submitData&&e.submitData(...o)),class:"apply-btn"},"APPLY"),s("button",{onClick:t[1]||(t[1]=(...o)=>e.deSelectAll&&e.deSelectAll(...o)),class:"clear-btn"},"CLEAR")])])}var Ge=f(Le,[["render",Be]]);const qe=y({name:"StyleDialog",props:{styleData:{type:Object,required:!0}},data(){return{}},methods:{submitData(e){let t={type:"style",key:e};this.$emit("selected",t),this.$emit("closePopup",!1)}}}),Ve={class:"style-dropdown dropdown"},He={class:"list-style"},ze={class:"txt-normal"},We=["onClick"],Ye={class:"clear-btn"};function Je(e,t,i,a,n,c){return r(),l("div",Ve,[s("div",He,[s("ul",ze,[(r(!0),l(u,null,m(e.styleData,o=>(r(),l("li",{key:o.id,onClick:h=>e.submitData(o.id)},g(o.name),9,We))),128))])]),s("div",Ye,[s("p",{onClick:t[0]||(t[0]=o=>e.submitData(null))},"Clear")])])}var Ze=f(qe,[["render",Je]]);const je=y({name:"TagsDialog",props:{tagsData:{type:Array,required:!0}},data(){return{searchValue:""}},computed:{listTags(){return this.searchValue!=""?this.tagsData.filter(e=>{if(e.name.toLowerCase().indexOf(this.searchValue.toLowerCase())!==-1)return e}):this.tagsData}},methods:{updateData(e){this.tagsData.forEach(t=>{e.forEach(i=>{if(t.name==i){t.selected=!0;return}})})},submitData(e){let t={type:"tag",key:e};this.$emit("selected",t),this.$emit("closePopup",!1)}}}),xe={class:"tag-dropdown dropdown"},Xe={class:"search-area"},et={class:"tag-list"},tt={class:"txt-normal"},st=["onClick"];function at(e,t,i,a,n,c){return r(),l("div",xe,[s("div",Xe,[D(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.searchValue=o),type:"text",placeholder:"Search for tags...",name:"tag-search",id:"tag-search",autocomplete:"false"},null,512),[[L,e.searchValue]])]),s("div",et,[s("ul",tt,[(r(!0),l(u,null,m(e.listTags,o=>(r(),l("li",{class:A(o.selected?"disabled":""),key:o.id,onClick:h=>e.submitData(o.name)},g(o.name),11,st))),128))])])])}var it=f(je,[["render",at]]),ot="/DGHOME/assets/add.25eec858.svg";const rt=y({name:"FilterComponent",components:{CategoryDialog:Ge,StyleDialog:Ze,TagsDialog:it},props:{filterData:{type:Object,required:!0}},data(){return{isShowCategoryFilter:!1,isShowStyleFilter:!1,isShowTagFilter:!1,isShowOverlay:!1,colectedData:null,selectedTags:[],filteredData:null,filterKey:{statusFilter:[],categoryFilter:null,styleFilter:null,tagFilter:[]}}},methods:{toggleCategoryFilter(){this.isShowCategoryFilter=!this.isShowCategoryFilter,this.isShowOverlay=!this.isShowOverlay,this.toggleOverlay(this.isShowOverlay)},toggleStyleFilter(){this.isShowStyleFilter=!this.isShowStyleFilter,this.isShowOverlay=!this.isShowOverlay,this.toggleOverlay(this.isShowOverlay)},toggleTagFilter(){this.$refs.tagDialog.updateData(this.selectedTags),this.isShowTagFilter=!this.isShowTagFilter,this.isShowOverlay=!this.isShowOverlay,this.toggleOverlay(this.isShowOverlay)},toggleOverlay(e){this.$emit("toggleOverlay",e)},closePopup(){this.isShowCategoryFilter=!1,this.isShowStyleFilter=!1,this.isShowTagFilter=!1,this.isShowOverlay=!1,this.toggleOverlay(!1)},removeTag(e){let t=this.selectedTags.indexOf(e);t>-1&&this.selectedTags.splice(t,1),this.filterKey.tagFilter=this.selectedTags,this.$emit("selectedData",this.filterKey)},submitData(e){if(e.type=="tag"&&(this.selectedTags.push(e.key),this.filterKey.tagFilter=this.selectedTags),e.type=="status"){const t=document.querySelector(".status-list").querySelectorAll('input[type="checkbox"]');let i=!1;if(t.forEach(a=>{a.checked==!0&&(i=!0)}),this.filterKey.statusFilter.includes(e.key)==!1)this.filterKey.statusFilter.push(e.key);else{let a=this.filterKey.statusFilter.indexOf(e.key);a>-1&&this.filterKey.statusFilter.splice(a,1)}i==!1&&(this.filterKey.statusFilter=[])}e.type=="category"&&(this.filterKey.categoryFilter=e.key,e.key.sub.length<1&&(this.filterKey.categoryFilter=[])),e.type=="style"&&(this.filterKey.styleFilter=e.key),this.$emit("selectedData",this.filterKey)}}}),lt={class:"filter-area"},nt={class:"status-filter"},ct=s("p",{class:"title"},"Status",-1),dt={class:"status-list txt-normal"},ht=["for"],ut=["onClick","id","value"],gt=s("span",{class:"checkmark"},null,-1),mt={class:"category-filter"},pt=s("p",{class:"title"},"Category",-1),yt={class:"dropdown-btn-container"},ft=$(" Filter by categories "),vt=s("img",{src:b,class:"dropdown-icon",alt:"dropdown icon",width:"24",height:"24"},null,-1),_t=[ft,vt],Dt={class:"style-filter"},St=s("p",{class:"title"},"Style",-1),kt=s("button",{class:"dropdown-btn"},[$(" Filter by styles "),s("img",{src:b,class:"dropdown-icon",alt:"dropdown icon",width:"24",height:"24"})],-1),wt=[kt],At={class:"tag-filter"},Ct=s("p",{class:"title"},"Tag",-1),bt={class:"tag-container"},Mt=["onClick"],$t=s("img",{src:ot,alt:"Add icon"},null,-1),Ft=s("p",null,"Add",-1),Lt=[$t,Ft];function Ot(e,t,i,a,n,c){const o=v("CategoryDialog"),h=v("StyleDialog"),_=v("TagsDialog");return r(),l("div",lt,[s("div",nt,[ct,s("ul",dt,[(r(!0),l(u,null,m(e.filterData.statusList,d=>(r(),l("li",{key:d.id},[s("label",{class:"checkbox-container",for:d.id},[$(g(d.name)+" ",1),s("input",{onClick:k=>e.submitData({type:"status",key:d.id}),type:"checkbox",name:"status",id:d.id,value:d.id},null,8,ut),gt],8,ht)]))),128))])]),s("div",mt,[pt,s("div",yt,[s("button",{onClick:t[0]||(t[0]=(...d)=>e.toggleCategoryFilter&&e.toggleCategoryFilter(...d)),class:"dropdown-btn"},_t)]),D(p(o,{categoryData:e.filterData.categoryList,onClosePopup:e.closePopup,onSelected:e.submitData},null,8,["categoryData","onClosePopup","onSelected"]),[[S,e.isShowCategoryFilter]])]),s("div",Dt,[St,s("div",{onClick:t[1]||(t[1]=(...d)=>e.toggleStyleFilter&&e.toggleStyleFilter(...d)),class:"dropdown-btn-container"},wt),D(p(h,{styleData:e.filterData.styleList,onSelected:e.submitData,onClosePopup:e.closePopup},null,8,["styleData","onSelected","onClosePopup"]),[[S,e.isShowStyleFilter]])]),s("div",At,[Ct,s("div",bt,[(r(!0),l(u,null,m(e.selectedTags,d=>(r(),l("div",{onClick:k=>e.removeTag(d)},g(d),9,Mt))),256)),s("div",{class:"add-btn",onClick:t[2]||(t[2]=(...d)=>e.toggleTagFilter&&e.toggleTagFilter(...d))},Lt)]),D(p(_,{ref:"tagDialog",tagsData:e.filterData.tagsList,onSelected:e.submitData,onClosePopup:e.closePopup},null,8,["tagsData","onSelected","onClosePopup"]),[[S,e.isShowTagFilter]])])])}var Kt=f(rt,[["render",Ot]]),Pt="/DGHOME/assets/eye-on.3077dcc1.svg";const Et=y({props:{modelData:{type:Object,required:!0}},data(){return{mainImage:"",numberOfTag:0,maxTagShow:0}},created(){this.mainImage=this.modelData.image[0],this.modelData.tags.length>3?(this.numberOfTag=this.modelData.tags.length-3,this.maxTagShow=3):this.maxTagShow=this.modelData.tags.length},methods:{changeImage(e){this.mainImage=e}}}),Tt={class:"model-item"},It={class:"model-img"},Nt={class:"thumbnail-img"},Ut=["onClick"],Rt=["src","alt"],Qt={class:"review-img"},Bt=s("div",{class:"overlay"},[s("img",{class:"icon-eye",src:Pt,alt:"eye icon"})],-1),Gt=["src","alt"],qt={class:"model-info"},Vt={class:"model-name"},Ht={class:"model-catagory"},zt=s("img",{src:b,class:"right-icon",width:"8",height:"8",alt:"right icon"},null,-1),Wt={class:"model-tag"};function Yt(e,t,i,a,n,c){return r(),l("div",Tt,[s("div",It,[s("ul",Nt,[(r(),l(u,null,m(3,o=>s("li",{key:o,onClick:h=>e.changeImage(e.modelData.image[o-1])},[s("img",{src:e.modelData.image[o-1]?e.modelData.image[o-1]:"",alt:e.modelData.image[o-1],onerror:"this.src='/src/assets/imgs/no-image.png';"},null,8,Rt)],8,Ut)),64))]),s("div",Qt,[Bt,s("img",{src:e.mainImage?e.mainImage:"",onerror:"this.src='/src/assets/imgs/no-image.png';",alt:e.mainImage},null,8,Gt)])]),s("div",qt,[s("div",Vt,g(e.modelData.name),1),s("div",Ht,[s("ul",null,[s("li",null,[s("span",null,g(e.modelData.category.main),1),zt]),s("li",null,[s("span",null,g(e.modelData.category.sub),1)])])]),s("div",Wt,[(r(!0),l(u,null,m(e.maxTagShow,o=>(r(),l("div",{key:o},g(e.modelData.tags[o-1]),1))),128)),D(s("div",null,g(e.numberOfTag)+" more tags",513),[[S,e.numberOfTag>0]])])])])}var Jt=f(Et,[["render",Yt]]);const Zt=y({name:"Pagination",props:{paginationData:{type:Object,required:!0}},data(){return{currentPage:0}},created(){this.currentPage=this.paginationData.currentPage},methods:{changePage(e){e!=this.currentPage&&(this.currentPage=e,this.$emit("changePage",e))}}}),jt={class:"pagination-area"},xt=["onClick"];function Xt(e,t,i,a,n,c){return r(),l("div",jt,[(r(!0),l(u,null,m(e.paginationData.totalPage,o=>(r(),l("button",{key:o,class:A(["pagination-btn",e.currentPage===o?"actived":""]),onClick:h=>e.changePage(o)},g(o),11,xt))),128))])}var es=f(Zt,[["render",Xt]]),ts=function(){return{url:"https://aqdghome.herokuapp.com/tags",getTagsData(){return new Promise((t,i)=>{w.get(this.url).then(a=>{if(a.status==200)t(a.data);else throw new Error(a.statusText)}).catch(a=>{i(a)})})}}}(),ss=function(){return{url:"https://aqdghome.herokuapp.com/status",getStatusData(){return new Promise((t,i)=>{w.get(this.url).then(a=>{if(a.status==200)t(a.data);else throw new Error(a.statusText)}).catch(a=>{i(a)})})}}}(),as=function(){return{url:"https://aqdghome.herokuapp.com/styles",getStyleData(){return new Promise((t,i)=>{w.get(this.url).then(a=>{if(a.status==200)t(a.data);else throw new Error(a.statusText)}).catch(a=>{i(a)})})}}}(),is=function(){return{url:"https://aqdghome.herokuapp.com/categories",getCategoryData(){return new Promise((t,i)=>{w.get(this.url).then(a=>{if(a.status==200)t(a.data);else throw new Error(a.statusText)}).catch(a=>{i(a)})})}}}();const os=y({name:"ModelsList",components:{Breadcrumb:Fe,Filter:Kt,ModelCard:Jt,Pagination:es},data(){return{service:{TagsService:ts,ModelsService:F,StatusService:ss,StyleService:as,CategoryService:is},crumbs:["Model Listing"],isShowOverlay:!1,paginationData:{maxItemOnPage:9,totalPage:0,currentPage:0},modelListData:[],filterData:{statusList:[],categoryList:[],styleList:[],tagsList:[]},backupModelList:[],listModelName:[]}},computed:{searchNameKey(){return C.state.searchKey}},watch:{isShowOverlay(e){const t=document.querySelector(".content-wrapper");e&&t!=null?t.style.overflow="hidden":t.style.overflow=""},searchNameKey(e){this.updateData({name:e})}},created(){this.paginationData.currentPage=1,this.initData()},methods:{initData(){this.service.ModelsService.getModelData().then(e=>{this.backupModelList=e,this.paginationData.totalPage=Math.ceil(this.backupModelList.length/this.paginationData.maxItemOnPage),this.modelListData=this.backupModelList.slice((this.paginationData.currentPage-1)*this.paginationData.maxItemOnPage,this.paginationData.currentPage*this.paginationData.maxItemOnPage),this.listModelName=this.service.ModelsService.getModelAttrList(e,"name"),C.dispatch("updateListName",this.listModelName)}),this.service.StatusService.getStatusData().then(e=>{this.filterData.statusList=e}),this.service.CategoryService.getCategoryData().then(e=>{this.filterData.categoryList=e}),this.service.StyleService.getStyleData().then(e=>{this.filterData.styleList=e}),this.service.TagsService.getTagsData().then(e=>{this.filterData.tagsList=e})},toggleOverlay(e){this.isShowOverlay=e},closePopup(){this.isShowOverlay=!1,this.$refs.filter.closePopup()},changePage(e){this.paginationData.currentPage=e,this.modelListData=this.backupModelList.slice((e-1)*this.paginationData.maxItemOnPage,e*this.paginationData.maxItemOnPage)},updateData(e){this.service.ModelsService.getModelData().then(t=>{this.backupModelList=this.service.ModelsService.getModelResultList(t,e),this.paginationData.currentPage=1,this.$refs.pagination.currentPage=1,this.paginationData.totalPage=Math.ceil(this.backupModelList.length/this.paginationData.maxItemOnPage),this.modelListData=this.backupModelList.slice((this.paginationData.currentPage-1)*this.paginationData.maxItemOnPage,this.paginationData.currentPage*this.paginationData.maxItemOnPage)})}}}),rs={class:"model-container"},ls={class:"breadscrum-area"},ns={class:"model-content-wrapper"},cs={class:"list-area"},ds={class:"list-model"};function hs(e,t,i,a,n,c){const o=v("Breadcrumb"),h=v("ModelCard"),_=v("Pagination"),d=v("Filter");return r(),l(u,null,[s("div",rs,[s("div",ls,[p(o,{crumbs:e.crumbs},null,8,["crumbs"])]),s("div",ns,[s("div",cs,[s("div",ds,[(r(!0),l(u,null,m(e.modelListData,(k,O)=>(r(),P(h,{key:O,modelData:k,onSelectedData:e.updateData},null,8,["modelData","onSelectedData"]))),128))]),p(_,{ref:"pagination",paginationData:e.paginationData,onChangePage:e.changePage},null,8,["paginationData","onChangePage"])]),p(d,{ref:"filter",filterData:e.filterData,onSelectedData:e.updateData,onToggleOverlay:e.toggleOverlay},null,8,["filterData","onSelectedData","onToggleOverlay"])])]),D(s("div",{onClick:t[0]||(t[0]=(...k)=>e.closePopup&&e.closePopup(...k)),class:"dropdown-overlay"},null,512),[[S,e.isShowOverlay]])],64)}var us=f(os,[["render",hs]]),gs=E({history:T(),routes:[{path:"/",component:ke},{path:"/model-list",component:us}]});I(pe).use(gs).use(C).mount("#app");