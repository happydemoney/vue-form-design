(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2add03be"],{c67c:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-tabs",{attrs:{type:"border-card",stretch:!0}},[t("el-tab-pane",{attrs:{label:"表单项属性"}},[void 0!==e.itemConfig.prop?t("div",{staticClass:"config-item"},[t("label",[e._v("字段标识: ")]),t("el-input",{model:{value:e.itemConfig.prop,callback:function(i){e.$set(e.itemConfig,"prop",i)},expression:"itemConfig.prop"}})],1):e._e(),void 0!==e.itemConfig.label?t("div",{staticClass:"config-item"},[t("label",[e._v("标签名: ")]),t("el-input",{model:{value:e.itemConfig.label,callback:function(i){e.$set(e.itemConfig,"label",i)},expression:"itemConfig.label"}})],1):e._e(),e.itemConfig.renderConfig&&void 0!==e.itemConfig.renderConfig.defaultValue&&e.canSetDefalutValueList.indexOf(e.itemConfig.type)>-1?t("div",{staticClass:"config-item"},[t("label",[e._v("默认值: ")]),"textarea"==e.itemConfig.type?t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.itemConfig.renderConfig.defaultValue,callback:function(i){e.$set(e.itemConfig.renderConfig,"defaultValue",i)},expression:"itemConfig.renderConfig.defaultValue"}}):e._e(),"input"==e.itemConfig.type?t("el-input",{model:{value:e.itemConfig.renderConfig.defaultValue,callback:function(i){e.$set(e.itemConfig.renderConfig,"defaultValue",i)},expression:"itemConfig.renderConfig.defaultValue"}}):e._e(),"rate"==e.itemConfig.type?t("el-rate",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{max:e.data.renderConfig.max,"allow-half":e.data.options.allowHalf},model:{value:e.data.options.defaultValue,callback:function(i){e.$set(e.data.options,"defaultValue",i)},expression:"data.options.defaultValue"}}):e._e(),"rate"==e.itemConfig.type?t("el-button",{staticStyle:{display:"inline-block","vertical-align":"middle","margin-left":"10px"},attrs:{type:"text"},on:{click:function(i){e.data.options.defaultValue=0}}},[e._v(e._s(e.$t("fm.actions.clear")))]):e._e(),"color"==e.itemConfig.type?t("el-color-picker",{attrs:{"show-alpha":e.itemConfig.renderConfig.showAlpha},model:{value:e.itemConfig.renderConfig.defaultValue,callback:function(i){e.$set(e.itemConfig.renderConfig,"defaultValue",i)},expression:"itemConfig.renderConfig.defaultValue"}}):e._e(),"switch"==e.itemConfig.type?t("el-switch",{model:{value:e.itemConfig.renderConfig.defaultValue,callback:function(i){e.$set(e.itemConfig.renderConfig,"defaultValue",i)},expression:"itemConfig.renderConfig.defaultValue"}}):e._e()],1):e._e(),e.itemConfig.renderConfig&&void 0!==e.itemConfig.renderConfig.options?t("div",{staticClass:"config-item"},[t("label",[e._v("选项: ")]),"radio"==e.itemConfig.type||"select"==e.itemConfig.type&&!e.itemConfig.renderConfig.multiple?[t("el-radio-group",{model:{value:e.itemConfig.renderConfig.defaultValue,callback:function(i){e.$set(e.itemConfig.renderConfig,"defaultValue",i)},expression:"itemConfig.renderConfig.defaultValue"}},[t("draggable",e._b({attrs:{tag:"ul",list:e.itemConfig.renderConfig.options,handle:".drag-item"}},"draggable",{group:{name:"options"},ghostClass:"ghost",handle:".drag-item"},!1),e._l(e.itemConfig.renderConfig.options,(function(i,n){return t("li",{key:n},[t("el-radio",{staticStyle:{"margin-right":"5px"},attrs:{label:i.value}},[t("el-input",{staticStyle:{width:"90px"},attrs:{size:"mini"},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"item.value"}}),t("el-input",{staticStyle:{width:"90px"},attrs:{size:"mini"},model:{value:i.label,callback:function(t){e.$set(i,"label",t)},expression:"item.label"}})],1),t("svg-icon",{staticClass:"drag-item",staticStyle:{"font-size":"16px",margin:"0 5px",cursor:"move"},attrs:{"icon-class":"MoveVertical"}}),t("el-button",{staticStyle:{padding:"4px","margin-left":"5px"},attrs:{circle:"",plain:"",type:"danger",size:"mini",icon:"el-icon-minus"},on:{click:function(i){return e.handleOptionsRemove(n)}}})],1)})),0)],1)]:e._e(),"checkbox"==e.itemConfig.type||"select"==e.itemConfig.type&&e.itemConfig.renderConfig.multiple?[t("el-checkbox-group",{model:{value:e.itemConfig.renderConfig.defaultValue,callback:function(i){e.$set(e.itemConfig.renderConfig,"defaultValue",i)},expression:"itemConfig.renderConfig.defaultValue"}},[t("draggable",e._b({attrs:{tag:"ul",list:e.itemConfig.renderConfig.options,handle:".drag-item"}},"draggable",{group:{name:"options"},ghostClass:"ghost",handle:".drag-item"},!1),e._l(e.itemConfig.renderConfig.options,(function(i,n){return t("li",{key:n},[t("el-checkbox",{staticStyle:{"margin-right":"5px"},attrs:{label:i.value}},[t("el-input",{staticStyle:{width:"90px"},attrs:{size:"mini"},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"item.value"}}),t("el-input",{staticStyle:{width:"90px"},attrs:{size:"mini"},model:{value:i.label,callback:function(t){e.$set(i,"label",t)},expression:"item.label"}})],1),t("svg-icon",{staticClass:"drag-item",staticStyle:{"font-size":"16px",margin:"0 5px",cursor:"move"},attrs:{"icon-class":"MoveVertical"}}),t("el-button",{staticStyle:{padding:"4px","margin-left":"5px"},attrs:{circle:"",plain:"",type:"danger",size:"mini",icon:"el-icon-minus"},on:{click:function(i){return e.handleOptionsRemove(n)}}})],1)})),0)],1)]:e._e(),t("div",{staticStyle:{"margin-left":"22px"}},[t("el-button",{attrs:{type:"text"},on:{click:e.handleAddOption}},[e._v("添加选项")])],1)],2):e._e(),e.itemConfig.renderConfig&&void 0!==e.itemConfig.renderConfig.disabled?t("div",{staticClass:"config-item"},[t("label",[e._v("操作属性: ")]),t("el-checkbox",{model:{value:e.itemConfig.renderConfig.disabled,callback:function(i){e.$set(e.itemConfig.renderConfig,"disabled",i)},expression:"itemConfig.renderConfig.disabled"}},[e._v("禁用")])],1):e._e(),e.itemConfig.renderConfig&&void 0!==e.itemConfig.renderConfig.required?t("div",{staticClass:"config-item"},[t("label",[e._v("校验: ")]),t("el-checkbox",{model:{value:e.itemConfig.renderConfig.required,callback:function(i){e.$set(e.itemConfig.renderConfig,"required",i)},expression:"itemConfig.renderConfig.required"}},[e._v("必填")])],1):e._e()]),t("el-tab-pane",{attrs:{label:"表单属性"}},[t("div",{staticClass:"config-item"},[t("label",[e._v("标签对齐方式: ")]),t("el-radio-group",{attrs:{size:"small"},model:{value:e.formConfig.labelPosition,callback:function(i){e.$set(e.formConfig,"labelPosition",i)},expression:"formConfig.labelPosition"}},[t("el-radio-button",{attrs:{label:"left"}},[e._v("左对齐")]),t("el-radio-button",{attrs:{label:"right"}},[e._v("右对齐")]),t("el-radio-button",{attrs:{label:"top"}},[e._v("顶部对齐")])],1)],1),t("div",{staticClass:"config-item"},[t("label",[e._v("标签宽度: ")]),t("el-input-number",{attrs:{step:10,min:0,max:200},model:{value:e.formConfig.labelWidth,callback:function(i){e.$set(e.formConfig,"labelWidth",e._n(i))},expression:"formConfig.labelWidth"}})],1),t("div",{staticClass:"config-item"},[t("label",[e._v("组件尺寸: ")]),t("el-radio-group",{attrs:{size:"small"},model:{value:e.formConfig.size,callback:function(i){e.$set(e.formConfig,"size",i)},expression:"formConfig.size"}},[t("el-radio-button",{attrs:{label:"medium"}},[e._v("中等")]),t("el-radio-button",{attrs:{label:"small"}},[e._v("小")]),t("el-radio-button",{attrs:{label:"mini"}},[e._v("迷你")])],1)],1),t("div",{staticClass:"config-item"},[t("label",[e._v("元素布局: ")]),t("el-radio-group",{attrs:{size:"small"},model:{value:e.formConfig.columns,callback:function(i){e.$set(e.formConfig,"columns",i)},expression:"formConfig.columns"}},[t("el-radio-button",{attrs:{label:1}},[e._v("整行")]),t("el-radio-button",{attrs:{label:2}},[e._v("二等分")]),t("el-radio-button",{attrs:{label:3}},[e._v("三等分")]),t("el-radio-button",{attrs:{label:4}},[e._v("四等分")])],1)],1)])],1)},l=[],a=(t("4160"),t("a434"),t("b64b"),t("159b"),t("310e")),o=t.n(a),r={name:"formConfig",components:{Draggable:o.a},props:{itemConfig:{type:Object,default:function(){return{}}},formConfig:{type:Object,default:function(){return{columns:1,labelPosition:"right",labelWidth:100,size:"small"}}}},data:function(){return{validator:{type:null,required:null,pattern:null,range:null,length:null},canSetDefalutValueList:["textarea","input","rate","color","switch"]}},watch:{"itemConfig.renderConfig.required":function(e){this.validateRequired(e)}},methods:{handleOptionsRemove:function(e){this.itemConfig.renderConfig.options.splice(e,1)},handleAddOption:function(){this.itemConfig.renderConfig.options.push({value:"value_"+(new Date).getTime(),label:"label_"+(new Date).getTime()})},handleSelectMuliple:function(e){e?this.itemConfig.renderConfig.defaultValue?this.itemConfig.renderConfig.defaultValue=[this.itemConfig.renderConfig.defaultValue]:this.itemConfig.renderConfig.defaultValue=[]:this.itemConfig.renderConfig.defaultValue.length>0?this.itemConfig.renderConfig.defaultValue=this.itemConfig.renderConfig.defaultValue[0]:this.itemConfig.renderConfig.defaultValue=""},validateRequired:function(e){var i=this;this.validator.required=e?{required:!0,message:"".concat(this.itemConfig.label,"必须填写")}:null,this.$nextTick((function(){i.generateRule()}))},generateRule:function(){var e=this;this.itemConfig.rules=[],Object.keys(this.validator).forEach((function(i){e.validator[i]&&e.itemConfig.rules.push(e.validator[i])}))}}},s=r,f=(t("f589"),t("2877")),d=Object(f["a"])(s,n,l,!1,null,"c70c2a6e",null);i["default"]=d.exports},f589:function(e,i,t){"use strict";var n=t("ff28"),l=t.n(n);l.a},ff28:function(e,i,t){}}]);
//# sourceMappingURL=chunk-2add03be.7e955ac7.js.map