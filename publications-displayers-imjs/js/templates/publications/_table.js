((function(){this.JST||(this.JST={}),this.JST["./publications/_table"]=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){((function(){var a,c,e,f,g,h,i,j,k;b.push('<style>\n  table.table td.authors span:not(:last-child):after { content:","; display:inline-block }\n</style>\n\n<table class="table table-striped table-bordered table-condensed">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Authors</th>\n      <th>Year</th>\n      <th>Journal</th>\n      <th>Title</th>\n    </tr>\n  </thead>\n  <tbody>\n    '),this.page=((i=this.page)!=null?i:this.page=0)*3,b.push("\n    "),j=this.data;for(e=0,g=j.length;e<g;e++){c=j[e],b.push("\n      <tr>\n        <td>"),b.push(d(this.page+=1)),b.push('</td>\n        <td class="authors">\n          '),k=c.authors;for(f=0,h=k.length;f<h;f++)a=k[f],b.push("\n            <span>"),b.push(d(a.name)),b.push("</span>\n          ");b.push("\n        </td>\n        <td>"),b.push(d(c.year)),b.push("</td>\n        <td>"),b.push(d(c.journal)),b.push('</td>\n        <td>\n          <a href="http://www.ncbi.nlm.nih.gov/pubmed/'),b.push(d(c.pubMedId)),b.push('" target="_new">'),b.push(d(c.title)),b.push("</a>\n        </td>\n      </tr>\n    ")}b.push("\n  </tbody>\n</table>")})).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}})).call(this);