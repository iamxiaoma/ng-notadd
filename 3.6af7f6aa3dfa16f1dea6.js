(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Dujv:function(e,n,t){"use strict";t.d(n,"a",function(){return d}),t.d(n,"b",function(){return N}),t.d(n,"c",function(){return v});var r,a=t("mrSG"),i=t("KB5g"),o=t("lTCR"),c=t.n(o),u=t("CcnG"),l=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};!function(e){e.PUBLIC="PUBLIC",e.PRIVATE="PRIVATE"}(r||(r={}));var s,E,f,d=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.document=c()(s||(s=l(["\n    query baseIcon {\n      baseIcon {\n        categories {\n          icons {\n            id\n          }\n          name\n        }\n      }\n    }\n  "],["\n    query baseIcon {\n      baseIcon {\n        categories {\n          icons {\n            id\n          }\n          name\n        }\n      }\n    }\n  "]))),n}return Object(a.c)(n,e),n.ngInjectableDef=u.U({factory:function(){return new n(u.Y(i.b))},token:n,providedIn:"root"}),n}(i.d),N=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.document=c()(E||(E=l(["\n    query mdiIcons {\n      mdiIcons {\n        name\n      }\n    }\n  "],["\n    query mdiIcons {\n      mdiIcons {\n        name\n      }\n    }\n  "]))),n}return Object(a.c)(n,e),n.ngInjectableDef=u.U({factory:function(){return new n(u.Y(i.b))},token:n,providedIn:"root"}),n}(i.d),v=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.document=c()(f||(f=l(["\n    query widgets {\n      widgets {\n        type\n        chartData {\n          date\n          amount\n        }\n        increase\n        currentAmount\n      }\n    }\n  "],["\n    query widgets {\n      widgets {\n        type\n        chartData {\n          date\n          amount\n        }\n        increase\n        currentAmount\n      }\n    }\n  "]))),n}return Object(a.c)(n,e),n.ngInjectableDef=u.U({factory:function(){return new n(u.Y(i.b))},token:n,providedIn:"root"}),n}(i.d)},EMzn:function(e,n,t){"use strict";t.r(n);var r=t("rWdj");function a(e,n){if(!e)throw new Error(n)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=function(e,n,t){i(this,"body",void 0),i(this,"name",void 0),i(this,"locationOffset",void 0),this.body=e,this.name=n||"GraphQL request",this.locationOffset=t||{line:1,column:1},this.locationOffset.line>0||a(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||a(0,"column in locationOffset is 1-indexed and must be positive")};function c(e,n){for(var t,r=/\r\n|[\n\r]/g,a=1,i=n+1;(t=r.exec(e.body))&&t.index<n;)a+=1,i=n+1-(t.index+t[0].length);return{line:a,column:i}}function u(e,n){var t=e.locationOffset.column-1,r=l(t)+e.body,a=n.line-1,i=n.line+(e.locationOffset.line-1),o=n.column+(1===n.line?t:0),c=r.split(/\r\n|[\n\r]/g);return"".concat(e.name," (").concat(i,":").concat(o,")\n")+function(e){var n=e.filter(function(e){return void 0!==e[1]}),t=0,r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)t=Math.max(t,o.value[0].length)}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n.map(function(e){var n,r=e[1];return l(t-(n=e[0]).length)+n+r}).join("\n")}([["".concat(i-1,": "),c[a-1]],["".concat(i,": "),c[a]],["",l(o-1)+"^"],["".concat(i+1,": "),c[a+1]]])}function l(e){return Array(e+1).join(" ")}function s(e,n,t,r,a,i,o){var u=Array.isArray(n)?0!==n.length?n:void 0:n?[n]:void 0,l=t;if(!l&&u){var E=u[0];l=E&&E.loc&&E.loc.source}var f,d=r;!d&&u&&(d=u.reduce(function(e,n){return n.loc&&e.push(n.loc.start),e},[])),d&&0===d.length&&(d=void 0),r&&t?f=r.map(function(e){return c(t,e)}):u&&(f=u.reduce(function(e,n){return n.loc&&e.push(c(n.loc.source,n.loc.start)),e},[]));var N=o||i&&i.extensions;Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:f||void 0,enumerable:Boolean(f)},path:{value:a||void 0,enumerable:Boolean(a)},nodes:{value:u||void 0},source:{value:l||void 0},positions:{value:d||void 0},originalError:{value:i},extensions:{value:N||void 0,enumerable:Boolean(N)}}),i&&i.stack?Object.defineProperty(this,"stack",{value:i.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,s):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}function E(e,n,t){return new s("Syntax Error: ".concat(t),void 0,e,[n])}function f(e){for(var n=e.split(/\r\n|[\n\r]/g),t=null,r=1;r<n.length;r++){var a=n[r],i=d(a);if(i<a.length&&(null===t||i<t)&&0===(t=i))break}if(t)for(var o=1;o<n.length;o++)n[o]=n[o].slice(t);for(;n.length>0&&N(n[0]);)n.shift();for(;n.length>0&&N(n[n.length-1]);)n.pop();return n.join("\n")}function d(e){for(var n=0;n<e.length&&(" "===e[n]||"\t"===e[n]);)n++;return n}function N(e){return d(e)===e.length}function v(e,n){var t=new _(p.SOF,0,0,0,0,null);return{source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:I,lookahead:T}}function I(){return this.lastToken=this.token,this.token=this.lookahead()}function T(){var e=this.token;if(e.kind!==p.EOF)do{e=e.next||(e.next=m(this,e))}while(e.kind===p.COMMENT);return e}"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}}),s.prototype=Object.create(Error.prototype,{constructor:{value:s},name:{value:"GraphQLError"},toString:{value:function(){return function(e){var n=[];if(e.nodes){var t=!0,r=!1,a=void 0;try{for(var i,o=e.nodes[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var l=i.value;l.loc&&n.push(u(l.loc.source,c(l.loc.source,l.loc.start)))}}catch(I){r=!0,a=I}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}}else if(e.source&&e.locations){var s=e.source,E=!0,f=!1,d=void 0;try{for(var N,v=e.locations[Symbol.iterator]();!(E=(N=v.next()).done);E=!0)n.push(u(s,N.value))}catch(I){f=!0,d=I}finally{try{E||null==v.return||v.return()}finally{if(f)throw d}}}return 0===n.length?e.message:[e.message].concat(n).join("\n\n")+"\n"}(this)}}});var p=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function O(e){var n=e.value;return n?"".concat(e.kind,' "').concat(n,'"'):e.kind}var h=String.prototype.charCodeAt,A=String.prototype.slice;function _(e,n,t,r,a,i,o){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=a,this.value=o,this.prev=i,this.next=null}function k(e){return isNaN(e)?p.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function m(e,n){var t=e.source,r=t.body,a=r.length,i=function(e,t,r){for(var a=e.length,i=n.end;i<a;){var o=h.call(e,i);if(9===o||32===o||44===o||65279===o)++i;else if(10===o)++i,++r.line,r.lineStart=i;else{if(13!==o)break;10===h.call(e,i+1)?i+=2:++i,++r.line,r.lineStart=i}}return i}(r,0,e),o=e.line,c=1+i-e.lineStart;if(i>=a)return new _(p.EOF,a,a,o,c,n);var u=h.call(r,i);switch(u){case 33:return new _(p.BANG,i,i+1,o,c,n);case 35:return function(e,n,t,r,a){var i,o=e.body,c=n;do{i=h.call(o,++c)}while(null!==i&&(i>31||9===i));return new _(p.COMMENT,n,c,t,r,a,A.call(o,n+1,c))}(t,i,o,c,n);case 36:return new _(p.DOLLAR,i,i+1,o,c,n);case 38:return new _(p.AMP,i,i+1,o,c,n);case 40:return new _(p.PAREN_L,i,i+1,o,c,n);case 41:return new _(p.PAREN_R,i,i+1,o,c,n);case 46:if(46===h.call(r,i+1)&&46===h.call(r,i+2))return new _(p.SPREAD,i,i+3,o,c,n);break;case 58:return new _(p.COLON,i,i+1,o,c,n);case 61:return new _(p.EQUALS,i,i+1,o,c,n);case 64:return new _(p.AT,i,i+1,o,c,n);case 91:return new _(p.BRACKET_L,i,i+1,o,c,n);case 93:return new _(p.BRACKET_R,i,i+1,o,c,n);case 123:return new _(p.BRACE_L,i,i+1,o,c,n);case 124:return new _(p.PIPE,i,i+1,o,c,n);case 125:return new _(p.BRACE_R,i,i+1,o,c,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,n,t,r,a){for(var i=e.body,o=i.length,c=n+1,u=0;c!==o&&null!==(u=h.call(i,c))&&(95===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122);)++c;return new _(p.NAME,n,c,t,r,a,A.call(i,n,c))}(t,i,o,c,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,n,t,r,a,i){var o=e.body,c=t,u=n,l=!1;if(45===c&&(c=h.call(o,++u)),48===c){if((c=h.call(o,++u))>=48&&c<=57)throw E(e,u,"Invalid number, unexpected digit after 0: ".concat(k(c),"."))}else u=R(e,u,c),c=h.call(o,u);return 46===c&&(l=!0,c=h.call(o,++u),u=R(e,u,c),c=h.call(o,u)),69!==c&&101!==c||(l=!0,43!==(c=h.call(o,++u))&&45!==c||(c=h.call(o,++u)),u=R(e,u,c)),new _(l?p.FLOAT:p.INT,n,u,r,a,i,A.call(o,n,u))}(t,i,u,o,c,n);case 34:return 34===h.call(r,i+1)&&34===h.call(r,i+2)?function(e,n,t,r,a){for(var i=e.body,o=n+3,c=o,u=0,l="";o<i.length&&null!==(u=h.call(i,o));){if(34===u&&34===h.call(i,o+1)&&34===h.call(i,o+2))return l+=A.call(i,c,o),new _(p.BLOCK_STRING,n,o+3,t,r,a,f(l));if(u<32&&9!==u&&10!==u&&13!==u)throw E(e,o,"Invalid character within String: ".concat(k(u),"."));92===u&&34===h.call(i,o+1)&&34===h.call(i,o+2)&&34===h.call(i,o+3)?(l+=A.call(i,c,o)+'"""',c=o+=4):++o}throw E(e,o,"Unterminated string.")}(t,i,o,c,n):function(e,n,t,r,a){for(var i,o,c,u,l=e.body,s=n+1,f=s,d=0,N="";s<l.length&&null!==(d=h.call(l,s))&&10!==d&&13!==d;){if(34===d)return N+=A.call(l,f,s),new _(p.STRING,n,s+1,t,r,a,N);if(d<32&&9!==d)throw E(e,s,"Invalid character within String: ".concat(k(d),"."));if(++s,92===d){switch(N+=A.call(l,f,s-1),d=h.call(l,s)){case 34:N+='"';break;case 47:N+="/";break;case 92:N+="\\";break;case 98:N+="\b";break;case 102:N+="\f";break;case 110:N+="\n";break;case 114:N+="\r";break;case 116:N+="\t";break;case 117:var v=(i=h.call(l,s+1),o=h.call(l,s+2),c=h.call(l,s+3),u=h.call(l,s+4),y(i)<<12|y(o)<<8|y(c)<<4|y(u));if(v<0)throw E(e,s,"Invalid character escape sequence: "+"\\u".concat(l.slice(s+1,s+5),"."));N+=String.fromCharCode(v),s+=4;break;default:throw E(e,s,"Invalid character escape sequence: \\".concat(String.fromCharCode(d),"."))}f=++s}}throw E(e,s,"Unterminated string.")}(t,i,o,c,n)}throw E(t,i,function(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(k(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(k(e),".")}(u))}function R(e,n,t){var r=e.body,a=n,i=t;if(i>=48&&i<=57){do{i=h.call(r,++a)}while(i>=48&&i<=57);return a}throw E(e,a,"Invalid number, expected digit but got: ".concat(k(i),"."))}function y(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}_.prototype.toJSON=_.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}};var L=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),C=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function S(e,n){var t="string"==typeof e?new o(e):e;if(!(t instanceof o))throw new TypeError("Must provide Source. Received: ".concat(Object(r.a)(t)));return function(e){var n=e.token;return{kind:L.DOCUMENT,definitions:_e(e,p.SOF,F,p.EOF),loc:ve(e,n)}}(v(t,n||{}))}function b(e,n){var t=v("string"==typeof e?new o(e):e,n||{});Oe(t,p.SOF);var r=K(t,!1);return Oe(t,p.EOF),r}function g(e,n){var t=v("string"==typeof e?new o(e):e,n||{});Oe(t,p.SOF);var r=Z(t);return Oe(t,p.EOF),r}function D(e){var n=Oe(e,p.NAME);return{kind:L.NAME,value:n.value,loc:ve(e,n)}}function F(e){if(Te(e,p.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":case"fragment":return w(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return ne(e);case"extend":return function(e){var n=e.lookahead();if(n.kind===p.NAME)switch(n.value){case"schema":return function(e){var n=e.token;he(e,"extend"),he(e,"schema");var t=W(e,!0),r=Te(e,p.BRACE_L)?_e(e,p.BRACE_L,ae,p.BRACE_R):[];if(0===t.length&&0===r.length)throw Ae(e);return{kind:L.SCHEMA_EXTENSION,directives:t,operationTypes:r,loc:ve(e,n)}}(e);case"scalar":return function(e){var n=e.token;he(e,"extend"),he(e,"scalar");var t=D(e),r=W(e,!0);if(0===r.length)throw Ae(e);return{kind:L.SCALAR_TYPE_EXTENSION,name:t,directives:r,loc:ve(e,n)}}(e);case"type":return function(e){var n=e.token;he(e,"extend"),he(e,"type");var t=D(e),r=ie(e),a=W(e,!0),i=oe(e);if(0===r.length&&0===a.length&&0===i.length)throw Ae(e);return{kind:L.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:a,fields:i,loc:ve(e,n)}}(e);case"interface":return function(e){var n=e.token;he(e,"extend"),he(e,"interface");var t=D(e),r=W(e,!0),a=oe(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:L.INTERFACE_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:ve(e,n)}}(e);case"union":return function(e){var n=e.token;he(e,"extend"),he(e,"union");var t=D(e),r=W(e,!0),a=se(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:L.UNION_TYPE_EXTENSION,name:t,directives:r,types:a,loc:ve(e,n)}}(e);case"enum":return function(e){var n=e.token;he(e,"extend"),he(e,"enum");var t=D(e),r=W(e,!0),a=Ee(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:L.ENUM_TYPE_EXTENSION,name:t,directives:r,values:a,loc:ve(e,n)}}(e);case"input":return function(e){var n=e.token;he(e,"extend"),he(e,"input");var t=D(e),r=W(e,!0),a=de(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:L.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:ve(e,n)}}(e)}throw Ae(e,n)}(e)}else{if(Te(e,p.BRACE_L))return w(e);if(te(e))return ne(e)}throw Ae(e)}function w(e){if(Te(e,p.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return P(e);case"fragment":return function(e){var n=e.token;return he(e,"fragment"),e.options.experimentalFragmentVariables?{kind:L.FRAGMENT_DEFINITION,name:q(e),variableDefinitions:M(e),typeCondition:(he(e,"on"),ee(e)),directives:W(e,!1),selectionSet:V(e),loc:ve(e,n)}:{kind:L.FRAGMENT_DEFINITION,name:q(e),typeCondition:(he(e,"on"),ee(e)),directives:W(e,!1),selectionSet:V(e),loc:ve(e,n)}}(e)}else if(Te(e,p.BRACE_L))return P(e);throw Ae(e)}function P(e){var n=e.token;if(Te(e,p.BRACE_L))return{kind:L.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:V(e),loc:ve(e,n)};var t,r=B(e);return Te(e,p.NAME)&&(t=D(e)),{kind:L.OPERATION_DEFINITION,operation:r,name:t,variableDefinitions:M(e),directives:W(e,!1),selectionSet:V(e),loc:ve(e,n)}}function B(e){var n=Oe(e,p.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw Ae(e,n)}function M(e){return Te(e,p.PAREN_L)?_e(e,p.PAREN_L,U,p.PAREN_R):[]}function U(e){var n=e.token;return e.options.experimentalVariableDefinitionDirectives?{kind:L.VARIABLE_DEFINITION,variable:x(e),type:(Oe(e,p.COLON),Z(e)),defaultValue:pe(e,p.EQUALS)?K(e,!0):void 0,directives:W(e,!0),loc:ve(e,n)}:{kind:L.VARIABLE_DEFINITION,variable:x(e),type:(Oe(e,p.COLON),Z(e)),defaultValue:pe(e,p.EQUALS)?K(e,!0):void 0,loc:ve(e,n)}}function x(e){var n=e.token;return Oe(e,p.DOLLAR),{kind:L.VARIABLE,name:D(e),loc:ve(e,n)}}function V(e){var n=e.token;return{kind:L.SELECTION_SET,selections:_e(e,p.BRACE_L,j,p.BRACE_R),loc:ve(e,n)}}function j(e){return Te(e,p.SPREAD)?function(e){var n,t=e.token;return Oe(e,p.SPREAD),Te(e,p.NAME)&&"on"!==e.token.value?{kind:L.FRAGMENT_SPREAD,name:q(e),directives:W(e,!1),loc:ve(e,t)}:("on"===e.token.value&&(e.advance(),n=ee(e)),{kind:L.INLINE_FRAGMENT,typeCondition:n,directives:W(e,!1),selectionSet:V(e),loc:ve(e,t)})}(e):function(e){var n,t,r=e.token,a=D(e);return pe(e,p.COLON)?(n=a,t=D(e)):t=a,{kind:L.FIELD,alias:n,name:t,arguments:G(e,!1),directives:W(e,!1),selectionSet:Te(e,p.BRACE_L)?V(e):void 0,loc:ve(e,r)}}(e)}function G(e,n){var t=n?J:Y;return Te(e,p.PAREN_L)?_e(e,p.PAREN_L,t,p.PAREN_R):[]}function Y(e){var n=e.token;return{kind:L.ARGUMENT,name:D(e),value:(Oe(e,p.COLON),K(e,!1)),loc:ve(e,n)}}function J(e){var n=e.token;return{kind:L.ARGUMENT,name:D(e),value:(Oe(e,p.COLON),Q(e)),loc:ve(e,n)}}function q(e){if("on"===e.token.value)throw Ae(e);return D(e)}function K(e,n){var t=e.token;switch(t.kind){case p.BRACKET_L:return function(e,n){var t=e.token;return{kind:L.LIST,values:function(e,n,t,r){Oe(e,p.BRACKET_L);for(var a=[];!pe(e,r);)a.push(t(e));return a}(e,0,n?Q:H,p.BRACKET_R),loc:ve(e,t)}}(e,n);case p.BRACE_L:return function(e,n){var t=e.token;Oe(e,p.BRACE_L);for(var r=[];!pe(e,p.BRACE_R);)r.push(z(e,n));return{kind:L.OBJECT,fields:r,loc:ve(e,t)}}(e,n);case p.INT:return e.advance(),{kind:L.INT,value:t.value,loc:ve(e,t)};case p.FLOAT:return e.advance(),{kind:L.FLOAT,value:t.value,loc:ve(e,t)};case p.STRING:case p.BLOCK_STRING:return X(e);case p.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:L.BOOLEAN,value:"true"===t.value,loc:ve(e,t)}):"null"===t.value?(e.advance(),{kind:L.NULL,loc:ve(e,t)}):(e.advance(),{kind:L.ENUM,value:t.value,loc:ve(e,t)});case p.DOLLAR:if(!n)return x(e)}throw Ae(e)}function X(e){var n=e.token;return e.advance(),{kind:L.STRING,value:n.value,block:n.kind===p.BLOCK_STRING,loc:ve(e,n)}}function Q(e){return K(e,!0)}function H(e){return K(e,!1)}function z(e,n){var t=e.token;return{kind:L.OBJECT_FIELD,name:D(e),value:(Oe(e,p.COLON),K(e,n)),loc:ve(e,t)}}function W(e,n){for(var t=[];Te(e,p.AT);)t.push($(e,n));return t}function $(e,n){var t=e.token;return Oe(e,p.AT),{kind:L.DIRECTIVE,name:D(e),arguments:G(e,n),loc:ve(e,t)}}function Z(e){var n,t=e.token;return pe(e,p.BRACKET_L)?(n=Z(e),Oe(e,p.BRACKET_R),n={kind:L.LIST_TYPE,type:n,loc:ve(e,t)}):n=ee(e),pe(e,p.BANG)?{kind:L.NON_NULL_TYPE,type:n,loc:ve(e,t)}:n}function ee(e){var n=e.token;return{kind:L.NAMED_TYPE,name:D(e),loc:ve(e,n)}}function ne(e){var n=te(e)?e.lookahead():e.token;if(n.kind===p.NAME)switch(n.value){case"schema":return function(e){var n=e.token;he(e,"schema");var t=W(e,!0),r=_e(e,p.BRACE_L,ae,p.BRACE_R);return{kind:L.SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:ve(e,n)}}(e);case"scalar":return function(e){var n=e.token,t=re(e);he(e,"scalar");var r=D(e),a=W(e,!0);return{kind:L.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:a,loc:ve(e,n)}}(e);case"type":return function(e){var n=e.token,t=re(e);he(e,"type");var r=D(e),a=ie(e),i=W(e,!0),o=oe(e);return{kind:L.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:a,directives:i,fields:o,loc:ve(e,n)}}(e);case"interface":return function(e){var n=e.token,t=re(e);he(e,"interface");var r=D(e),a=W(e,!0),i=oe(e);return{kind:L.INTERFACE_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:ve(e,n)}}(e);case"union":return function(e){var n=e.token,t=re(e);he(e,"union");var r=D(e),a=W(e,!0),i=se(e);return{kind:L.UNION_TYPE_DEFINITION,description:t,name:r,directives:a,types:i,loc:ve(e,n)}}(e);case"enum":return function(e){var n=e.token,t=re(e);he(e,"enum");var r=D(e),a=W(e,!0),i=Ee(e);return{kind:L.ENUM_TYPE_DEFINITION,description:t,name:r,directives:a,values:i,loc:ve(e,n)}}(e);case"input":return function(e){var n=e.token,t=re(e);he(e,"input");var r=D(e),a=W(e,!0),i=de(e);return{kind:L.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:ve(e,n)}}(e);case"directive":return function(e){var n=e.token,t=re(e);he(e,"directive"),Oe(e,p.AT);var r=D(e),a=ue(e);he(e,"on");var i=function(e){pe(e,p.PIPE);var n=[];do{n.push(Ne(e))}while(pe(e,p.PIPE));return n}(e);return{kind:L.DIRECTIVE_DEFINITION,description:t,name:r,arguments:a,locations:i,loc:ve(e,n)}}(e)}throw Ae(e,n)}function te(e){return Te(e,p.STRING)||Te(e,p.BLOCK_STRING)}function re(e){if(te(e))return X(e)}function ae(e){var n=e.token,t=B(e);Oe(e,p.COLON);var r=ee(e);return{kind:L.OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:ve(e,n)}}function ie(e){var n=[];if("implements"===e.token.value){e.advance(),pe(e,p.AMP);do{n.push(ee(e))}while(pe(e,p.AMP)||e.options.allowLegacySDLImplementsInterfaces&&Te(e,p.NAME))}return n}function oe(e){return e.options.allowLegacySDLEmptyFields&&Te(e,p.BRACE_L)&&e.lookahead().kind===p.BRACE_R?(e.advance(),e.advance(),[]):Te(e,p.BRACE_L)?_e(e,p.BRACE_L,ce,p.BRACE_R):[]}function ce(e){var n=e.token,t=re(e),r=D(e),a=ue(e);Oe(e,p.COLON);var i=Z(e),o=W(e,!0);return{kind:L.FIELD_DEFINITION,description:t,name:r,arguments:a,type:i,directives:o,loc:ve(e,n)}}function ue(e){return Te(e,p.PAREN_L)?_e(e,p.PAREN_L,le,p.PAREN_R):[]}function le(e){var n=e.token,t=re(e),r=D(e);Oe(e,p.COLON);var a,i=Z(e);pe(e,p.EQUALS)&&(a=Q(e));var o=W(e,!0);return{kind:L.INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:a,directives:o,loc:ve(e,n)}}function se(e){var n=[];if(pe(e,p.EQUALS)){pe(e,p.PIPE);do{n.push(ee(e))}while(pe(e,p.PIPE))}return n}function Ee(e){return Te(e,p.BRACE_L)?_e(e,p.BRACE_L,fe,p.BRACE_R):[]}function fe(e){var n=e.token,t=re(e),r=D(e),a=W(e,!0);return{kind:L.ENUM_VALUE_DEFINITION,description:t,name:r,directives:a,loc:ve(e,n)}}function de(e){return Te(e,p.BRACE_L)?_e(e,p.BRACE_L,le,p.BRACE_R):[]}function Ne(e){var n=e.token,t=D(e);if(C.hasOwnProperty(t.value))return t;throw Ae(e,n)}function ve(e,n){if(!e.options.noLocation)return new Ie(n,e.lastToken,e.source)}function Ie(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function Te(e,n){return e.token.kind===n}function pe(e,n){var t=e.token.kind===n;return t&&e.advance(),t}function Oe(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw E(e.source,t.start,"Expected ".concat(n,", found ").concat(O(t)))}function he(e,n){var t=e.token;if(t.kind===p.NAME&&t.value===n)return e.advance(),t;throw E(e.source,t.start,'Expected "'.concat(n,'", found ').concat(O(t)))}function Ae(e,n){var t=n||e.token;return E(e.source,t.start,"Unexpected ".concat(O(t)))}function _e(e,n,t,r){Oe(e,n);for(var a=[t(e)];!pe(e,r);)a.push(t(e));return a}t.d(n,"parse",function(){return S}),t.d(n,"parseValue",function(){return b}),t.d(n,"parseType",function(){return g}),t.d(n,"parseConstValue",function(){return Q}),t.d(n,"parseTypeReference",function(){return Z}),t.d(n,"parseNamedType",function(){return ee}),Ie.prototype.toJSON=Ie.prototype.inspect=function(){return{start:this.start,end:this.end}}},lTCR:function(e,n,t){var r=t("EMzn").parse;function a(e){return e.replace(/[\s,]+/g," ").trim()}var i={},o={},c=!0,u=!1;function l(){for(var e=Array.prototype.slice.call(arguments),n=e[0],t="string"==typeof n?n:n[0],l=1;l<e.length;l++)t+=e[l]&&e[l].kind&&"Document"===e[l].kind?e[l].loc.source.body:e[l],t+=n[l];return function(e){var n=a(e);if(i[n])return i[n];var t=r(e,{experimentalFragmentVariables:u});if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=function e(n,t){var r=Object.prototype.toString.call(n);if("[object Array]"===r)return n.map(function(n){return e(n,t)});if("[object Object]"!==r)throw new Error("Unexpected input.");t&&n.loc&&delete n.loc,n.loc&&(delete n.loc.startToken,delete n.loc.endToken);var a,i,o,c=Object.keys(n);for(a in c)c.hasOwnProperty(a)&&(i=n[c[a]],"[object Object]"!==(o=Object.prototype.toString.call(i))&&"[object Array]"!==o||(n[c[a]]=e(i,!0)));return n}(t=function(e){for(var n,t={},r=[],i=0;i<e.definitions.length;i++){var u=e.definitions[i];if("FragmentDefinition"===u.kind){var l=u.name.value,s=a((n=u.loc).source.body.substring(n.start,n.end));o.hasOwnProperty(l)&&!o[l][s]?(c&&console.warn("Warning: fragment with name "+l+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),o[l][s]=!0):o.hasOwnProperty(l)||(o[l]={},o[l][s]=!0),t[s]||(t[s]=!0,r.push(u))}else r.push(u)}return e.definitions=r,e}(t),!1),i[n]=t,t}(t)}l.default=l,l.resetCaches=function(){i={},o={}},l.disableFragmentWarnings=function(){c=!1},l.enableExperimentalFragmentVariables=function(){u=!0},l.disableExperimentalFragmentVariables=function(){u=!1},e.exports=l}}]);