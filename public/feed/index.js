!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function r(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,r){if(t){if("string"==typeof t)return e(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){o&&(t=o);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,d=!0,i=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return d=t.done,t},e:function(t){i=!0,c=t},f:function(){try{d||null==o.return||o.return()}finally{if(i)throw c}}}}var o="https://kenzap-sites.oss-ap-southeast-1.aliyuncs.com",a="66432108790002",n=function(t){for(var e=t+"=",r=decodeURIComponent(document.cookie).split(";"),o=0;o<r.length;o++){for(var a=r[o];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""},c=function(t){t=d(t);var e=parseFloat(t).toFixed(2);switch(config.price.style){case"left":e=config.price.symbol+e;break;case"right":e+=config.price.symbol}return e},d=function(t){return t=""==t?0:t},i=function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz".split("");"number"!=typeof t&&(t=Math.floor(Math.random()*e.length_));for(var r="",o=0;o<t;o++)r+=e[Math.floor(Math.random()*e.length)];return r},s=function(t){return t.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")},l=function(){window.navigator&&window.navigator.vibrate&&navigator.vibrate(20)},u=function(t){var e=document.querySelector(".kUNwHA .snackbar");e.innerHTML=t,e.classList.add("show"),setTimeout((function(){e.className=e.className.replace("show","")}),2200)},p={state:{total:0,count:0,index:0,product:{variations:[]},order:{}},resetButton:function(){p.state.total=0,p.state.count=0},refreshButton:function(){p.state.product.qty=parseInt(document.querySelector(".kUNwHA .qty").value),p.state.product.price=""==products[p.state.index].priced?parseFloat(products[p.state.index].price):parseFloat(products[p.state.index].priced),p.state.product.note=document.querySelector(".kUNwHA .kp-note textarea").value;var t,e=r(document.querySelectorAll(".kUNwHA .mdialog .kp-check input[type=checkbox]"));try{for(e.s();!(t=e.n()).done;){var o=t.value;o.checked&&(p.state.product.price+=parseFloat(o.dataset.price))}}catch(t){e.e(t)}finally{e.f()}var a,n=r(document.querySelectorAll(".kUNwHA .mdialog .kp-radio input[type=radio]"));try{for(n.s();!(a=n.n()).done;){var d=a.value;d.checked&&(p.state.product.price+=parseFloat(d.dataset.price))}}catch(t){n.e(t)}finally{n.f()}p.state.product.priceF=parseFloat(p.state.product.price*p.state.product.qty),document.querySelector(".kUNwHA .add .price").innerHTML=c(p.state.product.priceF);var i=!1;for(var s in 0==p.state.product.priceF&&(i=!0),p.state.product.variations)0==p.state.product.variations[s].allow&&(i=!0);document.querySelector(".kUNwHA .kp-add .mbtn .add").style.background="","update"==p.state.product.type&&p.state.product.qty>0&&(document.querySelector(".kUNwHA .kp-add .mbtn .cta").innerHTML="Update"),"update"==p.state.product.type&&0==p.state.product.qty&&(document.querySelector(".kUNwHA .kp-add .mbtn .cta").innerHTML="Remove",document.querySelector(".kUNwHA .kp-add .btn .add")&&(document.querySelector(".kUNwHA .kp-add .btn .add").style.background="#df1960"),i=!1),"new"==p.state.product.type&&(document.querySelector(".kUNwHA .kp-add .mbtn .cta").innerHTML="Add"),i?document.querySelector(".kUNwHA .kp-add .mbtn").classList.add("dis"):document.querySelector(".kUNwHA .kp-add .mbtn").classList.remove("dis")},refreshCheckoutButton:function(){var t=0;for(var e in p.state.order.items)t+=parseFloat(p.state.order.items[e].priceF);p.state.order.total=t,t>0?(document.querySelector("body").classList.add("cbtn"),y(1),document.querySelector(".kUNwHA .cta-btn .price").innerHTML=c(t)):(document.querySelector(".kUNwHA .cta-btn .mbtn").innerHTML="cart empty",document.querySelector("body").classList.remove("cbtn"))},addToCart:function(){p.state.order.items[p.state.product.id]=p.state.product,console.log(p.state.order.items),0==p.state.product.qty?p.removeFromCart(p.state.product.id):document.querySelector(".kUNwHA .kenzap-row[data-id='"+p.state.product.id+"'] .ctag").innerHTML=p.state.product.qty,localStorage.cart=JSON.stringify(p.state.order),p.refreshCheckoutButton()},removeFromCart:function(t){delete p.state.order.items[t],document.querySelector(".kUNwHA .kenzap-row[data-id='"+t+"'] .ctag").innerHTML="",localStorage.cart=JSON.stringify(p.state.order)},clearCart:function(){for(var t in p.state.order.items)document.querySelector(".kUNwHA .kenzap-row[data-id='"+p.state.order.items[t].id+"'] .ctag").innerHTML="";p.state.order={},p.state.order.created=Math.floor(Date.now()/1e3),p.state.order.items={},localStorage.cart=JSON.stringify(p.state.order),p.refreshCheckoutButton(),window.history.replaceState({},document.title,config.domain)}},y=function(t){switch(document.querySelector(".kUNwHA .cta-btn").style.display="flex",t){case 1:p.state.order.step=t,document.querySelector(".kUNwHA .cta-btn .mbtn").innerHTML='Cart <span class="price">s$0.00</span>';break;case 2:p.state.order.step=t,document.querySelector(".kUNwHA .cta-btn .mbtn").innerHTML="Continue";break;case 3:p.state.order.step=t,document.querySelector(".kUNwHA .cta-btn .mbtn").innerHTML="Checkout";break;case 4:p.state.order.step=t,document.querySelector(".kUNwHA .cta-btn .mbtn").innerHTML="Back to menu"}},m={state:0,last_state:0,state_prev:0,fp:0,el_id:"",direction:"",offsets:{},timer:null},v=function(){document.querySelector("body").classList.contains("kp-modal")&&(document.querySelector("body").style.height="100vh",document.querySelector("body").style.overflowY="hidden",document.querySelector(".kUNwHA .scrollable").style.height="100vh",document.querySelector(".kUNwHA .scrollable").style.overflowY="hidden",document.querySelector(".kUNwHA .mdialog-cnt").style.height=window.screen.availHeight-160+"px")},f=function(){document.querySelector(".kUNwHA .mdialog-cnt").style.display="none",document.querySelector(".kUNwHA .overlay").style.display="none",document.querySelector(".kUNwHA .scrollable").style.height="auto",document.querySelector(".kUNwHA .scrollable").style.overflowY="scroll",document.querySelector("body").style.overflowY="auto",document.querySelector("body").style.height="auto",setTimeout((function(){document.querySelector("body").classList.remove("kp-modal")}),300),document.documentElement.scrollTop=m.last_state,document.querySelector(".kUNwHA .cdialog-cnt").style.display="none",p.refreshCheckoutButton()},k=function(){var t=document.querySelector(".kUNwHA .cdialog-cnt");t.style.display="block",document.querySelector(".kUNwHA .overlay").style.display="block",document.querySelector(".kUNwHA .cta-btn").style.display="none",document.querySelector("body").classList.add("kp-modal"),v();var e='<div class="account">';e+="<h3>Last order summary</h3>",e+="<p>View last order activity and preparation status here.</p>",e+='<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_fefIZO.json"  background="transparent"  speed="1" class="lplayer" style="width: 300px; height: auto;" loop  autoplay></lottie-player>',e+="<h4>Summary</h4>",e+="<table>";var o="";try{o=JSON.parse(localStorage.lastOrder)}catch(t){}if(""==o)return e+="<p>No past orders to display.</p>",void(t.querySelector(".kUNwHA .cdialog-cnt .kp-body").innerHTML=e);var a=0;for(var n in(o=JSON.parse(localStorage.lastOrder)).items)a+=parseFloat(o.items[n].priceF),e+='<tr><td data-id="'+o.items[n].id+'" class="checkt">'+o.items[n].qty+" x "+o.items[n].title+'</td><td></td><td class="price"><strong>'+c(o.items[n].price)+"</strong></td></tr>";e+='<tr><td class="summ" colspan="3">Total <strong>'+c(a)+"</strong></td></tr>",e+="</table>",e+="</div>",t.querySelector(".kUNwHA .cdialog-cnt .kp-body").innerHTML=e;var d,i=r(function(){var t=[];try{t=JSON.parse(localStorage.orderIDs)}catch(t){}return t}());try{for(i.s();!(d=i.n()).done;){var s=d.value;console.log("orders to query"+s.id)}}catch(t){i.e(t)}finally{i.f()}},g="";document.addEventListener("DOMContentLoaded",(function(){config.moreButton&&(document.querySelector(".kUNwHA .cta-btn .mbtnMore").style.display="flex",document.querySelector(".kUNwHA .cta-btn .mbtnMore").addEventListener("click",(function(t){k()}))),h(),function(){y(1);try{var t=localStorage.cart;void 0===(t=t?JSON.parse(t):{created:Math.floor(Date.now()/1e3)}).items&&(t.items={}),t.created+3600<Math.floor(Date.now()/1e3)&&(t.items={},t.created=Math.floor(Date.now()/1e3)),p.state.order=t}catch(t){p.state.order.created=Math.floor(Date.now()/1e3),p.state.order.items={}}localStorage.idd||(localStorage.idd=i(8)+Math.floor(Date.now())),p.refreshCheckoutButton()}(),w();q((function(){console.log("processed")}),!1),document.addEventListener("scroll",A)}));var h=function(){var t=new URLSearchParams(window.location.search);g=t.get("table")?t.get("table"):""},w=function(){localStorage.sid=config.sid,function(){var t,e="",a="",n="",d=r(settings.categories.split("\n"));try{for(d.s();!(t=d.n()).done;){var i=t.value.split("|"),l=i[0].trim(),u=null==i[1]?"":i[1].trim();for(var y in console.log(u),e+='<div class="slide" data-href="'+s(l)+'"><a href="#'+s(l)+'" class=" cl">'+l+"</a></div>",products)if(products[y].id=products[y]._id,void 0!==products[y].cats&&null!=products[y].cats&&products[y].cats.includes(l)){if(products[y].img[0]||"true"==products[y].img[0]){var m=new Image;m._id=products[y]._id,m.updated=products[y].updated,function(t){t.onload=function(){document.querySelector(".kUNwHA .kenzap-row[data-id='"+t._id+"'] img").setAttribute("src",t.src)},t.src=o+"/S"+localStorage.sid+"/product-"+t._id+"-1-250.jpeg?"+t.updated}(m)}var v='<span class="tag ptag">'+c(products[y].price)+"</span>";""!=products[y].priced&&(v='<span class="ptagc">'+c(products[y].price)+'</span> <span class="tag ptag">'+c(products[y].priced)+"</span>");var f=void 0===p.state.order.items[products[y]._id]?"":p.state.order.items[products[y]._id].qty,k="";n!=l&&(k='<h2 id="'+s(n=l)+'">'+n+'</h2><p class="subnote">'+u+"</p>"),a+='            <div class="kenzap-row" data-index="'+y+'" data-id="'+products[y]._id+'">                '+k+'                <div class="info-box">                    <div class="kenzap-col-7">                        <div class="kp-content">                            <h3><span class="tag ctag">'+f+"</span>"+products[y].title+"</h3>                            <p>"+products[y].sdesc+"</p>                            "+v+'                        </div>                    </div>                    <div class="kenzap-col-5">                        <div class="kp-img">                            <img src="https://cdn.kenzap.com/loading.png" alt="'+products[y].title+'">                        </div>                    </div>                </div>                            </div>'}}}catch(t){d.e(t)}finally{d.f()}var g=document.querySelector(".kUNwHA .slideset"),h=document.querySelector(".kUNwHA .kenzap-container");""==a?h.innerHTML="Please add products and specify categories first":(g.innerHTML=e,h.innerHTML=a)}(),S(),function(){var e,a=r(document.querySelectorAll(".kUNwHA .kenzap-row"));try{for(a.s();!(e=a.n()).done;)e.value.addEventListener("click",(function(e){var a=e.currentTarget.dataset.index;p.state.index=a;var n=products[a].id,i=document.querySelector(".kUNwHA .mdialog-cnt");m.last_state=m.state,p.state.total=0,p.state.count=0,p.state.product=void 0===p.state.order.items[n]?{id:products[a].id,title:products[a].title,sdesc:products[a].sdesc,index:a,qty:0,note:"",variations:[]}:p.state.order.items[n],p.state.product.type=0==p.state.product.qty?"new":"update",document.querySelector("body").classList.add("kp-modal"),v();var s=products[a].img[0]?o+"/S"+localStorage.sid+"/product-"+products[a]._id+"-1-250.jpeg?"+products[a].updated:"https://cdn.kenzap.com/loading.png";document.querySelector(".kUNwHA .mdialog-cnt .mdialog .kp-body > h2").innerHTML=p.state.product.title,document.querySelector(".kUNwHA .mdialog-cnt .mdialog .kp-body > p").innerHTML=p.state.product.sdesc,document.querySelector(".kUNwHA .mdialog-cnt .mdialog .kp-img img").setAttribute("src",s),document.querySelector(".kUNwHA .mdialog .qty").value=p.state.count=p.state.product.qty,document.querySelector(".kUNwHA .mdialog .kp-note textarea").value=p.state.product.note;var l,u=new Image;u._id=products[a]._id,u.updated=products[a].updated,(l=u).onload=function(){document.querySelector(".kUNwHA .mdialog-cnt .mdialog .kp-img img").setAttribute("src",l.src)},l.src=o+"/S"+localStorage.sid+"/product-"+l._id+"-1-500.jpeg?"+l.updated;var y="";if(t("undefined"!==products[a].variations))for(var f in products[a].variations){var k="";for(var g in"checkbox"==products[a].variations[f].type&&(k="check"),"radio"==products[a].variations[f].type&&(k="radio"),void 0===p.state.product.variations[f]&&(p.state.product.variations[f]={title:products[a].variations[f].title,required:products[a].variations[f].required,allow:"1"!=products[a].variations[f].required}),y+="                <h3>"+products[a].variations[f].title+("1"==products[a].variations[f].required?' <span class="tag">required</span>':"")+'</h3>                <div class="kp-'+k+'">',products[a].variations[f].data){var h=!1;switch(void 0!==p.state.product.variations[f]&&void 0!==p.state.product.variations[f].list&&void 0!==p.state.product.variations[f].list["_"+g]&&(h=!0),products[a].variations[f].data[g].price=d(products[a].variations[f].data[g].price),k){case"check":y+='                            <label>                                <input type="checkbox" data-required="'+products[a].variations[f].required+'" data-indexv="'+f+'" data-index="'+g+'" data-title="'+products[a].variations[f].data[g].title+'" data-price="'+products[a].variations[f].data[g].price+'" '+(h?'checked="checked"':"")+'>                                <div class="checkbox">                                    <svg width="20px" height="20px" viewBox="0 0 20 20">                                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>                                        <polyline points="4 11 8 15 16 6"></polyline>                                    </svg>                                </div>                                <span>'+products[a].variations[f].data[g].title+'</span>                                <div class="price">+ '+c(products[a].variations[f].data[g].price)+"</div>                            </label>";break;case"radio":y+='                            <label>                                <input type="radio" data-required="'+products[a].variations[f].required+'" data-indexv="'+f+'" name="radio" data-index="'+g+'" data-title="'+products[a].variations[f].data[g].title+'" data-price="'+products[a].variations[f].data[g].price+'" '+(h?'checked="checked"':"")+" />                                <span>"+products[a].variations[f].data[g].title+'</span>                                <div class="price">+ '+c(products[a].variations[f].data[g].price)+"</div>                            </label>"}}y+="</div>"}document.querySelector(".kUNwHA .mdialog-cnt .mdialog .kp-vars").innerHTML=y,p.refreshButton(),i.style.display="block",document.querySelector(".kUNwHA .overlay").style.display="block";var w,S=r(document.querySelectorAll(".kUNwHA .mdialog .kp-check input[type=checkbox]"));try{var b=function(){var t=w.value;t.addEventListener("change",(function(){console.log("call refreshButton");var e=parseInt(t.dataset.indexv);p.state.product.variations[e].list={};var o,a=0,n=r(document.querySelectorAll(".kUNwHA .mdialog .kp-check input[type=checkbox][data-indexv='"+e+"']"));try{for(n.s();!(o=n.n()).done;){var c=o.value;"1"==t.dataset.required?a&&(p.state.product.variations[e].allow=!0):p.state.product.variations[e].allow=!0,c.checked&&(p.state.product.variations[e].list["_"+c.dataset.index]={title:c.dataset.title,price:parseFloat(c.dataset.price)},a+=1)}}catch(t){n.e(t)}finally{n.f()}p.refreshButton()}))};for(S.s();!(w=S.n()).done;)b()}catch(t){S.e(t)}finally{S.f()}var q,H=r(document.querySelectorAll(".kUNwHA .mdialog .kp-radio input[type=radio]"));try{var A=function(){var t=q.value;t.addEventListener("change",(function(){console.log("call refreshButton");var e=parseInt(t.dataset.indexv);p.state.product.variations[e].list={};var o,a=0,n=r(document.querySelectorAll(".kUNwHA .mdialog .kp-radio input[type=radio][data-indexv='"+e+"']"));try{for(n.s();!(o=n.n()).done;){var c=o.value;console.log(c.dataset.price),c.checked&&(p.state.product.variations[e].list["_"+c.dataset.index]={title:c.dataset.title,price:parseFloat(c.dataset.price)},a+=1),"1"==t.dataset.required?a&&(p.state.product.variations[e].allow=!0):p.state.product.variations[e].allow=!0}}catch(t){n.e(t)}finally{n.f()}p.refreshButton()}))};for(H.s();!(q=H.n()).done;)A()}catch(t){H.e(t)}finally{H.f()}}))}catch(t){a.e(t)}finally{a.f()}var n=document.querySelector(".kUNwHA .mdialog .qty");document.querySelector(".kUNwHA .mdialog .plus").addEventListener("click",(function(t){p.state.count<config.cart.max_addition&&(p.state.count+=1),n.value=p.state.count,p.refreshButton(),l()})),document.querySelector(".kUNwHA .mdialog .minus").addEventListener("click",(function(t){p.state.count>0&&(p.state.count-=1),n.value=p.state.count,p.refreshButton(),l()})),document.querySelector(".kUNwHA .mdialog .add").addEventListener("click",(function(t){t.currentTarget.parentNode.classList.contains("dis")?alert("Please select required fields"):(p.addToCart(),f(),u("Cart updated"),l())}))}(),function(){var t,e=r(document.querySelectorAll(".kUNwHA .slideset .slide"));try{for(e.s();!(t=e.n()).done;){var o=t.value,a=o.offsetLeft;m.offsets[o.dataset.href]=a,o.addEventListener("click",(function(t){document.documentElement.scrollTop,setTimeout((function(t){var e,o=r(document.querySelectorAll(".kUNwHA .slide"));try{for(o.s();!(e=o.n()).done;)e.value.classList.remove("active")}catch(t){o.e(t)}finally{o.f()}t.classList.add("active")}),250,this)}))}}catch(t){e.e(t)}finally{e.f()}}(),document.querySelector(".kUNwHA .cta-btn .mbtn").addEventListener("click",(function(t){if(document.querySelector("body").classList.add("kp-modal"),v(),1==p.state.order.step)return 0==p.state.order.total?void u("Cart is empty"):(b(),void y(2));if(2==p.state.order.step){if(0==p.state.order.total)return void u("Cart is empty");var e="";return e='<div class="ptable">',e+='<label for="table" style="'+(g.length>0?"display:none;":"")+'">Table number</label>',e+='<input type="number" value="'+g+'" name="table" style="'+(g.length>0?"display:none;":"")+'" autocomplete="off" class="table" size="4" pattern="" inputmode="">',e+='<label for="note">Note</label>',e+='<textarea class="note" name="note" placeholder="leave a note for a kitchen"></textarea>',e+="</div>",document.querySelector(".kUNwHA .cdialog-cnt .kp-body").innerHTML=e,document.querySelector(".kUNwHA .cdialog-cnt .ptable .table").focus(),void y(3)}if(3==p.state.order.step){var r=document.querySelector(".kUNwHA .cdialog-cnt .ptable .table").value,o=document.querySelector(".kUNwHA .cdialog-cnt .ptable .note").value;if(""==r)return void alert("Please enter table number");p.state.order.table=r,p.state.order.note=o,localStorage.cart=JSON.stringify(p.state.order),document.querySelector(".kUNwHA .cdialog-cnt").style.display="none",f();var n=config.domain;return-1==n.indexOf("checkout")&&(n+=(-1==n.indexOf("?")?"?":"&")+"checkout=1"),window.location.href="https://auth.kenzap.com/?app="+a+"&redirect="+encodeURIComponent(n),document.querySelector(".kUNwHA .overlay").style.display="block",void(document.querySelector(".kUNwHA .overlay .loader").style.display="block")}4!=p.state.order.step||f()}))},S=function(){document.querySelector(".kUNwHA .mdialog .close").addEventListener("click",(function(t){f()})),document.querySelector(".kUNwHA .cdialog .close").addEventListener("click",(function(t){document.querySelector(".kUNwHA .cdialog-cnt").style.display="none",y(1),f()})),window.addEventListener("resize",v),window.addEventListener("orientationchange",v)},b=function t(){var e=document.querySelector(".kUNwHA .cdialog-cnt");v(),e.style.display="block",document.querySelector(".kUNwHA .overlay").style.display="block";var o="<table>",a=0;for(var n in p.state.order.items)a+=parseFloat(p.state.order.items[n].priceF),o+='<tr><td data-id="'+p.state.order.items[n].id+'" class="checkt">'+p.state.order.items[n].qty+" x "+p.state.order.items[n].title+'</td><td></td><td class="price"><strong>'+c(p.state.order.items[n].price)+"</strong></td></tr>";o+='<tr><td class="summ" colspan="3">Total <strong>'+c(a)+"</strong></td></tr>",o+="</table>",e.querySelector(".kUNwHA .cdialog-cnt .kp-body").innerHTML=o;var d,i=r(e.querySelectorAll(".kUNwHA .cdialog-cnt .kp-body .checkt"));try{for(i.s();!(d=i.n()).done;){d.value.addEventListener("click",(function(e){if(confirm("Remove "+e.currentTarget.innerHTML+"?")){if(document.querySelector(".kUNwHA .kenzap-row[data-id='"+e.currentTarget.dataset.id+"'] .ctag").innerHTML="",p.removeFromCart(e.currentTarget.dataset.id),p.refreshCheckoutButton(),0==Object.keys(p.state.order.items).length)return y(1),void f();t(),y(2)}}))}}catch(t){i.e(t)}finally{i.f()}},q=function(t,e){var r=new URLSearchParams(window.location.search),o=r.get("ott")?r.get("ott"):"",c=new URLSearchParams;c.append("cmd","get_state"),c.append("app",a),c.append("ott",o),c.append("token",n("kenzap_token")),config.token=n("kenzap_token"),fetch("https://api-v1.kenzap.cloud/auth/",{method:"post",headers:{Accept:"application/json","Content-type":"application/x-www-form-urlencoded"},body:c}).then((function(t){return t.json()})).then((function(t){(r.get("checkout")?r.get("checkout"):"")&&(t.success?(t.token&&(config.token=t.token,function(t,e,r){var o="";if(r){var a=new Date;a.setTime(a.getTime()+24*r*60*60*1e3),o=";expires="+a.toUTCString()}document.cookie=t+"="+(escape(e)||"")+o+";path=/"}("kenzap_token",t.token,1),console.log("setting up token")),p.state.order.kid=t.kid,p.state.order.name=t.name,p.state.order.from=g+" - "+t.name,p.state.order.status="new",H()):alert("Oops, something went wrong. Please try checking out again."))})).catch((function(t){console.error("Error:",t)}))},H=function(){p.state.order.idd=localStorage.idd,p.state.order.sid=localStorage.sid,p.state.order.id=void 0===p.state.order.id?i(8)+Math.floor(Date.now()):p.state.order.id,localStorage.lastOrder=JSON.stringify(p.state.order),fetch("https://api-v1.kenzap.cloud/",{method:"post",headers:{Accept:"application/json","Content-type":"application/x-www-form-urlencoded",Authorization:"Bearer "+API_KEY,"Kenzap-Token":config.token,"Kenzap-Sid":localStorage.sid},body:JSON.stringify({query:{order:{type:"create",key:"ecommerce-order",sid:localStorage.sid,data:p.state.order}}})}).then((function(t){return t.json()})).then((function(t){t.success?(!function(t){var e=[];try{e=JSON.parse(localStorage.orderIDs)}catch(t){}var r=Date.now()/1e3|0,o=new Date(r),a={time:r,date:o.getFullYear()+(o.getMonth()+1)+o.getDate(),id:t};e.push(a),localStorage.orderIDs=JSON.stringify(e)}(t.order.id),function(){var t=document.querySelector(".kUNwHA .cdialog-cnt");v(),t.style.display="block",document.querySelector(".kUNwHA .overlay").style.display="block";var e="<div>";e+="<h3>Order received!</h3>",e+="<p>Thank you for your order, you can close the window or return to the menu.</p>",e+='<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_fefIZO.json"  background="transparent"  speed="1" class="lplayer" style="width: 300px; height: 300px;" loop  autoplay></lottie-player>',e+="<h4>Summary</h4>",e+="<table>";var r=0,o=JSON.parse(localStorage.lastOrder);for(var a in o.items)r+=parseFloat(o.items[a].priceF),e+='<tr><td data-id="'+o.items[a].id+'" class="checkt">'+o.items[a].qty+" x "+o.items[a].title+'</td><td></td><td class="price"><strong>'+c(o.items[a].price)+"</strong></td></tr>";e+='<tr><td class="summ" colspan="3">Total <strong>'+c(r)+"</strong></td></tr>",e+="</table>",e+="</div>",t.querySelector(".kUNwHA .cdialog-cnt .kp-body").innerHTML=e}(),p.clearCart(),y(4)):alert("Error: "+JSON.stringify(t))})).catch((function(t){console.error("Error:",t)}))},A=function(){var t=document.querySelectorAll(".kUNwHA .kenzap-row h2"),e=0,o=0;m.state=document.documentElement.scrollTop;var a,n=r(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;o=c.offsetTop-document.documentElement.scrollTop,m.direction="down",o<0&&e>o&&(o=e,m.el_id=c.id),e=o}}catch(t){n.e(t)}finally{n.f()}if(m.state_prev!=m.state&&(m.state_prev=m.state),""!=m.el_id){var d=document.querySelector(".kUNwHA .cata-sub-nav");m.timer&&clearTimeout(m.timer),m.timer=setTimeout((function(t){d.scrollTo({left:m.offsets[t],behavior:"smooth"});var e,o=r(document.querySelectorAll(".kUNwHA .slide"));try{for(o.s();!(e=o.n()).done;){e.value.classList.remove("active")}}catch(t){o.e(t)}finally{o.f()}document.querySelector(".kUNwHA [data-href='"+t+"']").classList.add("active")}),200,m.el_id)}m.el_id=""}}();
