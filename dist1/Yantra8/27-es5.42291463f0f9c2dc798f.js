function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"FdB/":function(n,e,t){"use strict";t.r(e);var l,a=t("8Y7J"),o=function(){function n(e,t){_classCallCheck(this,n),this.service=e,this.route=t,this.myLoader=!1}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.myLoader=!0,this.service.get_reason().subscribe((function(e){console.log(e),n.myLoader=!1,n.reflect=e}))}},{key:"routes",value:function(n,e){var t=this;console.log(localStorage.getItem("machine_name")),console.log(localStorage.getItem("machine_id"));var l=localStorage.getItem("machine_name"),a=localStorage.getItem("machine_id");console.log(n,e);var o={reason:n,reason_id:e,machine_name:l,machine_id:a};console.log(o),this.myLoader=!0,this.service.redirect(o).subscribe((function(n){console.log(n),t.myLoader=!1,console.log(n.machine),localStorage.setItem("machine",n.machine),localStorage.setItem("reason",n.reason),t.route.navigateByUrl("/oee_dashboard")}))}}]),n}(),i=function n(){_classCallCheck(this,n)},c=t("pMnS"),r=t("NcP4"),b=t("xYTU"),_=t("t68o"),g=t("zbXB"),u=t("fo5T"),p=t("XePT"),s=t("bujt"),d=t("Fwaw"),C=t("5GAg"),m=t("omvX"),f=t("SVse"),h=t("iInd"),P=t("Mr+X"),O=t("Gi4r"),M=t("IheW"),x=((l=function(){function n(e){_classCallCheck(this,n),this.http=e}return _createClass(n,[{key:"get_reason",value:function(){return this.http.get("tab_list_of_idel")}},{key:"redirect",value:function(n){return this.http.post("tab_reson_for_idle",n)}}]),n}()).ngInjectableDef=a.Sb({factory:function(){return new l(a.Tb(M.c))},token:l,providedIn:"root"}),l),w=a.qb({encapsulation:0,styles:[[".page[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]{padding:0}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{background:#2c2f34;padding:12px 20px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;margin:0;color:#fff}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;margin:0;padding:0 15px;color:#a8a8a8}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child, .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{border-right:1px solid #707070}.machine_detail_Page[_ngcontent-%COMP%]{padding:20px}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]   button.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,left bottom,from(#f69320),to(#7b4a10));background-image:linear-gradient(#f69320,#7b4a10);color:#fff!important}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]     .mat-select-value{color:#f69320}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]     .mat-select-arrow{color:#f69320}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;margin-bottom:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   button.back.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{min-width:64px;padding:0;height:64px;border-radius:8px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-left:14px;margin-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;color:#a8a8a8}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{-webkit-transform:translateY(-20%)!important;transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline::before{display:none}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent;padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:26px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-left:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#2c2f34;border:1px solid #707070;padding:0 20px;border-radius:7px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{-webkit-transform:translateY(-20%)!important;transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:22px}.machine_prod[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:left;justify-content:left;-webkit-box-align:center;align-items:center;border-radius:12px;margin-bottom:10px}.machine_prod[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:24%;padding:30px 14px;font-size:20px;margin-bottom:7px;margin-right:7px}.machine_prod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:0;color:#fff}.machine_prod[_ngcontent-%COMP%]   .label_info[_ngcontent-%COMP%]{float:left;width:60%}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;margin-bottom:20px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}  .mat-form-field-underline{display:none}footer[_ngcontent-%COMP%]{background:#2c2f34;padding:9px 30px 9px 9px;position:fixed;width:100%;bottom:0;text-align:right;left:0}.footer_action[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.footer_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:49%;padding:30px;font-size:26px}"]],data:{}});function k(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),a.sb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function y(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.routes(null==n.context.$implicit?null:n.context.$implicit.reason,null==n.context.$implicit?null:null==n.context.$implicit.id?null:n.context.$implicit.id.$oid)&&l),l}),s.b,s.a)),a.rb(1,180224,null,0,d.b,[a.k,C.h,[2,m.a]],{color:[0,"color"]},null),(n()(),a.Mb(2,0,["",""]))],(function(n,e){n(e,1,0,"primary")}),(function(n,e){n(e,0,0,a.Eb(e,1).disabled||null,"NoopAnimations"===a.Eb(e,1)._animationMode),n(e,2,0,null==e.context.$implicit?null:e.context.$implicit.reason)}))}function v(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,23,"div",[["class","page"]],null,null,null,null,null)),(n()(),a.hb(16777216,null,null,1,null,k)),a.rb(2,16384,null,0,f.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.sb(3,0,null,null,2,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),a.sb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a.Mb(-1,null,["Reason list"])),(n()(),a.sb(6,0,null,null,8,"div",[["class","rhs_wrapper"]],null,null,null,null,null)),(n()(),a.sb(7,0,null,null,7,"button",[["class","back"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==a.Eb(n,8).onClick()&&l),l}),s.b,s.a)),a.rb(8,16384,null,0,h.l,[h.k,h.a,[8,null],a.D,a.k],{routerLink:[0,"routerLink"]},null),a.Fb(9,1),a.rb(10,180224,null,0,d.b,[a.k,C.h,[2,m.a]],{color:[0,"color"]},null),(n()(),a.sb(11,0,null,0,3,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.sb(12,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,P.b,P.a)),a.rb(13,9158656,null,0,O.b,[a.k,O.d,[8,null],[2,O.a],[2,a.l]],null,null),(n()(),a.Mb(-1,0,["keyboard_arrow_left"])),(n()(),a.sb(15,0,null,null,8,"div",[["class","machine_detail_Page"]],null,null,null,null,null)),(n()(),a.sb(16,0,null,null,5,"div",[["class","running"]],null,null,null,null,null)),(n()(),a.sb(17,0,null,null,0,"div",[["class","header_machine"]],null,null,null,null,null)),(n()(),a.sb(18,0,null,null,3,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),a.sb(19,0,null,null,2,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),a.hb(16777216,null,null,1,null,y)),a.rb(21,278528,null,0,f.k,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.sb(22,0,null,null,1,"footer",[],null,null,null,null,null)),(n()(),a.sb(23,0,null,null,0,"img",[["src","../../../assets/images/yantra1.png"]],null,null,null,null,null))],(function(n,e){var t=e.component;n(e,2,0,t.myLoader);var l=n(e,9,0,"/machine_lmw");n(e,8,0,l),n(e,10,0,"primary"),n(e,13,0),n(e,21,0,t.reflect)}),(function(n,e){n(e,7,0,a.Eb(e,10).disabled||null,"NoopAnimations"===a.Eb(e,10)._animationMode),n(e,12,0,a.Eb(e,13).inline,"primary"!==a.Eb(e,13).color&&"accent"!==a.Eb(e,13).color&&"warn"!==a.Eb(e,13).color)}))}var j=a.ob("app-reflect",o,(function(n){return a.Ob(0,[(n()(),a.sb(0,0,null,null,1,"app-reflect",[],null,null,null,v,w)),a.rb(1,114688,null,0,o,[x,h.k],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),z=t("s7LF"),I=t("QQfA"),E=t("IP0z"),L=t("gavF"),F=t("POq0"),S=t("Xd0L"),q=t("/Co4"),A=t("JjoW"),B=t("cUpR"),$=t("/HVE"),J=t("qJ5m"),T=t("Mz6y"),V=t("DkaU"),D=t("s6ns"),N=t("821u"),Y=t("OIZN"),Z=t("Wc//"),H=t("zMNK"),Q=t("hOhj"),R=t("oapL"),U=t("HsOI"),X=t("ZwOa"),W=t("igqZ"),G=t("02hT"),K=t("Q+lL"),nn=t("pBi1"),en=t("lT8R"),tn=t("BV1i"),ln=t("elxJ"),an=t("5Bek"),on=t("c9fC"),cn=t("FVPZ"),rn=t("qJ50"),bn=t("AaDx"),_n=t("mkRZ"),gn=t("dFDH"),un=t("rWV4"),pn=t("zQui"),sn=t("8rEH"),dn=t("r0V8"),Cn=t("10VE"),mn=t("BzsH"),fn=t("cw5Z"),hn=t("EApP"),Pn=t("1Q6g");t.d(e,"ReflectModuleNgFactory",(function(){return On}));var On=a.pb(i,[],(function(n){return a.Bb([a.Cb(512,a.j,a.ab,[[8,[c.a,r.a,b.a,b.b,_.a,g.b,g.a,u.c,p.a,j]],[3,a.j],a.w]),a.Cb(4608,f.n,f.m,[a.t,[2,f.E]]),a.Cb(4608,z.A,z.A,[]),a.Cb(4608,z.g,z.g,[]),a.Cb(4608,I.c,I.c,[I.i,I.e,a.j,I.h,I.f,a.q,a.y,f.d,E.b,[2,f.h]]),a.Cb(5120,I.j,I.k,[I.c]),a.Cb(5120,L.c,L.j,[I.c]),a.Cb(4608,F.c,F.c,[]),a.Cb(4608,S.b,S.b,[]),a.Cb(5120,q.a,q.b,[I.c]),a.Cb(5120,A.a,A.b,[I.c]),a.Cb(4608,B.e,S.c,[[2,S.g],[2,S.l]]),a.Cb(4608,S.a,S.w,[[2,S.f],$.a]),a.Cb(5120,J.b,J.a,[[3,J.b]]),a.Cb(5120,T.b,T.c,[I.c]),a.Cb(135680,C.h,C.h,[a.y,$.a]),a.Cb(4608,V.e,V.e,[a.L]),a.Cb(5120,D.c,D.d,[I.c]),a.Cb(135680,D.e,D.e,[I.c,a.q,[2,f.h],[2,D.b],D.c,[3,D.e],I.e]),a.Cb(4608,N.i,N.i,[]),a.Cb(5120,N.a,N.b,[I.c]),a.Cb(5120,Y.c,Y.a,[[3,Y.c]]),a.Cb(4608,Z.a,Z.a,[]),a.Cb(1073742336,h.o,h.o,[[2,h.t],[2,h.k]]),a.Cb(1073742336,f.c,f.c,[]),a.Cb(1073742336,z.z,z.z,[]),a.Cb(1073742336,z.k,z.k,[]),a.Cb(1073742336,z.w,z.w,[]),a.Cb(1073742336,E.a,E.a,[]),a.Cb(1073742336,S.l,S.l,[[2,S.d],[2,B.f]]),a.Cb(1073742336,$.b,$.b,[]),a.Cb(1073742336,S.v,S.v,[]),a.Cb(1073742336,d.c,d.c,[]),a.Cb(1073742336,H.g,H.g,[]),a.Cb(1073742336,Q.c,Q.c,[]),a.Cb(1073742336,I.g,I.g,[]),a.Cb(1073742336,L.i,L.i,[]),a.Cb(1073742336,L.f,L.f,[]),a.Cb(1073742336,O.c,O.c,[]),a.Cb(1073742336,R.c,R.c,[]),a.Cb(1073742336,F.d,F.d,[]),a.Cb(1073742336,U.e,U.e,[]),a.Cb(1073742336,X.c,X.c,[]),a.Cb(1073742336,W.e,W.e,[]),a.Cb(1073742336,S.m,S.m,[]),a.Cb(1073742336,S.t,S.t,[]),a.Cb(1073742336,G.a,G.a,[]),a.Cb(1073742336,K.c,K.c,[]),a.Cb(1073742336,S.q,S.q,[]),a.Cb(1073742336,q.c,q.c,[]),a.Cb(1073742336,A.d,A.d,[]),a.Cb(1073742336,nn.b,nn.b,[]),a.Cb(1073742336,nn.a,nn.a,[]),a.Cb(1073742336,en.a,en.a,[]),a.Cb(1073742336,tn.h,tn.h,[]),a.Cb(1073742336,S.x,S.x,[]),a.Cb(1073742336,S.n,S.n,[]),a.Cb(1073742336,ln.a,ln.a,[]),a.Cb(1073742336,an.c,an.c,[]),a.Cb(1073742336,on.a,on.a,[]),a.Cb(1073742336,cn.a,cn.a,[]),a.Cb(1073742336,rn.e,rn.e,[]),a.Cb(1073742336,J.c,J.c,[]),a.Cb(1073742336,C.a,C.a,[]),a.Cb(1073742336,T.e,T.e,[]),a.Cb(1073742336,V.c,V.c,[]),a.Cb(1073742336,bn.a,bn.a,[]),a.Cb(1073742336,_n.a,_n.a,[]),a.Cb(1073742336,gn.d,gn.d,[]),a.Cb(1073742336,un.j,un.j,[]),a.Cb(1073742336,D.k,D.k,[]),a.Cb(1073742336,pn.p,pn.p,[]),a.Cb(1073742336,sn.m,sn.m,[]),a.Cb(1073742336,N.j,N.j,[]),a.Cb(1073742336,dn.b,dn.b,[]),a.Cb(1073742336,dn.a,dn.a,[]),a.Cb(1073742336,Cn.i,Cn.i,[]),a.Cb(1073742336,mn.b,mn.b,[]),a.Cb(1073742336,Y.d,Y.d,[]),a.Cb(1073742336,fn.h,fn.h,[]),a.Cb(1073742336,hn.i,hn.i,[]),a.Cb(1073742336,Pn.a,Pn.a,[]),a.Cb(1073742336,i,i,[]),a.Cb(256,S.e,S.i,[]),a.Cb(256,fn.p,"en-US",[]),a.Cb(256,hn.b,{default:hn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),a.Cb(1024,h.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);