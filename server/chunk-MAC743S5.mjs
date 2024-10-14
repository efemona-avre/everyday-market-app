import './polyfills.server.mjs';
import{$ as Je,A as c,B as d,C as _,D as qe,E as w,F as be,G as h,H as Me,I as ze,J as q,L as Ze,R as G,S as b,T as Ae,V as Ke,W as z,X as S,Y as Z,Z as Xe,_ as Ye,a as Ge,aa as Qe,b as Te,c as Be,d as He,da as et,e as $,f as W,g as Ue,h as a,ha as tt,i as F,j as v,ja as it,k as l,ka as V,l as y,m as ye,n as Le,o as $e,p as We,q as k,r as Ce,s as g,t as s,u as Ve,v as j,w as E,x as D,y as C,z as De}from"./chunk-2IUQYIHL.mjs";import{a as f,b as m}from"./chunk-5XUXGTUW.mjs";var Ht=[{path:"",redirectTo:"/register",pathMatch:"full"}],K=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=a({imports:[V.forRoot(Ht),V]})};var X=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["app-header"]],decls:5,vars:0,consts:[[1,"app-header","app-bg"],[1,"maxHeight","flex","flex-align-items--center"],["src","../../../../assets/logo.png",1,"app-logo"],[1,"app-slogan"]],template:function(t,n){t&1&&(c(0,"header",0)(1,"div",1),_(2,"img",2),c(3,"span",3),h(4,"Shop 'till you Drop"),d()()())},styles:['.app-header[_ngcontent-%COMP%]{height:200px;border-bottom:1px solid black}.app-header[_ngcontent-%COMP%]:after{content:"";height:200px;opacity:.5;background:url("./media/hero-I4MZK5Z3.png");background-position:center;background-repeat:no-repeat;background-size:cover;position:absolute;inset:0;z-index:-1}.app-logo[_ngcontent-%COMP%]{height:80px;margin-left:50px}.app-slogan[_ngcontent-%COMP%]{font-family:Comic Sans MS,Comic Sans,cursive;font-weight:700;margin-left:5px}']})};var N=class i{title="Efemona everyday-market-ng";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["app-root"]],decls:2,vars:0,template:function(t,n){t&1&&_(0,"app-header")(1,"router-outlet")},dependencies:[tt,X]})};var dt=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(Ve),s(Ce))}}static{this.\u0275dir=y({type:i})}}return i})(),$t=(()=>{class i extends dt{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=We(i)))(r||i)}})()}static{this.\u0275dir=y({type:i,features:[E]})}}return i})(),ht=new F("");var Wt={provide:ht,useExisting:W(()=>ae),multi:!0};function qt(){let i=Ae()?Ae().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var zt=new F(""),ae=(()=>{class i extends dt{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!qt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(Ve),s(Ce),s(zt,8))}}static{this.\u0275dir=y({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&w("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},features:[q([Wt]),E]})}}return i})();function M(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function ft(i){return i!=null&&typeof i.length=="number"}var pt=new F(""),mt=new F(""),Zt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,I=class{static min(e){return Kt(e)}static max(e){return Xt(e)}static required(e){return Yt(e)}static requiredTrue(e){return Jt(e)}static email(e){return Qt(e)}static minLength(e){return ei(e)}static maxLength(e){return ti(e)}static pattern(e){return ii(e)}static nullValidator(e){return gt(e)}static compose(e){return Dt(e)}static composeAsync(e){return Mt(e)}};function Kt(i){return e=>{if(M(e.value)||M(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function Xt(i){return e=>{if(M(e.value)||M(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Yt(i){return M(i.value)?{required:!0}:null}function Jt(i){return i.value===!0?null:{required:!0}}function Qt(i){return M(i.value)||Zt.test(i.value)?null:{email:!0}}function ei(i){return e=>M(e.value)||!ft(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function ti(i){return e=>ft(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function ii(i){if(!i)return gt;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(M(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function gt(i){return null}function vt(i){return i!=null}function _t(i){return Ze(i)?Te(i):i}function yt(i){let e={};return i.forEach(t=>{e=t!=null?f(f({},e),t):e}),Object.keys(e).length===0?null:e}function Ct(i,e){return e.map(t=>t(i))}function ni(i){return!i.validate}function Vt(i){return i.map(e=>ni(e)?e:t=>e.validate(t))}function Dt(i){if(!i)return null;let e=i.filter(vt);return e.length==0?null:function(t){return yt(Ct(t,e))}}function bt(i){return i!=null?Dt(Vt(i)):null}function Mt(i){if(!i)return null;let e=i.filter(vt);return e.length==0?null:function(t){let n=Ct(t,e).map(_t);return He(n).pipe(Be(yt))}}function At(i){return i!=null?Mt(Vt(i)):null}function nt(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ft(i){return i._rawValidators}function Et(i){return i._rawAsyncValidators}function Fe(i){return i?Array.isArray(i)?i:[i]:[]}function ee(i,e){return Array.isArray(i)?i.includes(e):i===e}function rt(i,e){let t=Fe(e);return Fe(i).forEach(r=>{ee(t,r)||t.push(r)}),t}function ot(i,e){return Fe(e).filter(t=>!ee(i,t))}var te=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=bt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=At(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},P=class extends te{get formDirective(){return null}get path(){return null}},L=class extends te{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ri={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},sn=m(f({},ri),{"[class.ng-submitted]":"isSubmitted"}),wt=(()=>{class i extends ie{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(L,2))}}static{this.\u0275dir=y({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&De("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[E]})}}return i})(),It=(()=>{class i extends ie{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(P,10))}}static{this.\u0275dir=y({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&De("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[E]})}}return i})();var T="VALID",J="INVALID",x="PENDING",B="DISABLED",A=class{},ne=class extends A{constructor(e,t){super(),this.value=e,this.source=t}},H=class extends A{constructor(e,t){super(),this.pristine=e,this.source=t}},U=class extends A{constructor(e,t){super(),this.touched=e,this.source=t}},O=class extends A{constructor(e,t){super(),this.status=e,this.source=t}},Ee=class extends A{constructor(e){super(),this.source=e}},we=class extends A{constructor(e){super(),this.source=e}};function Ne(i){return(le(i)?i.validators:i)||null}function oi(i){return Array.isArray(i)?bt(i):i||null}function xe(i,e){return(le(e)?e.asyncValidators:i)||null}function si(i){return Array.isArray(i)?At(i):i||null}function le(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function St(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new $(1e3,"");if(!n[t])throw new $(1001,"")}function Nt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new $(1002,"")})}var R=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=G(()=>this.statusReactive()),this.statusReactive=j(void 0),this._pristine=G(()=>this.pristineReactive()),this.pristineReactive=j(!0),this._touched=G(()=>this.touchedReactive()),this.touchedReactive=j(!1),this._events=new Ge,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return b(this.statusReactive)}set status(e){b(()=>this.statusReactive.set(e))}get valid(){return this.status===T}get invalid(){return this.status===J}get pending(){return this.status==x}get disabled(){return this.status===B}get enabled(){return this.status!==B}get pristine(){return b(this.pristineReactive)}set pristine(e){b(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return b(this.touchedReactive)}set touched(e){b(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(rt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(rt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ot(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ot(e,this._rawAsyncValidators))}hasValidator(e){return ee(this._rawValidators,e)}hasAsyncValidator(e){return ee(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(m(f({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new U(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new U(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(m(f({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new H(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new H(!0,n))}markAsPending(e={}){this.status=x;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new O(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(m(f({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=B,this.errors=null,this._forEachChild(r=>{r.disable(m(f({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,n)),this._events.next(new O(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(f({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(n=>{n.enable(m(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(f({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===x)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,t)),this._events.next(new O(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(m(f({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=_t(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new O(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new k,this.statusChanges=new k}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?J:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(J)?J:T}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new H(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new U(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){le(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=oi(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=si(this._rawAsyncValidators)}},re=class extends R{constructor(e,t,n){super(Ne(t),xe(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Nt(this,!0,e),Object.keys(e).forEach(n=>{St(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Ie=class extends re{};var Oe=new F("CallSetDisabledState",{providedIn:"root",factory:()=>ue}),ue="always";function ai(i,e){return[...e.path,i]}function st(i,e,t=ue){Pe(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ui(i,e),di(i,e),ci(i,e),li(i,e)}function at(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),se(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function oe(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function li(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Pe(i,e){let t=Ft(i);e.validator!==null?i.setValidators(nt(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Et(i);e.asyncValidator!==null?i.setAsyncValidators(nt(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();oe(e._rawValidators,r),oe(e._rawAsyncValidators,r)}function se(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Ft(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(u=>u!==e.validator);o.length!==r.length&&(t=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=Et(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(u=>u!==e.asyncValidator);o.length!==r.length&&(t=!0,i.setAsyncValidators(o))}}}let n=()=>{};return oe(e._rawValidators,n),oe(e._rawAsyncValidators,n),t}function ui(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&xt(i,e)})}function ci(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&xt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function xt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function di(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function hi(i,e){i==null,Pe(i,e)}function fi(i,e){return se(i,e)}function pi(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function mi(i){return Object.getPrototypeOf(i.constructor)===$t}function gi(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function vi(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===ae?t=o:mi(o)?n=o:r=o}),r||n||t||null}function _i(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function lt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ut(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Q=class extends R{constructor(e=null,t,n){super(Ne(t),xe(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),le(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ut(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){lt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){lt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ut(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var yi=i=>i instanceof Q;var Ot=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=y({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Pt=new F("");var Ci={provide:P,useExisting:W(()=>Re)},Re=(()=>{class i extends P{get submitted(){return b(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=G(()=>this._submittedReactive()),this._submittedReactive=j(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new k,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(se(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return st(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){at(t.control||null,t,!1),_i(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),gi(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Ee(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new we(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(at(n||null,t),yi(r)&&(st(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);hi(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&fi(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Pe(this.form,this),this._oldForm&&se(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(s(pt,10),s(mt,10),s(Oe,8))}}static{this.\u0275dir=y({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&w("submit",function(u){return r.onSubmit(u)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[q([Ci]),E,ye]})}}return i})();var Vi={provide:L,useExisting:W(()=>ke)},ke=(()=>{class i extends L{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,o,u){super(),this._ngModelWarningConfig=u,this._added=!1,this.name=null,this.update=new k,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=vi(this,o)}ngOnChanges(t){this._added||this._setUpControl(),pi(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ai(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(s(P,13),s(pt,10),s(mt,10),s(ht,10),s(Pt,8))}}static{this.\u0275dir=y({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[q([Vi]),E,ye]})}}return i})();var Rt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=l({type:i})}static{this.\u0275inj=a({})}}return i})(),Se=class extends R{constructor(e,t,n){super(Ne(t),xe(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Nt(this,!1,e),e.forEach((n,r)=>{St(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function ct(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var kt=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),o={};return ct(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new re(r,o)}record(t,n=null){let r=this._reduceControls(t);return new Ie(r,n)}control(t,n,r){let o={};return this.useNonNullable?(ct(n)?o=n:(o.validators=n,o.asyncValidators=r),new Q(t,m(f({},o),{nonNullable:!0}))):new Q(t,n,r)}array(t,n,r){let o=t.map(u=>this._createControl(u));return new Se(o,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof Q)return t;if(t instanceof R)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(n,r,o)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Ue({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var jt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Oe,useValue:t.callSetDisabledState??ue}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=l({type:i})}static{this.\u0275inj=a({imports:[Rt]})}}return i})(),Gt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Pt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Oe,useValue:t.callSetDisabledState??ue}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=l({type:i})}static{this.\u0275inj=a({imports:[Rt]})}}return i})();function Ai(i,e){if(i&1){let t=qe();c(0,"li")(1,"button",2),w("click",function(){let r=Le(t).$implicit,o=be();return $e(o.selectCategory(r))}),h(2),d()()}if(i&2){let t=e.$implicit;g(2),ze(" ",t.name," ")}}function Fi(i,e){if(i&1&&(c(0,"li"),h(1),d()),i&2){let t=e.$implicit;g(),Me(t)}}function Ei(i,e){if(i&1&&(c(0,"div")(1,"h3"),h(2),d(),c(3,"ul"),D(4,Fi,2,1,"li",0),d()()),i&2){let t=be();g(2),Me(t.selectedCategory.name),g(2),C("ngForOf",t.selectedCategory.products)}}var ce=class i{constructor(e){this.http=e}categories=[];selectedCategory=null;ngOnInit(){this.http.get("categories.json").subscribe(e=>{this.categories=e})}selectCategory(e){this.selectedCategory=e}static \u0275fac=function(t){return new(t||i)(s(Z))};static \u0275cmp=v({type:i,selectors:[["app-category-menu"]],decls:3,vars:2,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"click"]],template:function(t,n){t&1&&(c(0,"ul"),D(1,Ai,3,1,"li",0),d(),D(2,Ei,5,2,"div",1)),t&2&&(g(),C("ngForOf",n.categories),g(),C("ngIf",n.selectedCategory))},dependencies:[Ke,z],styles:["ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:20px;padding-left:0}li[_ngcontent-%COMP%]{margin-bottom:8px}.container[_ngcontent-%COMP%]{display:inline;border:1px solid black;padding:2px 5px;cursor:pointer}.container[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.selected[_ngcontent-%COMP%]{background-color:bisque}"]})};var de=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["app-products-page"]],decls:1,vars:0,template:function(t,n){t&1&&_(0,"app-category-menu")},dependencies:[ce]})};var Ii=[{path:"products",component:de}],he=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=a({imports:[V.forChild(Ii),V]})};function Tt(){return i=>/^[a-zA-Z\s]+$/.test(i.value)?null:{lettersOnly:!0}}function Bt(i){return e=>e.value!==i?{invalidCountry:{value:e.value}}:null}function Si(i,e){i&1&&(c(0,"div"),h(1," Name can only contain letters. "),d())}function Ni(i,e){i&1&&(c(0,"div"),h(1," Please enter a valid email. "),d())}function xi(i,e){i&1&&(c(0,"div"),h(1," Only Canada is allowed. "),d())}var fe=class i{constructor(e,t,n){this.router=e;this.http=t;this.fb=n;this.registerForm=this.fb.group({})}registerForm;provinces=[];ngOnInit(){this.loadProvinces(),this.registerForm=this.fb.group({name:["",[I.required,Tt]],email:["",[I.required,I.email]],country:["",[I.required,Bt("Canada")]]})}loadProvinces(){this.http.get("provinces.json").subscribe(e=>{this.provinces=e.provinces})}onSubmit(){this.registerForm.valid?(alert("Registration Successful! Redirecting to Products Page..."),this.router.navigate(["/products"])):alert("Please correct the errors in the form.")}static \u0275fac=function(t){return new(t||i)(s(it),s(Z),s(kt))};static \u0275cmp=v({type:i,selectors:[["app-register-page"]],decls:15,vars:4,consts:[[3,"ngSubmit","formGroup"],["for","name"],["id","name","formControlName","name"],[4,"ngIf"],["for","email"],["id","email","formControlName","email"],["for","country"],["id","country","formControlName","country"],["type","submit"]],template:function(t,n){if(t&1&&(c(0,"form",0),w("ngSubmit",function(){return n.onSubmit()}),c(1,"label",1),h(2,"Name:"),d(),_(3,"input",2),D(4,Si,2,0,"div",3),c(5,"label",4),h(6,"Email:"),d(),_(7,"input",5),D(8,Ni,2,0,"div",3),c(9,"label",6),h(10,"Country:"),d(),_(11,"input",7),D(12,xi,2,0,"div",3),c(13,"button",8),h(14,"Submit"),d()()),t&2){let r,o,u;C("formGroup",n.registerForm),g(4),C("ngIf",((r=n.registerForm.get("name"))==null?null:r.hasError("lettersOnly"))&&((r=n.registerForm.get("name"))==null?null:r.touched)),g(4),C("ngIf",((o=n.registerForm.get("email"))==null?null:o.hasError("email"))&&((o=n.registerForm.get("email"))==null?null:o.touched)),g(4),C("ngIf",((u=n.registerForm.get("country"))==null?null:u.hasError("invalidCountry"))&&((u=n.registerForm.get("country"))==null?null:u.touched))}},dependencies:[z,Ot,ae,wt,It,Re,ke],styles:[".error[_ngcontent-%COMP%]{color:red}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]})};var Oi=[{path:"register",component:fe}],pe=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=a({imports:[V.forChild(Oi),V]})};var me=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=a({imports:[S,jt,Gt,he,pe]})};var ge=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=a({imports:[S]})};var ve=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=a({imports:[S]})};var _e=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i,bootstrap:[N]});static \u0275inj=a({providers:[Qe(),Xe(Ye())],imports:[Je,K,ge,ve,me]})};var je=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i,bootstrap:[N]});static \u0275inj=a({imports:[_e,et]})};export{je as a};
