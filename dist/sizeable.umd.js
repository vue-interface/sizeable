(function(n,t){typeof exports=="object"&&typeof module!="undefined"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(n=typeof globalThis!="undefined"?globalThis:n||self,t(n.Sizeable={}))})(this,function(n){"use strict";/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var i,a=1,s=arguments.length;a<s;a++){i=arguments[a];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(e[f]=i[f])}return e},t.apply(this,arguments)};function p(r){return r.toLowerCase()}var h=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],v=/[^A-Z0-9]+/gi;function m(r,e){e===void 0&&(e={});for(var i=e.splitRegexp,a=i===void 0?h:i,s=e.stripRegexp,f=s===void 0?v:s,c=e.transform,x=c===void 0?p:c,g=e.delimiter,P=g===void 0?" ":g,l=d(d(r,a,"$1\0$2"),f,"\0"),u=0,o=l.length;l.charAt(u)==="\0";)u++;for(;l.charAt(o-1)==="\0";)o--;return l.slice(u,o).split("\0").map(x).join(P)}function d(r,e,i){return e instanceof RegExp?r.replace(e,i):e.reduce(function(a,s){return a.replace(s,i)},r)}function z(r,e){return e===void 0&&(e={}),m(r,t({delimiter:"."},e))}function _(r,e){return e===void 0&&(e={}),z(r,t({delimiter:"-"},e))}var b={props:{size:String,sizePrefix:{type:String,default(){return this.$options.name}}},computed:{sizeableClassPrefix(){return this.sizePrefix&&_(this.sizePrefix.toLowerCase())},sizeableClass(){return!this.size||!this.sizeableClassPrefix?"":`${this.sizeableClassPrefix}-${this.size}`}}};n.Sizeable=b,Object.defineProperty(n,"__esModule",{value:!0}),n[Symbol.toStringTag]="Module"});
