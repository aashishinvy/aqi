(self.webpackChunkaqi=self.webpackChunkaqi||[]).push([[706],{706:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ChartModule:()=>st});var n=i(116),r=i(619);function s(t,e,i,n){return new(i||(i=Promise))(function(r,s){function a(t){try{c(n.next(t))}catch(e){s(e)}}function o(t){try{c(n.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(a,o)}c((n=n.apply(t,e||[])).next())})}var a,o=[],c="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(a||(a={}));var h,u=function(t){return Object.freeze(t)},d=function(t,e){this.inlineSize=t,this.blockSize=e,u(this)},l=function(){function t(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,u(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),g=function(t){return t instanceof SVGElement&&"getBBox"in t},p=function(t){if(g(t)){var e=t.getBBox();return!e.width&&!e.height}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},v=function(t){var e,i;if(t instanceof Element)return!0;var n=null===(i=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===i?void 0:i.defaultView;return!!(n&&t instanceof n.Element)},f="undefined"!=typeof window?window:{},y=new WeakMap,m=/auto|scroll/,b=/^tb|vertical/,E=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),w=function(t){return parseFloat(t||"0")},z=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=!1),new d((i?e:t)||0,(i?t:e)||0)},x=u({devicePixelContentBoxSize:z(),borderBoxSize:z(),contentBoxSize:z(),contentRect:new l(0,0,0,0)}),S=function(t,e){if(void 0===e&&(e=!1),y.has(t)&&!e)return y.get(t);if(p(t))return y.set(t,x),x;var i=getComputedStyle(t),n=g(t)&&t.ownerSVGElement&&t.getBBox(),r=!E&&"border-box"===i.boxSizing,s=b.test(i.writingMode||""),a=!n&&m.test(i.overflowY||""),o=!n&&m.test(i.overflowX||""),c=n?0:w(i.paddingTop),h=n?0:w(i.paddingRight),d=n?0:w(i.paddingBottom),v=n?0:w(i.paddingLeft),f=n?0:w(i.borderTopWidth),S=n?0:w(i.borderRightWidth),C=n?0:w(i.borderBottomWidth),T=v+h,O=c+d,L=(n?0:w(i.borderLeftWidth))+S,A=f+C,B=o?t.offsetHeight-A-t.clientHeight:0,M=a?t.offsetWidth-L-t.clientWidth:0,R=r?T+L:0,D=r?O+A:0,k=n?n.width:w(i.width)-R-M,F=n?n.height:w(i.height)-D-B,P=k+T+M+L,I=F+O+B+A,N=u({devicePixelContentBoxSize:z(Math.round(k*devicePixelRatio),Math.round(F*devicePixelRatio),s),borderBoxSize:z(P,I,s),contentBoxSize:z(k,F,s),contentRect:new l(v,c,k,F)});return y.set(t,N),N},C=function(t,e,i){var n=S(t,i),r=n.borderBoxSize,s=n.contentBoxSize,o=n.devicePixelContentBoxSize;switch(e){case a.DEVICE_PIXEL_CONTENT_BOX:return o;case a.BORDER_BOX:return r;default:return s}},T=function(t){var e=S(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=u([e.borderBoxSize]),this.contentBoxSize=u([e.contentBoxSize]),this.devicePixelContentBoxSize=u([e.devicePixelContentBoxSize])},O=function(t){if(p(t))return 1/0;for(var e=0,i=t.parentNode;i;)e+=1,i=i.parentNode;return e},L=function(){var t=1/0,e=[];o.forEach(function(i){if(0!==i.activeTargets.length){var n=[];i.activeTargets.forEach(function(e){var i=new T(e.target),r=O(e.target);n.push(i),e.lastReportedSize=C(e.target,e.observedBox),r<t&&(t=r)}),e.push(function(){i.callback.call(i.observer,n,i.observer)}),i.activeTargets.splice(0,i.activeTargets.length)}});for(var i=0,n=e;i<n.length;i++)(0,n[i])();return t},A=function(t){o.forEach(function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach(function(i){i.isActive()&&(O(i.target)>t?e.activeTargets.push(i):e.skippedTargets.push(i))})})},B=[],M=0,R={attributes:!0,characterData:!0,childList:!0,subtree:!0},D=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],k=function(t){return void 0===t&&(t=0),Date.now()+t},F=!1,P=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!F){F=!0;var i,n=k(t);i=function(){var i=!1;try{i=function(){var t,e=0;for(A(e);o.some(function(t){return t.activeTargets.length>0});)e=L(),A(e);return o.some(function(t){return t.skippedTargets.length>0})&&("function"==typeof ErrorEvent?t=new ErrorEvent("error",{message:c}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=c),window.dispatchEvent(t)),e>0}()}finally{if(F=!1,t=n-k(),!M)return;i?e.run(1e3):t>0?e.run(t):e.start()}},function(t){if(!h){var e=0,n=document.createTextNode("");new MutationObserver(function(){return B.splice(0).forEach(function(t){return t()})}).observe(n,{characterData:!0}),h=function(){n.textContent=""+(e?e--:e++)}}B.push(function(){requestAnimationFrame(i)}),h()}()}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,R)};document.body?e():f.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),D.forEach(function(e){return f.addEventListener(e,t.listener,!0)}))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),D.forEach(function(e){return f.removeEventListener(e,t.listener,!0)}),this.stopped=!0)},t}()),I=function(t){!M&&t>0&&P.start(),!(M+=t)&&P.stop()},N=function(){function t(t,e){this.target=t,this.observedBox=e||a.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=C(this.target,this.observedBox,!0);return g(t=this.target)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),U=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},V=new WeakMap,q=function(t,e){for(var i=0;i<t.length;i+=1)if(t[i].target===e)return i;return-1},_=function(){function t(){}return t.connect=function(t,e){var i=new U(t,e);V.set(t,i)},t.observe=function(t,e,i){var n=V.get(t),r=0===n.observationTargets.length;q(n.observationTargets,e)<0&&(r&&o.push(n),n.observationTargets.push(new N(e,i&&i.box)),I(1),P.schedule())},t.unobserve=function(t,e){var i=V.get(t),n=q(i.observationTargets,e);n>=0&&(1===i.observationTargets.length&&o.splice(o.indexOf(i),1),i.observationTargets.splice(n,1),I(-1))},t.disconnect=function(t){var e=this,i=V.get(t);i.observationTargets.slice().forEach(function(i){return e.unobserve(t,i.target)}),i.activeTargets.splice(0,i.activeTargets.length)},t}(),j=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");_.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!v(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");_.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!v(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");_.unobserve(this,t)},t.prototype.disconnect=function(){_.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}(),X=i(878),Z=i(75),G=i(318),W=i(689);class J{constructor(t){this.changes=t}static of(t){return new J(t)}notEmpty(t){if(this.changes[t]){const e=this.changes[t].currentValue;if(null!=e)return(0,X.of)(e)}return Z.E}has(t){return this.changes[t]?(0,X.of)(this.changes[t].currentValue):Z.E}notFirst(t){return this.changes[t]&&!this.changes[t].isFirstChange()?(0,X.of)(this.changes[t].currentValue):Z.E}notFirstAndEmpty(t){if(this.changes[t]&&!this.changes[t].isFirstChange()){const e=this.changes[t].currentValue;if(null!=e)return(0,X.of)(e)}return Z.E}}const Y=new r.OlP("NGX_ECHARTS_CONFIG");let H=(()=>{class t{constructor(t,e,i){this.el=e,this.ngZone=i,this.autoResize=!0,this.loadingType="default",this.chartInit=new r.vpe,this.optionsError=new r.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.echarts=t.echarts}ngOnChanges(t){const e=J.of(t);e.notFirstAndEmpty("options").subscribe(t=>this.onOptionsChange(t)),e.notFirstAndEmpty("merge").subscribe(t=>this.setOption(t)),e.has("loading").subscribe(t=>this.toggleLoading(!!t)),e.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){this.autoResize&&(this.resizeSub=new j(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize())}),this.resizeSub.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&(this.resizeSub.unobserve(this.el.nativeElement),window.cancelAnimationFrame(this.animationFrameID)),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.ngZone.runOutsideAngular(()=>{this.chart.resize()})}toggleLoading(t){this.chart&&(t?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(t,e){if(this.chart)try{this.chart.setOption(t,e)}catch(i){console.error(i),this.optionsError.emit(i)}}refreshChart(){return s(this,void 0,void 0,function*(){this.dispose(),yield this.initChart()})}createChart(){const t=this.el.nativeElement;if(window&&window.getComputedStyle){const e=window.getComputedStyle(t,null).getPropertyValue("height");e&&"0px"!==e||t.style.height&&"0px"!==t.style.height||(t.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:e})=>e(t,this.theme,this.initOpts)))}initChart(){return s(this,void 0,void 0,function*(){yield this.onOptionsChange(this.options),this.merge&&this.chart&&this.setOption(this.merge)})}onOptionsChange(t){return s(this,void 0,void 0,function*(){t&&(this.chart||(this.chart=yield this.createChart(),this.chartInit.emit(this.chart)),this.setOption(this.options,!0))})}createLazyEvent(t){return this.chartInit.pipe((0,W.w)(e=>new G.y(i=>(e.on(t,t=>this.ngZone.run(()=>i.next(t))),()=>{this.chart&&(this.chart.isDisposed()||e.off(t))}))))}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(Y),r.Y36(r.SBq),r.Y36(r.R0b))},t.\u0275dir=r.lG2({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{autoResize:"autoResize",loadingType:"loadingType",options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[r.TTD]}),t})(),Q=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:Y,useValue:e}]}}static forChild(){return{ngModule:t}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[]]}),t})();var K=i(599),$=i(80),tt=i(965);function et(t,e){1&t&&(r.TgZ(0,"div"),r._uU(1," wating for DATA "),r.qZA())}function it(t,e){if(1&t&&r._UZ(0,"div",2),2&t){const t=r.oxw();r.Q6J("options",t.chartOption)}}const nt=[{path:":city",component:(()=>{class t{constructor(t,e){this.dataService=t,this.activatedRoute=e,this.xAxis=[],this.yAxis=[],this.chartOption={}}ngOnInit(){this.generateChart(),this.dataSub=(0,$.aj)(this.activatedRoute.params,this.dataService.aqiData).subscribe(t=>{t[0]&&t[1]&&(this.aqiCity=t[1][t[0].city],this.aqiCity&&this.chartData())})}ngOnDestroy(){this.dataSub.undefined()}chartData(){var t,e,i;const n=null===(t=this.aqiCity)||void 0===t?void 0:t.date.toLocaleTimeString();-1===this.xAxis.indexOf(n)&&(this.xAxis.push(null===(e=this.aqiCity)||void 0===e?void 0:e.date.toLocaleTimeString()),this.yAxis.push(null===(i=this.aqiCity)||void 0===i?void 0:i.aqi)),this.chartOption={xAxis:{type:"category",data:this.xAxis},yAxis:{type:"value"},series:[{data:this.yAxis,type:"line"}]}}generateChart(){this.chartOption={xAxis:{type:"category",data:this.xAxis},yAxis:{type:"value"},series:[{data:this.yAxis,type:"line"}]}}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(tt.D),r.Y36(K.gz))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-line-chart"]],decls:2,vars:2,consts:[[4,"ngIf"],["echarts","","class","demo-chart",3,"options",4,"ngIf"],["echarts","",1,"demo-chart",3,"options"]],template:function(t,e){1&t&&(r.YNc(0,et,2,0,"div",0),r.YNc(1,it,1,1,"div",1)),2&t&&(r.Q6J("ngIf",!e.xAxis.length),r.xp6(1),r.Q6J("ngIf",e.xAxis.length))},directives:[n.O5,H],styles:[""]}),t})()}];let rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[K.Bz.forChild(nt)],K.Bz]}),t})(),st=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,rt,Q.forRoot({echarts:()=>i.e(409).then(i.bind(i,409))})]]}),t})()}}]);