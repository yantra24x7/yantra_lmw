function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Gsad:function(n,l,t){"use strict";t.r(l);var e,o=t("8Y7J"),i=function n(){_classCallCheck(this,n)},u=t("NcP4"),r=t("xYTU"),c=t("t68o"),a=t("zbXB"),b=t("fo5T"),s=t("XePT"),C=t("pMnS"),d=t("ITXy"),p=t("B0QU"),g=t("SVse"),_=function(){function n(l,t){_classCallCheck(this,n),this.service=l,this.nav=t,this.myLoader=!1,this.nav.hide()}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.myLoader=!0,this.service.oee().subscribe((function(l){console.log(l),n.myLoader=!1,n.oee=l,console.log(n.oee)}))}}]),n}(),f=t("IheW"),h=((e=function(){function n(l){_classCallCheck(this,n),this.http=l}return _createClass(n,[{key:"oee",value:function(){return this.http.get("oee_dashboard")}}]),n}()).ngInjectableDef=o.Sb({factory:function(){return new e(o.Tb(f.c))},token:e,providedIn:"root"}),e),m=t("cXjN"),O=o.qb({encapsulation:0,styles:[[".machine_Container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:justify;justify-content:space-between}.no-data[_ngcontent-%COMP%]{background-color:grey}.idle[_ngcontent-%COMP%]{background-color:#3e3e3e}.ille[_ngcontent-%COMP%]{outerStrokeColor:#3e3e3e}.running[_ngcontent-%COMP%], .stopped[_ngcontent-%COMP%]{background-color:#3e3e3e}.tv_screen[_ngcontent-%COMP%]{background-color:#202328;padding:10px;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]{padding:12px;display:inline-block;width:260px;background:#2c2f34;border-radius:12px;margin-right:0;margin-bottom:10px}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]   .circle_progress_wrapper[_ngcontent-%COMP%]{text-align:center}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:0;color:#fff}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]   .add_info[_ngcontent-%COMP%]{display:-webkit-box;display:flex;justify-content:space-around;color:#fff}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]   .add_info[_ngcontent-%COMP%]   .info_wrapper[_ngcontent-%COMP%]{text-align:center}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]   .add_info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.tv_screen[_ngcontent-%COMP%]   .machine_prod[_ngcontent-%COMP%]   .add_info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;margin:0}.tv_screen[_ngcontent-%COMP%]   .machine_prod.running[_ngcontent-%COMP%]{border:10px solid #1ead55}.tv_screen[_ngcontent-%COMP%]   .machine_prod.running[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1ead55}.tv_screen[_ngcontent-%COMP%]   .machine_prod.idle[_ngcontent-%COMP%]{border:10px solid #e8a24a}.tv_screen[_ngcontent-%COMP%]   .machine_prod.idle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e8a24a}.tv_screen[_ngcontent-%COMP%]   .machine_prod.stop[_ngcontent-%COMP%]{border:10px solid #ed5550}.tv_screen[_ngcontent-%COMP%]   .machine_prod.stop[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#ed5550}.tv_screen[_ngcontent-%COMP%]   .machine_prod.no-data[_ngcontent-%COMP%]{border:10px solid #6d6d6d}.tv_screen[_ngcontent-%COMP%]   .machine_prod.no-data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#6d6d6d}"]],data:{}});function P(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),o.sb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function k(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#21402D"],["outerStrokeColor","#1EAD55"],["radius","65"]],null,null,null,d.b,d.a)),o.rb(1,770048,null,0,p.a,[p.b,o.k,g.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,l){n(l,1,0,"65",o.wb(1,"",null==l.parent.context.$implicit?null:l.parent.context.$implicit.oee,""),"#1EAD55","#21402D","true","300")}),null)}function M(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#21402D"],["outerStrokeColor","#E8A24A"],["radius","65"]],null,null,null,d.b,d.a)),o.rb(1,770048,null,0,p.a,[p.b,o.k,g.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,l){n(l,1,0,"65",o.wb(1,"",null==l.parent.context.$implicit?null:l.parent.context.$implicit.oee,""),"#E8A24A","#21402D","true","300")}),null)}function x(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#21402D"],["outerStrokeColor","#6D6D6D"],["radius","65"]],null,null,null,d.b,d.a)),o.rb(1,770048,null,0,p.a,[p.b,o.k,g.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,l){n(l,1,0,"65",o.wb(1,"",null==l.parent.context.$implicit?null:l.parent.context.$implicit.oee,""),"#6D6D6D","#21402D","true","300")}),null)}function v(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,25,"div",[["class","machine_prod running"]],[[2,"idle",null],[2,"running",null],[2,"no-data",null]],null,null,null,null)),(n()(),o.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Mb(2,null,["",""])),(n()(),o.sb(3,0,null,null,6,"div",[["class","circle_progress_wrapper"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,k)),o.rb(5,16384,null,0,g.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,null,1,null,M)),o.rb(7,16384,null,0,g.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,null,1,null,x)),o.rb(9,16384,null,0,g.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.sb(10,0,null,null,15,"div",[["class","add_info"]],null,null,null,null,null)),(n()(),o.sb(11,0,null,null,4,"div",[["class","info_wrapper"]],null,null,null,null,null)),(n()(),o.sb(12,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),o.Mb(13,null,["","%"])),(n()(),o.sb(14,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),o.Mb(-1,null,["Quality"])),(n()(),o.sb(16,0,null,null,4,"div",[["class","info_wrapper"]],null,null,null,null,null)),(n()(),o.sb(17,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),o.Mb(18,null,["","%"])),(n()(),o.sb(19,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),o.Mb(-1,null,["Performance"])),(n()(),o.sb(21,0,null,null,4,"div",[["class","info_wrapper"]],null,null,null,null,null)),(n()(),o.sb(22,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),o.Mb(23,null,["","%"])),(n()(),o.sb(24,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),o.Mb(-1,null,["Availability"]))],(function(n,l){n(l,5,0,"OPERATE"===l.context.$implicit.status),n(l,7,0,"STOP"===l.context.$implicit.status),n(l,9,0,"DISCONNECT"===l.context.$implicit.status)}),(function(n,l){n(l,0,0,"STOP"===l.context.$implicit.status,"OPERATE"===l.context.$implicit.status,"DISCONNECT"===l.context.$implicit.status),n(l,2,0,null==l.context.$implicit?null:l.context.$implicit.machine),n(l,13,0,null==l.context.$implicit?null:l.context.$implicit.quality),n(l,18,0,l.context.$implicit.perfomance),n(l,23,0,l.context.$implicit.availability)}))}function w(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,5,"div",[["class","tv_screen"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,P)),o.rb(2,16384,null,0,g.l,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.sb(3,0,null,null,2,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,v)),o.rb(5,278528,null,0,g.k,[o.O,o.L,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,2,0,t.myLoader),n(l,5,0,t.oee)}),null)}var y=o.ob("app-chart",_,(function(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"app-chart",[],null,null,null,w,O)),o.rb(1,114688,null,0,_,[h,m.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),S=t("s7LF"),D=t("QQfA"),I=t("IP0z"),j=t("gavF"),E=t("POq0"),$=t("Xd0L"),A=t("/Co4"),L=t("JjoW"),T=t("cUpR"),F=t("/HVE"),z=t("qJ5m"),q=t("Mz6y"),N=t("5GAg"),W=t("DkaU"),B=t("s6ns"),J=t("821u"),Q=t("OIZN"),V=t("Wc//"),U=t("Fwaw"),Z=t("zMNK"),H=t("hOhj"),R=t("Gi4r"),X=t("oapL"),G=t("HsOI"),Y=t("ZwOa"),K=t("igqZ"),nn=t("02hT"),ln=t("Q+lL"),tn=t("pBi1"),en=t("lT8R"),on=t("BV1i"),un=t("elxJ"),rn=t("5Bek"),cn=t("c9fC"),an=t("FVPZ"),bn=t("qJ50"),sn=t("AaDx"),Cn=t("mkRZ"),dn=t("dFDH"),pn=t("rWV4"),gn=t("zQui"),_n=t("8rEH"),fn=t("r0V8"),hn=t("10VE"),mn=t("BzsH"),On=t("cw5Z"),Pn=t("EApP"),kn=t("1Q6g"),Mn=t("iInd"),xn=function n(){_classCallCheck(this,n)};t.d(l,"ChartModuleNgFactory",(function(){return vn}));var vn=o.pb(i,[],(function(n){return o.Bb([o.Cb(512,o.j,o.ab,[[8,[u.a,r.a,r.b,c.a,a.b,a.a,b.c,s.a,C.a,y]],[3,o.j],o.w]),o.Cb(4608,g.n,g.m,[o.t,[2,g.E]]),o.Cb(4608,S.A,S.A,[]),o.Cb(4608,S.g,S.g,[]),o.Cb(4608,D.c,D.c,[D.i,D.e,o.j,D.h,D.f,o.q,o.y,g.d,I.b,[2,g.h]]),o.Cb(5120,D.j,D.k,[D.c]),o.Cb(5120,j.c,j.j,[D.c]),o.Cb(4608,E.c,E.c,[]),o.Cb(4608,$.b,$.b,[]),o.Cb(5120,A.a,A.b,[D.c]),o.Cb(5120,L.a,L.b,[D.c]),o.Cb(4608,T.e,$.c,[[2,$.g],[2,$.l]]),o.Cb(4608,$.a,$.w,[[2,$.f],F.a]),o.Cb(5120,z.b,z.a,[[3,z.b]]),o.Cb(5120,q.b,q.c,[D.c]),o.Cb(135680,N.h,N.h,[o.y,F.a]),o.Cb(4608,W.e,W.e,[o.L]),o.Cb(5120,B.c,B.d,[D.c]),o.Cb(135680,B.e,B.e,[D.c,o.q,[2,g.h],[2,B.b],B.c,[3,B.e],D.e]),o.Cb(4608,J.i,J.i,[]),o.Cb(5120,J.a,J.b,[D.c]),o.Cb(5120,Q.c,Q.a,[[3,Q.c]]),o.Cb(4608,V.a,V.a,[]),o.Cb(1073742336,g.c,g.c,[]),o.Cb(1073742336,S.z,S.z,[]),o.Cb(1073742336,S.k,S.k,[]),o.Cb(1073742336,S.w,S.w,[]),o.Cb(1073742336,I.a,I.a,[]),o.Cb(1073742336,$.l,$.l,[[2,$.d],[2,T.f]]),o.Cb(1073742336,F.b,F.b,[]),o.Cb(1073742336,$.v,$.v,[]),o.Cb(1073742336,U.c,U.c,[]),o.Cb(1073742336,Z.g,Z.g,[]),o.Cb(1073742336,H.c,H.c,[]),o.Cb(1073742336,D.g,D.g,[]),o.Cb(1073742336,j.i,j.i,[]),o.Cb(1073742336,j.f,j.f,[]),o.Cb(1073742336,R.c,R.c,[]),o.Cb(1073742336,X.c,X.c,[]),o.Cb(1073742336,E.d,E.d,[]),o.Cb(1073742336,G.e,G.e,[]),o.Cb(1073742336,Y.c,Y.c,[]),o.Cb(1073742336,K.e,K.e,[]),o.Cb(1073742336,$.m,$.m,[]),o.Cb(1073742336,$.t,$.t,[]),o.Cb(1073742336,nn.a,nn.a,[]),o.Cb(1073742336,ln.c,ln.c,[]),o.Cb(1073742336,$.q,$.q,[]),o.Cb(1073742336,A.c,A.c,[]),o.Cb(1073742336,L.d,L.d,[]),o.Cb(1073742336,tn.b,tn.b,[]),o.Cb(1073742336,tn.a,tn.a,[]),o.Cb(1073742336,en.a,en.a,[]),o.Cb(1073742336,on.h,on.h,[]),o.Cb(1073742336,$.x,$.x,[]),o.Cb(1073742336,$.n,$.n,[]),o.Cb(1073742336,un.a,un.a,[]),o.Cb(1073742336,rn.c,rn.c,[]),o.Cb(1073742336,cn.a,cn.a,[]),o.Cb(1073742336,an.a,an.a,[]),o.Cb(1073742336,bn.e,bn.e,[]),o.Cb(1073742336,z.c,z.c,[]),o.Cb(1073742336,N.a,N.a,[]),o.Cb(1073742336,q.e,q.e,[]),o.Cb(1073742336,W.c,W.c,[]),o.Cb(1073742336,sn.a,sn.a,[]),o.Cb(1073742336,Cn.a,Cn.a,[]),o.Cb(1073742336,dn.d,dn.d,[]),o.Cb(1073742336,pn.j,pn.j,[]),o.Cb(1073742336,B.k,B.k,[]),o.Cb(1073742336,gn.p,gn.p,[]),o.Cb(1073742336,_n.m,_n.m,[]),o.Cb(1073742336,J.j,J.j,[]),o.Cb(1073742336,fn.b,fn.b,[]),o.Cb(1073742336,fn.a,fn.a,[]),o.Cb(1073742336,hn.i,hn.i,[]),o.Cb(1073742336,mn.b,mn.b,[]),o.Cb(1073742336,Q.d,Q.d,[]),o.Cb(1073742336,On.h,On.h,[]),o.Cb(1073742336,Pn.i,Pn.i,[]),o.Cb(1073742336,kn.a,kn.a,[]),o.Cb(1073742336,Mn.o,Mn.o,[[2,Mn.t],[2,Mn.k]]),o.Cb(1073742336,xn,xn,[]),o.Cb(1073742336,p.c,p.c,[]),o.Cb(1073742336,i,i,[]),o.Cb(256,$.e,$.i,[]),o.Cb(256,On.p,"en-US",[]),o.Cb(256,Pn.b,{default:Pn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),o.Cb(1024,Mn.i,(function(){return[[{path:"",component:_}]]}),[]),o.Cb(256,p.b,{backgroundColor:"#212226",backgroundOpacity:1,backgroundStroke:"#212226",backgroundStrokeWidth:18,backgroundPadding:0,radius:36,space:-17,subtitle:["OEE"],titleFontSize:"30",subtitleFontSize:"20",subtitleFontWeight:"800",titleFontWeight:"500",titleColor:"#ffffff",toFixed:0,maxPercent:100,outerStrokeWidth:17,innerStrokeWidth:17,showSubtitle:!0,showUnits:!1},[])])}))}}]);