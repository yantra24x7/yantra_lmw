function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0ATE":function(n,l,t){"use strict";t.r(l);var e,c=t("8Y7J"),a=t("PSD3"),o=t.n(a),u=t("DnKK"),i=function(){function n(l,t,e){_classCallCheck(this,n),this.fb=l,this.nav=t,this.machine=e,this.myLoader=!1,this.nav.show()}return _createClass(n,[{key:"ngOnInit",value:function(){this.getMachines()}},{key:"getMachines",value:function(){var n=this;this.myLoader=!0,this.machine.machine_get().pipe(Object(u.a)(this)).subscribe((function(l){console.log(l),n.myLoader=!1,n.machine_list=l}))}},{key:"delete",value:function(){o.a.fire("Are you sure want to delete?")}},{key:"ngOnDestroy",value:function(){}}]),n}(),s=function n(){_classCallCheck(this,n)},b=t("pMnS"),r=t("NcP4"),C=t("xYTU"),g=t("t68o"),p=t("zbXB"),d=t("fo5T"),_=t("XePT"),m=t("lzlj"),f=t("igqZ"),M=t("omvX"),O=t("Mr+X"),h=t("Gi4r"),P=t("SVse"),x=t("s7LF"),w=t("cXjN"),v=t("IheW"),k=((e=function(){function n(l){_classCallCheck(this,n),this.http=l}return _createClass(n,[{key:"machine_get",value:function(){return this.http.get("machines")}}]),n}()).ngInjectableDef=c.Sb({factory:function(){return new e(c.Tb(v.c))},token:e,providedIn:"root"}),e),y=c.qb({encapsulation:0,styles:[[".cards_collections[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;margin-top:24px}.cards_collections[_ngcontent-%COMP%]   .px-16[_ngcontent-%COMP%]{padding:0 25px;width:calc(100% /4)}.cards_collections[_ngcontent-%COMP%]   .px-16.pl-0[_ngcontent-%COMP%]{padding-left:0;margin-bottom:40px}.cards_collections[_ngcontent-%COMP%]   .px-16.pr-0[_ngcontent-%COMP%]{padding-right:0}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]{position:relative}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:30px;font-weight:400;color:#a8a8a8;font-size:1.3rem;text-align:center;margin-bottom:0}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#898888!important;margin-bottom:18px;text-align:center;margin-top:8px}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .action_menus[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .action_menus[_ngcontent-%COMP%]   .menu_open[_ngcontent-%COMP%]{cursor:pointer}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;cursor:pointer}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{padding-right:5px;color:#9e9e9e}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{width:40px;height:40px;margin:0 auto;background:#f7941e;border-radius:50%;color:#fff;text-align:center;line-height:40px;position:absolute;top:0;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .full_date[_ngcontent-%COMP%]{text-align:center}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .full_date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#c7c7c7;margin:5px 0;font-size:16px}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .full_date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase;font-size:16px;color:#8c8a8a}.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .switch_holder[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{line-height:25px;color:#c7c7c7;font-size:11px}.filter_sec[_ngcontent-%COMP%]   .setting_sec[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}@media (max-width:768){.cards_collections[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px;font-size:1.1rem;line-height:20px}}"]],data:{}});function j(n){return c.Ob(0,[(n()(),c.sb(0,0,null,null,20,"div",[["class","px-16 pl-0"]],null,null,null,null,null)),(n()(),c.sb(1,0,null,null,19,"mat-card",[["class","example-card mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,m.b,m.a)),c.rb(2,49152,null,0,f.a,[[2,M.a]],null,null),(n()(),c.sb(3,0,null,0,17,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),c.rb(4,16384,null,0,f.b,[],null,null),(n()(),c.sb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),c.Mb(6,null,["",""])),(n()(),c.sb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),c.Mb(-1,null,["LMW"])),(n()(),c.sb(9,0,null,null,11,"div",[["class","content"]],null,null,null,null,null)),(n()(),c.sb(10,0,null,null,1,"div",[["class","count"]],null,null,null,null,null)),(n()(),c.Mb(11,null,["",""])),(n()(),c.sb(12,0,null,null,8,"div",[["class","full_date"]],null,null,null,null,null)),(n()(),c.sb(13,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),c.Mb(-1,null,[" Controller : "])),(n()(),c.sb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),c.Mb(-1,null,["Fanuc"])),(n()(),c.sb(17,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),c.Mb(-1,null,[" IP : "])),(n()(),c.sb(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),c.Mb(20,null,[" ",""]))],null,(function(n,l){n(l,1,0,"NoopAnimations"===c.Eb(l,2)._animationMode),n(l,6,0,null==l.context.$implicit?null:l.context.$implicit.L0Name),n(l,11,0,l.context.index+1),n(l,20,0,l.context.$implicit.NetworkSetting.IpAddress)}))}function z(n){return c.Ob(0,[(n()(),c.sb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),c.sb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function L(n){return c.Ob(0,[(n()(),c.sb(0,0,null,null,14,"section",[["class","page"]],null,null,null,null,null)),(n()(),c.sb(1,0,null,null,11,"div",[["class","section_top_padding"]],null,null,null,null,null)),(n()(),c.sb(2,0,null,null,10,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),c.sb(3,0,null,null,6,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),c.sb(4,0,null,null,5,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),c.sb(5,0,null,null,2,"mat-icon",[["class","v-align-middle display mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,O.b,O.a)),c.rb(6,9158656,null,0,h.b,[c.k,h.d,[8,null],[2,h.a],[2,c.l]],null,null),(n()(),c.Mb(-1,0,["laptop"])),(n()(),c.sb(8,0,null,null,1,"span",[["class","v-align-middle"]],null,null,null,null,null)),(n()(),c.Mb(-1,null,[" Machine List"])),(n()(),c.sb(10,0,null,null,2,"div",[["class","cards_collections"]],null,null,null,null,null)),(n()(),c.hb(16777216,null,null,1,null,j)),c.rb(12,278528,null,0,P.k,[c.O,c.L,c.r],{ngForOf:[0,"ngForOf"]},null),(n()(),c.hb(16777216,null,null,1,null,z)),c.rb(14,16384,null,0,P.l,[c.O,c.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,6,0),n(l,12,0,t.machine_list),n(l,14,0,t.myLoader)}),(function(n,l){n(l,5,0,c.Eb(l,6).inline,"primary"!==c.Eb(l,6).color&&"accent"!==c.Eb(l,6).color&&"warn"!==c.Eb(l,6).color)}))}var E=c.ob("app-machine-registration",i,(function(n){return c.Ob(0,[(n()(),c.sb(0,0,null,null,1,"app-machine-registration",[],null,null,null,L,y)),c.rb(1,245760,null,0,i,[x.g,w.a,k],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),I=t("QQfA"),A=t("IP0z"),q=t("gavF"),F=t("POq0"),D=t("Xd0L"),N=t("/Co4"),T=t("JjoW"),J=t("cUpR"),V=t("/HVE"),B=t("qJ5m"),S=t("Mz6y"),X=t("5GAg"),Z=t("DkaU"),H=t("s6ns"),Q=t("821u"),W=t("OIZN"),R=t("Wc//"),U=t("iInd"),K=t("Fwaw"),$=t("zMNK"),G=t("hOhj"),Y=t("oapL"),nn=t("HsOI"),ln=t("ZwOa"),tn=t("02hT"),en=t("Q+lL"),cn=t("pBi1"),an=t("lT8R"),on=t("BV1i"),un=t("elxJ"),sn=t("5Bek"),bn=t("c9fC"),rn=t("FVPZ"),Cn=t("qJ50"),gn=t("AaDx"),pn=t("mkRZ"),dn=t("dFDH"),_n=t("rWV4"),mn=t("zQui"),fn=t("8rEH"),Mn=t("r0V8"),On=t("10VE"),hn=t("BzsH"),Pn=t("cw5Z"),xn=t("EApP"),wn=t("1Q6g");t.d(l,"MachineRegistrationModuleNgFactory",(function(){return vn}));var vn=c.pb(s,[],(function(n){return c.Bb([c.Cb(512,c.j,c.ab,[[8,[b.a,r.a,C.a,C.b,g.a,p.b,p.a,d.c,_.a,E]],[3,c.j],c.w]),c.Cb(4608,P.n,P.m,[c.t,[2,P.E]]),c.Cb(4608,x.A,x.A,[]),c.Cb(4608,x.g,x.g,[]),c.Cb(4608,I.c,I.c,[I.i,I.e,c.j,I.h,I.f,c.q,c.y,P.d,A.b,[2,P.h]]),c.Cb(5120,I.j,I.k,[I.c]),c.Cb(5120,q.c,q.j,[I.c]),c.Cb(4608,F.c,F.c,[]),c.Cb(4608,D.b,D.b,[]),c.Cb(5120,N.a,N.b,[I.c]),c.Cb(5120,T.a,T.b,[I.c]),c.Cb(4608,J.e,D.c,[[2,D.g],[2,D.l]]),c.Cb(4608,D.a,D.w,[[2,D.f],V.a]),c.Cb(5120,B.b,B.a,[[3,B.b]]),c.Cb(5120,S.b,S.c,[I.c]),c.Cb(135680,X.h,X.h,[c.y,V.a]),c.Cb(4608,Z.e,Z.e,[c.L]),c.Cb(5120,H.c,H.d,[I.c]),c.Cb(135680,H.e,H.e,[I.c,c.q,[2,P.h],[2,H.b],H.c,[3,H.e],I.e]),c.Cb(4608,Q.i,Q.i,[]),c.Cb(5120,Q.a,Q.b,[I.c]),c.Cb(5120,W.c,W.a,[[3,W.c]]),c.Cb(4608,R.a,R.a,[]),c.Cb(1073742336,U.o,U.o,[[2,U.t],[2,U.k]]),c.Cb(1073742336,P.c,P.c,[]),c.Cb(1073742336,x.z,x.z,[]),c.Cb(1073742336,x.k,x.k,[]),c.Cb(1073742336,x.w,x.w,[]),c.Cb(1073742336,A.a,A.a,[]),c.Cb(1073742336,D.l,D.l,[[2,D.d],[2,J.f]]),c.Cb(1073742336,V.b,V.b,[]),c.Cb(1073742336,D.v,D.v,[]),c.Cb(1073742336,K.c,K.c,[]),c.Cb(1073742336,$.g,$.g,[]),c.Cb(1073742336,G.c,G.c,[]),c.Cb(1073742336,I.g,I.g,[]),c.Cb(1073742336,q.i,q.i,[]),c.Cb(1073742336,q.f,q.f,[]),c.Cb(1073742336,h.c,h.c,[]),c.Cb(1073742336,Y.c,Y.c,[]),c.Cb(1073742336,F.d,F.d,[]),c.Cb(1073742336,nn.e,nn.e,[]),c.Cb(1073742336,ln.c,ln.c,[]),c.Cb(1073742336,f.e,f.e,[]),c.Cb(1073742336,D.m,D.m,[]),c.Cb(1073742336,D.t,D.t,[]),c.Cb(1073742336,tn.a,tn.a,[]),c.Cb(1073742336,en.c,en.c,[]),c.Cb(1073742336,D.q,D.q,[]),c.Cb(1073742336,N.c,N.c,[]),c.Cb(1073742336,T.d,T.d,[]),c.Cb(1073742336,cn.b,cn.b,[]),c.Cb(1073742336,cn.a,cn.a,[]),c.Cb(1073742336,an.a,an.a,[]),c.Cb(1073742336,on.h,on.h,[]),c.Cb(1073742336,D.x,D.x,[]),c.Cb(1073742336,D.n,D.n,[]),c.Cb(1073742336,un.a,un.a,[]),c.Cb(1073742336,sn.c,sn.c,[]),c.Cb(1073742336,bn.a,bn.a,[]),c.Cb(1073742336,rn.a,rn.a,[]),c.Cb(1073742336,Cn.e,Cn.e,[]),c.Cb(1073742336,B.c,B.c,[]),c.Cb(1073742336,X.a,X.a,[]),c.Cb(1073742336,S.e,S.e,[]),c.Cb(1073742336,Z.c,Z.c,[]),c.Cb(1073742336,gn.a,gn.a,[]),c.Cb(1073742336,pn.a,pn.a,[]),c.Cb(1073742336,dn.d,dn.d,[]),c.Cb(1073742336,_n.j,_n.j,[]),c.Cb(1073742336,H.k,H.k,[]),c.Cb(1073742336,mn.p,mn.p,[]),c.Cb(1073742336,fn.m,fn.m,[]),c.Cb(1073742336,Q.j,Q.j,[]),c.Cb(1073742336,Mn.b,Mn.b,[]),c.Cb(1073742336,Mn.a,Mn.a,[]),c.Cb(1073742336,On.i,On.i,[]),c.Cb(1073742336,hn.b,hn.b,[]),c.Cb(1073742336,W.d,W.d,[]),c.Cb(1073742336,Pn.h,Pn.h,[]),c.Cb(1073742336,xn.i,xn.i,[]),c.Cb(1073742336,wn.a,wn.a,[]),c.Cb(1073742336,s,s,[]),c.Cb(256,D.e,D.i,[]),c.Cb(256,Pn.p,"en-US",[]),c.Cb(256,xn.b,{default:xn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),c.Cb(1024,U.i,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);