(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W3FM:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("SVse"),a=e("PSD3"),i=e.n(a);class r{constructor(l,n,e,t,u){this.nav=l,this.datePipe=n,this.service=e,this.fb=t,this.exportService=u,this.today=new Date((new Date).toDateString()),this.weekStart=new Date(new Date((new Date).setDate((new Date).getDate()-((new Date).getDay()+7)%7)).toDateString()),this.weekEnd=new Date(new Date((new Date).setDate(new Date((new Date).setDate((new Date).getDate()-((new Date).getDay()+7)%7)).getDate()+6)).toDateString()),this.monthStart=new Date(new Date((new Date).setDate(1)).toDateString()),this.monthEnd=this.today,this.lastStart=new Date(new Date(new Date((new Date).setMonth((new Date).getMonth()-1)).setDate(1)).toDateString()),this.lastEnd=this.today,this.yearStart=new Date(new Date((new Date).setDate((new Date).getDate()-365)).toDateString()),this.yearEnd=this.today,this.currentYear=this.today.getFullYear(),this.currentMonth=this.today.getMonth(),this.maxDate=new Date,this.minDate=new Date((new Date).setMonth((new Date).getMonth()-1)),this.myLoader=!1,this.export_excel=[],this.nav.show()}ngOnInit(){this.login=this.fb.group({machine_name:[""],shift_num:[""],date:[""]}),this.service.getmachines().subscribe(l=>{this.machine_response=l,this.login.patchValue({machine_name:this.machine_response[0]}),this.service.getshift().subscribe(l=>{this.shift_response=l,this.login.patchValue({shift_num:this.shift_response[0].shift_no}),this.service.first_page_loading().subscribe(l=>{this.first_loading=l,this.login.patchValue({date:[this.first_loading.from_date,this.first_loading.to_date]}),this.logintest("true")})})})}export(){this.service.overall_report({machine_name:this.login.value.machine_name,shift_num:this.login.value.shift_num,date:this.new_date+"-"+this.new_date1}).subscribe(l=>{if(this.myLoader=!1,this.get_report=l,0==this.get_report.length)i.a.fire("Exporting!, No Data Found");else{for(var n=0;n<this.get_report.length;n++)this.export_excel.push({"S.No":n+1,Date:this.get_report[n].date||"---",Shift:this.get_report[n].shift_num||"---","Machine Name":this.get_report[n].machine_name||"---","Program Number":this.get_report[n].program_number||"---","Result Accumulative":this.get_report[n].productresult_accumulate||"---","Product Name":this.get_report[n].productname||"---","Product Result":this.get_report[n].productresult||"---","Accept Count":this.get_report[n].accept_count||"---","Reject Count":this.get_report[n].reject_count||"---","Start Time":this.get_report[n].part_start_time||"---","End Time":this.get_report[n].part_start_time||"---"});this.exportService.exportAsExcelFile(this.export_excel,"Report Details")}})}logintest(l){this.status=l,this.myLoader=!0,console.log(this.minDate),console.log(this.login.value),"true"==this.status&&(this.new_date=new u.e("en-US").transform(this.login.value.date[0],"MM/dd/yyyy"),this.new_date1=new u.e("en-US").transform(this.login.value.date[1],"MM/dd/yyyy"),this.service.overall_report({machine_name:this.login.value.machine_name,shift_num:this.login.value.shift_num,date:this.new_date+"-"+this.new_date1}).subscribe(l=>{this.myLoader=!1,this.get_report=l}))}}class b{}var o=e("pMnS"),s=e("NcP4"),d=e("xYTU"),c=e("t68o"),h=e("zbXB"),m=e("fo5T"),p=e("XePT"),g=e("MlvX"),_=e("Xd0L"),f=e("s7LF"),E=e("dJrM"),C=e("HsOI"),v=e("IP0z"),w=e("/HVE"),y=e("omvX"),D=e("Azqq"),x=e("JjoW"),S=e("hOhj"),M=e("5GAg"),k=e("U0Oa"),F=e("10VE"),q=e("bujt"),K=e("Fwaw"),O=e("lzlj"),I=e("igqZ"),A=e("cXjN"),L=e("IheW");let P=(()=>{class l{constructor(l){this.http=l}getmachines(){return this.http.get("machine_list")}getshift(){return this.http.get("shifts")}overall_report(l){return this.http.get("production_part_report?machine_name="+l.machine_name+"&&shift_num="+l.shift_num+"&&from_date="+l.date)}first_page_loading(){return this.http.get("previous_shift")}}return l.ngInjectableDef=t.Sb({factory:function(){return new l(t.Tb(L.c))},token:l,providedIn:"root"}),l})();var j=e("Wc//"),N=t.qb({encapsulation:0,styles:[[".table_wrapper[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:scroll;margin-top:20px}"]],data:{}});function T(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Eb(l,1)._selectViaInteraction()&&u),"keydown"===n&&(u=!1!==t.Eb(l,1)._handleKeydown(e)&&u),u}),g.c,g.a)),t.rb(1,8568832,[[10,4]],0,_.p,[t.k,t.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),t.Mb(2,0,[" "," "]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,0,0,t.Eb(n,1)._getTabIndex(),t.Eb(n,1).selected,t.Eb(n,1).multiple,t.Eb(n,1).active,t.Eb(n,1).id,t.Eb(n,1)._getAriaSelected(),t.Eb(n,1).disabled.toString(),t.Eb(n,1).disabled),l(n,2,0,n.context.$implicit)}))}function $(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Eb(l,1)._selectViaInteraction()&&u),"keydown"===n&&(u=!1!==t.Eb(l,1)._handleKeydown(e)&&u),u}),g.c,g.a)),t.rb(1,8568832,[[22,4]],0,_.p,[t.k,t.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),t.Mb(2,0,[" "," "]))],(function(l,n){l(n,1,0,n.context.$implicit.shift_no)}),(function(l,n){l(n,0,0,t.Eb(n,1)._getTabIndex(),t.Eb(n,1).selected,t.Eb(n,1).multiple,t.Eb(n,1).active,t.Eb(n,1).id,t.Eb(n,1)._getAriaSelected(),t.Eb(n,1).disabled.toString(),t.Eb(n,1).disabled),l(n,2,0,n.context.$implicit.shift_no)}))}function J(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,27,"tbody",[],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,26,"tr",[],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(3,null,["",""])),(l()(),t.sb(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(5,null,["",""])),(l()(),t.sb(6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(7,null,["",""])),(l()(),t.sb(8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(9,null,["",""])),(l()(),t.sb(10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(11,null,["",""])),(l()(),t.sb(12,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(13,null,["",""])),(l()(),t.sb(14,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(15,null,["",""])),(l()(),t.sb(16,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(17,null,["",""])),(l()(),t.sb(18,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["---"])),(l()(),t.sb(20,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["---"])),(l()(),t.sb(22,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Mb(23,null,["",""])),t.Ib(24,2),(l()(),t.sb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Mb(26,null,["",""])),t.Ib(27,2)],null,(function(l,n){l(n,3,0,n.context.index+1),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.date),l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.shift_num),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.machine_name),l(n,11,0,(null==n.context.$implicit?null:n.context.$implicit.program_number)||"---"),l(n,13,0,(null==n.context.$implicit?null:n.context.$implicit.productresult_accumulate)||"---"),l(n,15,0,null==n.context.$implicit?null:n.context.$implicit.productname),l(n,17,0,null==n.context.$implicit?null:n.context.$implicit.productresult);var e=t.Nb(n,23,0,l(n,24,0,t.Eb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.part_start_time,"yyyy-MM-dd ; HH:mm:ss"));l(n,23,0,e);var u=t.Nb(n,26,0,l(n,27,0,t.Eb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.part_end_time,"yyyy-MM-dd ; HH:mm:ss"));l(n,26,0,u)}))}function V(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function R(l){return t.Ob(0,[t.Gb(0,u.e,[t.t]),(l()(),t.sb(1,0,null,null,132,"section",[["class","page"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,129,"div",[["class","container_fluid pt-3"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,0,"div",[["class","page_title_sec"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,92,"div",[["class","filter_sec mt-10"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,87,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0,a=l.component;return"submit"===n&&(u=!1!==t.Eb(l,7).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Eb(l,7).onReset()&&u),"ngSubmit"===n&&(u=!1!==a.logintest("true")&&u),u}),null,null)),t.rb(6,16384,null,0,f.C,[],null,null),t.rb(7,540672,null,0,f.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Jb(2048,null,f.d,null,[f.i]),t.rb(9,16384,null,0,f.r,[[4,f.d]],null,null),(l()(),t.sb(10,0,null,null,82,"div",[["class","filter_fields"]],null,null,null,null,null)),(l()(),t.sb(11,0,null,null,28,"div",[["class","filter_field"]],null,null,null,null,null)),(l()(),t.sb(12,0,null,null,27,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,E.b,E.a)),t.rb(13,7520256,null,9,C.c,[t.k,t.h,[2,_.h],[2,v.b],[2,C.a],w.a,t.y,[2,y.a]],{appearance:[0,"appearance"]},null),t.Kb(603979776,1,{_controlNonStatic:0}),t.Kb(335544320,2,{_controlStatic:0}),t.Kb(603979776,3,{_labelChildNonStatic:0}),t.Kb(335544320,4,{_labelChildStatic:0}),t.Kb(603979776,5,{_placeholderChild:0}),t.Kb(603979776,6,{_errorChildren:1}),t.Kb(603979776,7,{_hintChildren:1}),t.Kb(603979776,8,{_prefixChildren:1}),t.Kb(603979776,9,{_suffixChildren:1}),(l()(),t.sb(23,0,null,1,16,"mat-select",[["class","mat-select"],["formControlName","machine_name"],["matNativeControl",""],["placeholder","Select Machine"],["required",""],["role","listbox"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,e){var u=!0;return"keydown"===n&&(u=!1!==t.Eb(l,29)._handleKeydown(e)&&u),"focus"===n&&(u=!1!==t.Eb(l,29)._onFocus()&&u),"blur"===n&&(u=!1!==t.Eb(l,29)._onBlur()&&u),u}),D.b,D.a)),t.rb(24,16384,null,0,f.x,[],{required:[0,"required"]},null),t.Jb(1024,null,f.n,(function(l){return[l]}),[f.x]),t.rb(26,671744,null,0,f.h,[[3,f.d],[6,f.n],[8,null],[8,null],[2,f.B]],{name:[0,"name"]},null),t.Jb(2048,null,f.p,null,[f.h]),t.rb(28,16384,null,0,f.q,[[4,f.p]],null,null),t.rb(29,2080768,null,3,x.c,[S.e,t.h,t.y,_.b,t.k,[2,v.b],[2,f.s],[2,f.i],[2,C.c],[6,f.p],[8,null],x.a,M.j],{placeholder:[0,"placeholder"],required:[1,"required"]},null),t.Kb(603979776,10,{options:1}),t.Kb(603979776,11,{optionGroups:1}),t.Kb(603979776,12,{customTrigger:0}),t.Jb(2048,[[1,4],[2,4]],C.d,null,[x.c]),t.Jb(2048,null,_.j,null,[x.c]),(l()(),t.sb(35,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"],["value","all"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Eb(l,36)._selectViaInteraction()&&u),"keydown"===n&&(u=!1!==t.Eb(l,36)._handleKeydown(e)&&u),u}),g.c,g.a)),t.rb(36,8568832,[[10,4]],0,_.p,[t.k,t.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),t.Mb(-1,0,["All"])),(l()(),t.hb(16777216,null,1,1,null,T)),t.rb(39,278528,null,0,u.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(40,0,null,null,28,"div",[["class","filter_field"]],null,null,null,null,null)),(l()(),t.sb(41,0,null,null,27,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,E.b,E.a)),t.rb(42,7520256,null,9,C.c,[t.k,t.h,[2,_.h],[2,v.b],[2,C.a],w.a,t.y,[2,y.a]],{appearance:[0,"appearance"]},null),t.Kb(603979776,13,{_controlNonStatic:0}),t.Kb(335544320,14,{_controlStatic:0}),t.Kb(603979776,15,{_labelChildNonStatic:0}),t.Kb(335544320,16,{_labelChildStatic:0}),t.Kb(603979776,17,{_placeholderChild:0}),t.Kb(603979776,18,{_errorChildren:1}),t.Kb(603979776,19,{_hintChildren:1}),t.Kb(603979776,20,{_prefixChildren:1}),t.Kb(603979776,21,{_suffixChildren:1}),(l()(),t.sb(52,0,null,1,16,"mat-select",[["class","mat-select"],["formControlName","shift_num"],["matNativeControl",""],["placeholder","Select Shift"],["required",""],["role","listbox"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,e){var u=!0;return"keydown"===n&&(u=!1!==t.Eb(l,58)._handleKeydown(e)&&u),"focus"===n&&(u=!1!==t.Eb(l,58)._onFocus()&&u),"blur"===n&&(u=!1!==t.Eb(l,58)._onBlur()&&u),u}),D.b,D.a)),t.rb(53,16384,null,0,f.x,[],{required:[0,"required"]},null),t.Jb(1024,null,f.n,(function(l){return[l]}),[f.x]),t.rb(55,671744,null,0,f.h,[[3,f.d],[6,f.n],[8,null],[8,null],[2,f.B]],{name:[0,"name"]},null),t.Jb(2048,null,f.p,null,[f.h]),t.rb(57,16384,null,0,f.q,[[4,f.p]],null,null),t.rb(58,2080768,null,3,x.c,[S.e,t.h,t.y,_.b,t.k,[2,v.b],[2,f.s],[2,f.i],[2,C.c],[6,f.p],[8,null],x.a,M.j],{placeholder:[0,"placeholder"],required:[1,"required"]},null),t.Kb(603979776,22,{options:1}),t.Kb(603979776,23,{optionGroups:1}),t.Kb(603979776,24,{customTrigger:0}),t.Jb(2048,[[13,4],[14,4]],C.d,null,[x.c]),t.Jb(2048,null,_.j,null,[x.c]),(l()(),t.sb(64,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"],["value","all"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Eb(l,65)._selectViaInteraction()&&u),"keydown"===n&&(u=!1!==t.Eb(l,65)._handleKeydown(e)&&u),u}),g.c,g.a)),t.rb(65,8568832,[[22,4]],0,_.p,[t.k,t.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),t.Mb(-1,0,["All"])),(l()(),t.hb(16777216,null,1,1,null,$)),t.rb(68,278528,null,0,u.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(69,0,null,null,20,"div",[["class","filter_field date_picker"],["color","primary"]],null,null,null,null,null)),(l()(),t.sb(70,16777216,null,null,19,"ejs-daterangepicker",[["formControlName","date"],["placeholder","Select a range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.daterangepicker.open()&&t),t}),k.b,k.a)),t.rb(71,6537216,null,3,F.h,[t.k,t.D,t.O,t.q],{placeholder:[0,"placeholder"]},null),t.Kb(335544320,25,{childPresets:0}),t.Kb(335544320,26,{start:0}),t.Kb(335544320,27,{end:0}),t.Jb(1024,null,f.o,(function(l){return[l]}),[F.h]),t.rb(76,671744,null,0,f.h,[[3,f.d],[8,null],[8,null],[6,f.o],[2,f.B]],{name:[0,"name"]},null),t.Jb(2048,null,f.p,null,[f.h]),t.rb(78,16384,null,0,f.q,[[4,f.p]],null,null),(l()(),t.sb(79,0,null,null,10,"e-presets",[],null,null,null,null,null)),t.rb(80,7421952,[[25,4]],1,F.n,[],null,null),t.Kb(603979776,28,{children:1}),(l()(),t.sb(82,16777216,null,null,1,"e-preset",[["label","This Week"]],null,null,null,null,null)),t.rb(83,11091968,[[28,4]],0,F.m,[t.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),t.sb(84,16777216,null,null,1,"e-preset",[["label","This Month"]],null,null,null,null,null)),t.rb(85,11091968,[[28,4]],0,F.m,[t.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),t.sb(86,16777216,null,null,1,"e-preset",[["label","Last Month"]],null,null,null,null,null)),t.rb(87,11091968,[[28,4]],0,F.m,[t.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),t.sb(88,16777216,null,null,1,"e-preset",[["label","Last Year"]],null,null,null,null,null)),t.rb(89,11091968,[[28,4]],0,F.m,[t.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),t.sb(90,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,q.b,q.a)),t.rb(91,180224,null,0,K.b,[t.k,M.h,[2,y.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.Mb(-1,0,["Submit"])),(l()(),t.sb(93,0,null,null,3,"div",[["class","table_export"]],null,null,null,null,null)),(l()(),t.sb(94,0,null,null,2,"button",[["class","export_btn"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.export()&&t),t}),q.b,q.a)),t.rb(95,180224,null,0,K.b,[t.k,M.h,[2,y.a]],null,null),(l()(),t.Mb(-1,0,[" Export"])),(l()(),t.sb(97,0,null,null,34,"mat-card",[["class","card_sec mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,O.b,O.a)),t.rb(98,49152,null,0,I.a,[[2,y.a]],null,null),(l()(),t.sb(99,0,null,0,32,"div",[["class","table_wrapper"]],null,null,null,null,null)),(l()(),t.sb(100,0,null,null,31,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.sb(101,0,null,null,28,"thead",[],null,null,null,null,null)),(l()(),t.sb(102,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.sb(103,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["S.no"])),(l()(),t.sb(105,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Date"])),(l()(),t.sb(107,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Shift"])),(l()(),t.sb(109,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Machine Name"])),(l()(),t.sb(111,0,null,null,1,"th",[["colspan","11"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Production Details"])),(l()(),t.sb(113,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.sb(114,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Program No"])),(l()(),t.sb(116,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Product Result accumulative"])),(l()(),t.sb(118,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Product Name"])),(l()(),t.sb(120,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Product Result"])),(l()(),t.sb(122,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Accept Count"])),(l()(),t.sb(124,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Reject Count"])),(l()(),t.sb(126,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Start Time"])),(l()(),t.sb(128,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["End Time"])),(l()(),t.hb(16777216,null,null,1,null,J)),t.rb(131,278528,null,0,u.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.hb(16777216,null,null,1,null,V)),t.rb(133,16384,null,0,u.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0,e.login),l(n,13,0,"outline"),l(n,24,0,""),l(n,26,0,"machine_name"),l(n,29,0,"Select Machine",""),l(n,36,0,"all"),l(n,39,0,e.machine_response),l(n,42,0,"outline"),l(n,53,0,""),l(n,55,0,"shift_num"),l(n,58,0,"Select Shift",""),l(n,65,0,"all"),l(n,68,0,e.shift_response),l(n,71,0,"Select a range"),l(n,76,0,"date"),l(n,80,0),l(n,83,0,e.weekEnd,"This Week",e.weekStart),l(n,85,0,e.monthEnd,"This Month",e.monthStart),l(n,87,0,e.lastEnd,"Last Month",e.lastStart),l(n,89,0,e.yearEnd,"Last Year",e.yearStart),l(n,91,0,e.login.invalid,"primary"),l(n,131,0,e.get_report),l(n,133,0,e.myLoader)}),(function(l,n){l(n,5,0,t.Eb(n,9).ngClassUntouched,t.Eb(n,9).ngClassTouched,t.Eb(n,9).ngClassPristine,t.Eb(n,9).ngClassDirty,t.Eb(n,9).ngClassValid,t.Eb(n,9).ngClassInvalid,t.Eb(n,9).ngClassPending),l(n,12,1,["standard"==t.Eb(n,13).appearance,"fill"==t.Eb(n,13).appearance,"outline"==t.Eb(n,13).appearance,"legacy"==t.Eb(n,13).appearance,t.Eb(n,13)._control.errorState,t.Eb(n,13)._canLabelFloat,t.Eb(n,13)._shouldLabelFloat(),t.Eb(n,13)._hasFloatingLabel(),t.Eb(n,13)._hideControlPlaceholder(),t.Eb(n,13)._control.disabled,t.Eb(n,13)._control.autofilled,t.Eb(n,13)._control.focused,"accent"==t.Eb(n,13).color,"warn"==t.Eb(n,13).color,t.Eb(n,13)._shouldForward("untouched"),t.Eb(n,13)._shouldForward("touched"),t.Eb(n,13)._shouldForward("pristine"),t.Eb(n,13)._shouldForward("dirty"),t.Eb(n,13)._shouldForward("valid"),t.Eb(n,13)._shouldForward("invalid"),t.Eb(n,13)._shouldForward("pending"),!t.Eb(n,13)._animationsEnabled]),l(n,23,1,[t.Eb(n,24).required?"":null,t.Eb(n,28).ngClassUntouched,t.Eb(n,28).ngClassTouched,t.Eb(n,28).ngClassPristine,t.Eb(n,28).ngClassDirty,t.Eb(n,28).ngClassValid,t.Eb(n,28).ngClassInvalid,t.Eb(n,28).ngClassPending,t.Eb(n,29).id,t.Eb(n,29).tabIndex,t.Eb(n,29)._getAriaLabel(),t.Eb(n,29)._getAriaLabelledby(),t.Eb(n,29).required.toString(),t.Eb(n,29).disabled.toString(),t.Eb(n,29).errorState,t.Eb(n,29).panelOpen?t.Eb(n,29)._optionIds:null,t.Eb(n,29).multiple,t.Eb(n,29)._ariaDescribedby||null,t.Eb(n,29)._getAriaActiveDescendant(),t.Eb(n,29).disabled,t.Eb(n,29).errorState,t.Eb(n,29).required,t.Eb(n,29).empty]),l(n,35,0,t.Eb(n,36)._getTabIndex(),t.Eb(n,36).selected,t.Eb(n,36).multiple,t.Eb(n,36).active,t.Eb(n,36).id,t.Eb(n,36)._getAriaSelected(),t.Eb(n,36).disabled.toString(),t.Eb(n,36).disabled),l(n,41,1,["standard"==t.Eb(n,42).appearance,"fill"==t.Eb(n,42).appearance,"outline"==t.Eb(n,42).appearance,"legacy"==t.Eb(n,42).appearance,t.Eb(n,42)._control.errorState,t.Eb(n,42)._canLabelFloat,t.Eb(n,42)._shouldLabelFloat(),t.Eb(n,42)._hasFloatingLabel(),t.Eb(n,42)._hideControlPlaceholder(),t.Eb(n,42)._control.disabled,t.Eb(n,42)._control.autofilled,t.Eb(n,42)._control.focused,"accent"==t.Eb(n,42).color,"warn"==t.Eb(n,42).color,t.Eb(n,42)._shouldForward("untouched"),t.Eb(n,42)._shouldForward("touched"),t.Eb(n,42)._shouldForward("pristine"),t.Eb(n,42)._shouldForward("dirty"),t.Eb(n,42)._shouldForward("valid"),t.Eb(n,42)._shouldForward("invalid"),t.Eb(n,42)._shouldForward("pending"),!t.Eb(n,42)._animationsEnabled]),l(n,52,1,[t.Eb(n,53).required?"":null,t.Eb(n,57).ngClassUntouched,t.Eb(n,57).ngClassTouched,t.Eb(n,57).ngClassPristine,t.Eb(n,57).ngClassDirty,t.Eb(n,57).ngClassValid,t.Eb(n,57).ngClassInvalid,t.Eb(n,57).ngClassPending,t.Eb(n,58).id,t.Eb(n,58).tabIndex,t.Eb(n,58)._getAriaLabel(),t.Eb(n,58)._getAriaLabelledby(),t.Eb(n,58).required.toString(),t.Eb(n,58).disabled.toString(),t.Eb(n,58).errorState,t.Eb(n,58).panelOpen?t.Eb(n,58)._optionIds:null,t.Eb(n,58).multiple,t.Eb(n,58)._ariaDescribedby||null,t.Eb(n,58)._getAriaActiveDescendant(),t.Eb(n,58).disabled,t.Eb(n,58).errorState,t.Eb(n,58).required,t.Eb(n,58).empty]),l(n,64,0,t.Eb(n,65)._getTabIndex(),t.Eb(n,65).selected,t.Eb(n,65).multiple,t.Eb(n,65).active,t.Eb(n,65).id,t.Eb(n,65)._getAriaSelected(),t.Eb(n,65).disabled.toString(),t.Eb(n,65).disabled),l(n,70,0,t.Eb(n,78).ngClassUntouched,t.Eb(n,78).ngClassTouched,t.Eb(n,78).ngClassPristine,t.Eb(n,78).ngClassDirty,t.Eb(n,78).ngClassValid,t.Eb(n,78).ngClassInvalid,t.Eb(n,78).ngClassPending),l(n,90,0,t.Eb(n,91).disabled||null,"NoopAnimations"===t.Eb(n,91)._animationMode),l(n,94,0,t.Eb(n,95).disabled||null,"NoopAnimations"===t.Eb(n,95)._animationMode),l(n,97,0,"NoopAnimations"===t.Eb(n,98)._animationMode)}))}function B(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-idle-reason",[],null,null,null,R,N)),t.rb(1,114688,null,0,r,[A.a,u.e,P,f.g,j.a],null,null)],(function(l,n){l(n,1,0)}),null)}var U=t.ob("app-idle-reason",r,B,{},{},[]),z=e("QQfA"),H=e("gavF"),W=e("POq0"),X=e("/Co4"),Y=e("cUpR"),Z=e("qJ5m"),G=e("Mz6y"),Q=e("DkaU"),ll=e("s6ns"),nl=e("821u"),el=e("OIZN"),tl=e("iInd"),ul=e("zMNK"),al=e("Gi4r"),il=e("oapL"),rl=e("ZwOa"),bl=e("02hT"),ol=e("Q+lL"),sl=e("pBi1"),dl=e("lT8R"),cl=e("BV1i"),hl=e("elxJ"),ml=e("5Bek"),pl=e("c9fC"),gl=e("FVPZ"),_l=e("qJ50"),fl=e("AaDx"),El=e("mkRZ"),Cl=e("dFDH"),vl=e("rWV4"),wl=e("zQui"),yl=e("8rEH"),Dl=e("r0V8"),xl=e("BzsH"),Sl=e("cw5Z"),Ml=e("EApP"),kl=e("1Q6g");e.d(n,"IdleReasonModuleNgFactory",(function(){return Fl}));var Fl=t.pb(b,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.a,s.a,d.a,d.b,c.a,h.b,h.a,m.c,p.a,U]],[3,t.j],t.w]),t.Cb(4608,u.n,u.m,[t.t,[2,u.E]]),t.Cb(4608,f.A,f.A,[]),t.Cb(4608,f.g,f.g,[]),t.Cb(4608,z.c,z.c,[z.i,z.e,t.j,z.h,z.f,t.q,t.y,u.d,v.b,[2,u.h]]),t.Cb(5120,z.j,z.k,[z.c]),t.Cb(5120,H.c,H.j,[z.c]),t.Cb(4608,W.c,W.c,[]),t.Cb(4608,_.b,_.b,[]),t.Cb(5120,X.a,X.b,[z.c]),t.Cb(5120,x.a,x.b,[z.c]),t.Cb(4608,Y.e,_.c,[[2,_.g],[2,_.l]]),t.Cb(4608,_.a,_.w,[[2,_.f],w.a]),t.Cb(5120,Z.b,Z.a,[[3,Z.b]]),t.Cb(5120,G.b,G.c,[z.c]),t.Cb(135680,M.h,M.h,[t.y,w.a]),t.Cb(4608,Q.e,Q.e,[t.L]),t.Cb(5120,ll.c,ll.d,[z.c]),t.Cb(135680,ll.e,ll.e,[z.c,t.q,[2,u.h],[2,ll.b],ll.c,[3,ll.e],z.e]),t.Cb(4608,nl.i,nl.i,[]),t.Cb(5120,nl.a,nl.b,[z.c]),t.Cb(5120,el.c,el.a,[[3,el.c]]),t.Cb(4608,j.a,j.a,[]),t.Cb(4608,u.e,u.e,[t.t]),t.Cb(1073742336,tl.o,tl.o,[[2,tl.t],[2,tl.k]]),t.Cb(1073742336,u.c,u.c,[]),t.Cb(1073742336,f.z,f.z,[]),t.Cb(1073742336,f.k,f.k,[]),t.Cb(1073742336,f.w,f.w,[]),t.Cb(1073742336,v.a,v.a,[]),t.Cb(1073742336,_.l,_.l,[[2,_.d],[2,Y.f]]),t.Cb(1073742336,w.b,w.b,[]),t.Cb(1073742336,_.v,_.v,[]),t.Cb(1073742336,K.c,K.c,[]),t.Cb(1073742336,ul.g,ul.g,[]),t.Cb(1073742336,S.c,S.c,[]),t.Cb(1073742336,z.g,z.g,[]),t.Cb(1073742336,H.i,H.i,[]),t.Cb(1073742336,H.f,H.f,[]),t.Cb(1073742336,al.c,al.c,[]),t.Cb(1073742336,il.c,il.c,[]),t.Cb(1073742336,W.d,W.d,[]),t.Cb(1073742336,C.e,C.e,[]),t.Cb(1073742336,rl.c,rl.c,[]),t.Cb(1073742336,I.e,I.e,[]),t.Cb(1073742336,_.m,_.m,[]),t.Cb(1073742336,_.t,_.t,[]),t.Cb(1073742336,bl.a,bl.a,[]),t.Cb(1073742336,ol.c,ol.c,[]),t.Cb(1073742336,_.q,_.q,[]),t.Cb(1073742336,X.c,X.c,[]),t.Cb(1073742336,x.d,x.d,[]),t.Cb(1073742336,sl.b,sl.b,[]),t.Cb(1073742336,sl.a,sl.a,[]),t.Cb(1073742336,dl.a,dl.a,[]),t.Cb(1073742336,cl.h,cl.h,[]),t.Cb(1073742336,_.x,_.x,[]),t.Cb(1073742336,_.n,_.n,[]),t.Cb(1073742336,hl.a,hl.a,[]),t.Cb(1073742336,ml.c,ml.c,[]),t.Cb(1073742336,pl.a,pl.a,[]),t.Cb(1073742336,gl.a,gl.a,[]),t.Cb(1073742336,_l.e,_l.e,[]),t.Cb(1073742336,Z.c,Z.c,[]),t.Cb(1073742336,M.a,M.a,[]),t.Cb(1073742336,G.e,G.e,[]),t.Cb(1073742336,Q.c,Q.c,[]),t.Cb(1073742336,fl.a,fl.a,[]),t.Cb(1073742336,El.a,El.a,[]),t.Cb(1073742336,Cl.d,Cl.d,[]),t.Cb(1073742336,vl.j,vl.j,[]),t.Cb(1073742336,ll.k,ll.k,[]),t.Cb(1073742336,wl.p,wl.p,[]),t.Cb(1073742336,yl.m,yl.m,[]),t.Cb(1073742336,nl.j,nl.j,[]),t.Cb(1073742336,Dl.b,Dl.b,[]),t.Cb(1073742336,Dl.a,Dl.a,[]),t.Cb(1073742336,F.i,F.i,[]),t.Cb(1073742336,xl.b,xl.b,[]),t.Cb(1073742336,el.d,el.d,[]),t.Cb(1073742336,Sl.h,Sl.h,[]),t.Cb(1073742336,Ml.i,Ml.i,[]),t.Cb(1073742336,kl.a,kl.a,[]),t.Cb(1073742336,b,b,[]),t.Cb(256,_.e,_.i,[]),t.Cb(256,Sl.p,"en-US",[]),t.Cb(256,Ml.b,{default:Ml.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),t.Cb(1024,tl.i,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);