var HoganTemplate=function(){function a(a){this.text=a}function h(a){return a=String(a===null?"":a),g.test(a)?a.replace(b,"&amp;").replace(c,"&lt;").replace(d,"&gt;").replace(e,"&#39;").replace(f,"&quot;"):a}a.prototype={r:function(a,b,c){return""},v:h,render:function(b,c,d){return this.r(b,c,d)},rp:function(a,b,c,d){var e=c[a];return e?e.r(b,c,d):""},rs:function(a,b,c){var d="",e=a[a.length-1];if(!i(e))return d=c(a,b);for(var f=0;f<e.length;f++)a.push(e[f]),d+=c(a,b),a.pop();return d},s:function(a,b,c,d,e,f,g){var h;return i(a)&&a.length===0?!1:(!d&&typeof a=="function"&&(a=this.ls(a,b,c,e,f,g)),h=a===""||!!a,!d&&h&&b&&b.push(typeof a=="object"?a:b[b.length-1]),h)},d:function(a,b,c,d){var e=a.split("."),f=this.f(e[0],b,c,d),g=null;if(a==="."&&i(b[b.length-2]))return b[b.length-1];for(var h=1;h<e.length;h++)f&&typeof f=="object"&&e[h]in f?(g=f,f=f[e[h]]):f="";return d&&!f?!1:(!d&&typeof f=="function"&&(b.push(g),f=this.lv(f,b,c),b.pop()),f)},f:function(a,b,c,d){var e=!1,f=null,g=!1;for(var h=b.length-1;h>=0;h--){f=b[h];if(f&&typeof f=="object"&&a in f){e=f[a],g=!0;break}}return g?(!d&&typeof e=="function"&&(e=this.lv(e,b,c)),e):d?!1:""},ho:function(a,b,c,d,e){var f=a.call(b,d,function(a){return Hogan.compile(a,{delimiters:e}).render(b,c)}),g=Hogan.compile(f.toString(),{delimiters:e}).render(b,c);return this.b=g,!1},b:"",ls:function(a,b,c,d,e,f){var g=b[b.length-1],h=a.call(g);return a.length>0?this.ho(a,g,c,this.text.substring(d,e),f):typeof h=="function"?this.ho(h,g,c,this.text.substring(d,e),f):h},lv:function(a,b,c){var d=b[b.length-1];return Hogan.compile(a.call(d).toString()).render(d,c)}};var b=/&/g,c=/</g,d=/>/g,e=/\'/g,f=/\"/g,g=/[&<>\"\']/,i=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"};return a}(),Hogan=function(){function g(b,c){function u(){n.length>0&&(o.push(new String(n)),n="")}function v(){var b=!0;for(var c=r;c<o.length;c++){b=o[c].tag&&f[o[c].tag]<f._v||!o[c].tag&&o[c].match(a)===null;if(!b)return!1}return b}function w(a,b){u();if(a&&v())for(var c=r,d;c<o.length;c++)o[c].tag||((d=o[c+1])&&d.tag==">"&&(d.indent=o[c].toString()),o.splice(c,1));else b||o.push({tag:"\n"});p=!1,r=o.length}function x(a,b){var c="="+t,d=a.indexOf(c,b),e=h(a.substring(a.indexOf("=",b)+1,d)).split(" ");return s=e[0],t=e[1],d+c.length-1}var d=b.length,e=0,g=1,j=2,k=e,l=null,m=null,n="",o=[],p=!1,q=0,r=0,s="{{",t="}}";c&&(c=c.split(" "),s=c[0],t=c[1]);for(q=0;q<d;q++)k==e?i(s,b,q)?(--q,u(),k=g):b.charAt(q)=="\n"?w(p):n+=b.charAt(q):k==g?(q+=s.length-1,m=f[b.charAt(q+1)],l=m?b.charAt(q+1):"_v",l=="="?(q=x(b,q),k=e):(m&&q++,k=j),p=q):i(t,b,q)?(o.push({tag:l,n:h(n),otag:s,ctag:t,i:l=="/"?p-t.length:q+s.length}),n="",q+=t.length-1,k=e,l=="{"&&q++):n+=b.charAt(q);return w(p,!0),o}function h(a){return a.trim?a.trim():a.replace(/^\s*|\s*$/g,"")}function i(a,b,c){if(b.charAt(c)!=a.charAt(0))return!1;for(var d=1,e=a.length;d<e;d++)if(b.charAt(c+d)!=a.charAt(d))return!1;return!0}function j(a,b,c,d){var e=[],f=null,g=null;while(a.length>0){g=a.shift();if(g.tag=="#"||g.tag=="^"||k(g,d))c.push(g),g.nodes=j(a,g.tag,c,d),e.push(g);else{if(g.tag=="/"){if(c.length===0)throw new Error("Closing tag without opener: /"+g.n);f=c.pop();if(g.n!=f.n&&!l(g.n,f.n,d))throw new Error("Nesting error: "+f.n+" vs. "+g.n);return f.end=g.i,e}e.push(g)}}if(c.length>0)throw new Error("missing closing tag: "+c.pop().n);return e}function k(a,b){for(var c=0,d=b.length;c<d;c++)if(b[c].o==a.n)return a.tag="#",!0}function l(a,b,c){for(var d=0,e=c.length;d<e;d++)if(c[d].c==a&&c[d].o==b)return!0}function m(a,b,c){var d='i = i || "";var c = [cx];var b = i + "";var _ = this;'+p(a)+"return b;";if(c.asString)return"function(cx,p,i){"+d+";}";var e=new HoganTemplate(b);return e.r=new Function("cx","p","i",d),e}function n(a){return a.replace(e,"\\\\").replace(b,'\\"').replace(c,"\\n").replace(d,"\\r")}function o(a){return~a.indexOf(".")?"d":"f"}function p(a){var b="";for(var c=0,d=a.length;c<d;c++){var e=a[c].tag;e=="#"?b+=q(a[c].nodes,a[c].n,o(a[c].n),a[c].i,a[c].end,a[c].otag+" "+a[c].ctag):e=="^"?b+=r(a[c].nodes,a[c].n,o(a[c].n)):e=="<"||e==">"?b+=s(a[c]):e=="{"||e=="&"?b+=t(a[c].n,o(a[c].n)):e=="\n"?b+=v('"\\n"'+(a.length-1==c?"":" + i")):e=="_v"?b+=u(a[c].n,o(a[c].n)):e===undefined&&(b+=v('"'+n(a[c])+'"'))}return b}function q(a,b,c,d,e,f){return"if(_.s(_."+c+'("'+n(b)+'",c,p,1),'+"c,p,0,"+d+","+e+', "'+f+'")){'+"b += _.rs(c,p,"+'function(c,p){ var b = "";'+p(a)+"return b;});c.pop();}"+'else{b += _.b; _.b = ""};'}function r(a,b,c){return"if (!_.s(_."+c+'("'+n(b)+'",c,p,1),c,p,1,0,0,"")){'+p(a)+"};"}function s(a){return'b += _.rp("'+n(a.n)+'",c[c.length - 1],p,"'+(a.indent||"")+'");'}function t(a,b){return"b += (_."+b+'("'+n(a)+'",c,p,0));'}function u(a,b){return"b += (_.v(_."+b+'("'+n(a)+'",c,p,0)));'}function v(a){return"b += "+a+";"}var a=/\S/,b=/\"/g,c=/\n/g,d=/\r/g,e=/\\/g,f={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};return{scan:g,parse:function(a,b){return b=b||{},j(a,"",[],b.sectionTags||[])},cache:{},compile:function(a,b){b=b||{};var c=this.cache[a];return c?c:(c=m(this.parse(g(a,b.delimiters),b),a,b),this.cache[a]=c)}}}();typeof module!="undefined"&&module.exports?(module.exports=Hogan,module.exports.Template=HoganTemplate):typeof define=="function"&&define.amd?define(function(){return Hogan}):typeof exports!="undefined"&&(exports.Hogan=Hogan,exports.HoganTemplate=HoganTemplate)