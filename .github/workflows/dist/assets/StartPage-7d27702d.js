import{_ as N,i as o,b as e,c as i,d as m,w as n,f as t,F as r,j as d,p as E,e as w,k as S,l as x,m as u,q as p,t as y}from"./index-f8263904.js";const P={name:"StartPage",data(){return{navItems:[{id:1,title:"面部"},{id:2,title:"道具"},{id:3,title:"发型"},{id:4,title:"服装"},{id:5,title:"背景"},{id:6,title:"称号"}],selectedNavItem:null,itemList:[{id:1,title:"标题1",image:["src/assets/svg/skin/Ellipse 13.svg","src/assets/svg/skin/Ellipse 15.svg","src/assets/svg/skin/Ellipse 16.svg","src/assets/svg/skin/Ellipse 17.svg","src/assets/svg/skin/Ellipse 18.svg","src/assets/svg/skin/Ellipse 19.svg","src/assets/svg/skin/Ellipse 20.svg"]},{id:2,title:"标题2",image:["src/assets/svg/skin/Ellipse 14.svg"]},{id:3,title:"标题3",image:["src/assets/svg/skin/Ellipse 15.svg"]}]}},computed:{selectedNavItems(){return this.selectedNavItem?this.itemList.filter(s=>s.id===this.selectedNavItem):[]}},methods:{selectNavItem(s){this.selectedNavItem=s},goToNextPage(){}}},v=s=>(E("data-v-e891b9d2"),s=s(),w(),s),V={class:"wrapper"},B=v(()=>t("div",{class:"position"},[t("img",{src:S,class:"iconfont position__icon",alt:""}),t("div",null,"宝杯形象"),t("img",{src:x,class:"iconfont topRight",alt:""})],-1)),L=v(()=>t("img",{src:u,class:"baobei",alt:"Main Image"},null,-1)),C={class:"nav-bar"},T={class:"sub-content"},F={class:"title"},M=["src"],j=v(()=>t("img",{src:u,class:"baobei",alt:"Main Image"},null,-1));function q(s,l,D,R,_,g){const b=o("van-col"),f=o("van-row"),h=o("van-tab"),k=o("van-tabs");return e(),i("div",V,[B,L,m(k,{modelValue:s.active,"onUpdate:modelValue":l[0]||(l[0]=a=>s.active=a),swipeable:"",color:"#000",animated:"","swipe-threshold":5,"title-inactive-color":"#999999","title-active-color":"#fff",background:"transparent",border:!1},{default:n(()=>[(e(!0),i(r,null,d(_.navItems,a=>(e(),p(h,{title:a.title,key:a.id},{default:n(()=>[t("ul",C,[t("div",T,[(e(!0),i(r,null,d(_.itemList,c=>(e(),i("ul",{key:c.id},[t("li",F,y(c.title),1),m(f,null,{default:n(()=>[(e(!0),i(r,null,d(c.image,I=>(e(),p(b,{key:s.index,span:"4"},{default:n(()=>[t("img",{src:I,alt:"Item Image",style:{width:"80%",height:"80%"}},null,8,M)]),_:2},1024))),128))]),_:2},1024)]))),128))])])]),_:2},1032,["title"]))),128))]),_:1},8,["modelValue"]),j,t("button",{onClick:l[1]||(l[1]=(...a)=>g.goToNextPage&&g.goToNextPage(...a)),class:"buttonbottom"},"完成")])}const z=N(P,[["render",q],["__scopeId","data-v-e891b9d2"]]);export{z as default};
