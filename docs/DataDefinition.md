#   Data definition

##  Form

| 参数  | 说明  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| labelWidth  | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。  | string/number  | —  | —  |
| labelPosition  | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width  | string  | right/left/top  | right  |
| size  | 用于控制该表单内组件的尺寸  | String  | medium / small / mini  | —  |

##  Form Items

- 配置主参

| 参数  | 说明  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| key  | 字段标识(<span style="color: red">必填字段</span>)  | String  | —  | —  |
| type  | 表单项渲染类型(<span style="color: red">必填字段</span>)  | String  | input / select / radio / textarea / multiselect / checkbox / textlist / treetable / form  | input  |
| label  | 字段显示内容，可以为空  | String  | —  | —  |
| require  | 是否必填  | Boolean  | true / false  | false  |
| rules  | 表单元素验证规则  | object/array  | —  | [] |
| renderConfig  | 更多渲染配置参数  | object  | —  | —  |

- 配置主参：type

|type|subtype|说明|值类型|
|:----    |:-------    |------      |---|
|input    |text/ password / number     |    输入类型：文本（默认为文本） | String/number |
|textarea |--   |    多行文本框 | String |
|select |--    |   下拉框单选(默认)  | String |
|multiselect |--    |   下拉框多选  | Array |
|radio |--    |   单选框  | String / Boolean |
|checkbox |--    |   多选框  | Array |
|textlist |--    |   多行文本输入框  | Array |
|treetable |--    |   树表格数据  | Array |
|form |--    |   表单类型  | Object |

- 配置主参：rules

备注：require为true时需要配置rules项

| 参数  | 说明  | 类型  | 可选值 | 默认值  |
| ---- | ---- | ---- | ---- | ---- |
| type  | 数据类型  | String | 'date'/'array'/... | - |
| min  | 最小输入校验  | Number  | - | - |
| max  | 最大输入检验  | Number  | - | - |
| required  | 非空校验  | Boolean  | true | true  |
| message  | 提示信息  | String  | - | "数据不能为空" |
| trigger  | 触发方式  | String  | change / blur | - |