document.addEventListener("click",t=>{let e=document.querySelector(".wall"),i=document.querySelector(".spider");if(t.target===e){let{offsetX:l,offsetY:c}=t,n=e.clientWidth-i.clientWidth,h=e.clientHeight-i.clientHeight,a=Math.min(Math.max(l-i.clientWidth/2,0),n),d=Math.min(Math.max(c-i.clientHeight/2,0),h);i.style.top=`${d}px`,i.style.left=`${a}px`}});//# sourceMappingURL=index.d27c78c5.js.map

//# sourceMappingURL=index.d27c78c5.js.map
