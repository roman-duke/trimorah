import{r as t,u as R,f as F,a as L,P as O,L as S,j as e,m as $}from"./index-66aeaa02.js";function v(){const n=t.useRef(!1);return R(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function A(){const n=v(),[r,s]=t.useState(0),i=t.useCallback(()=>{n.current&&s(r+1)},[r]);return[t.useCallback(()=>F.postRender(i),[i]),r]}class J extends t.Component{getSnapshotBeforeUpdate(r){const s=this.props.childRef.current;if(s&&r.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=s.offsetHeight||0,i.width=s.offsetWidth||0,i.top=s.offsetTop,i.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function U({children:n,isPresent:r}){const s=t.useId(),i=t.useRef(null),h=t.useRef({width:0,height:0,top:0,left:0});return t.useInsertionEffect(()=>{const{width:f,height:d,top:u,left:p}=h.current;if(r||!i.current||!f||!d)return;i.current.dataset.motionPopId=s;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${d}px !important;
            top: ${u}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[r]),t.createElement(J,{isPresent:r,childRef:i,sizeRef:h},t.cloneElement(n,{ref:i}))}const E=({children:n,initial:r,isPresent:s,onExitComplete:i,custom:h,presenceAffectsLayout:f,mode:d})=>{const u=L(W),p=t.useId(),c=t.useMemo(()=>({id:p,initial:r,isPresent:s,custom:h,onExitComplete:a=>{u.set(a,!0);for(const l of u.values())if(!l)return;i&&i()},register:a=>(u.set(a,!1),()=>u.delete(a))}),f?void 0:[s]);return t.useMemo(()=>{u.forEach((a,l)=>u.set(l,!1))},[s]),t.useEffect(()=>{!s&&!u.size&&i&&i()},[s]),d==="popLayout"&&(n=t.createElement(U,{isPresent:s},n)),t.createElement(O.Provider,{value:c},n)};function W(){return new Map}function Y(n){return t.useEffect(()=>()=>n(),[])}const g=n=>n.key||"";function K(n,r){n.forEach(s=>{const i=g(s);r.set(i,s)})}function G(n){const r=[];return t.Children.forEach(n,s=>{t.isValidElement(s)&&r.push(s)}),r}const _=({children:n,custom:r,initial:s=!0,onExitComplete:i,exitBeforeEnter:h,presenceAffectsLayout:f=!0,mode:d="sync"})=>{const u=t.useContext(S).forceRender||A()[0],p=v(),c=G(n);let a=c;const l=t.useRef(new Map).current,x=t.useRef(a),j=t.useRef(new Map).current,y=t.useRef(!0);if(R(()=>{y.current=!1,K(c,j),x.current=a}),Y(()=>{y.current=!0,j.clear(),l.clear()}),y.current)return t.createElement(t.Fragment,null,a.map(o=>t.createElement(E,{key:g(o),isPresent:!0,initial:s?void 0:!1,presenceAffectsLayout:f,mode:d},o)));a=[...a];const b=x.current.map(g),M=c.map(g),k=b.length;for(let o=0;o<k;o++){const m=b[o];M.indexOf(m)===-1&&!l.has(m)&&l.set(m,void 0)}return d==="wait"&&l.size&&(a=[]),l.forEach((o,m)=>{if(M.indexOf(m)!==-1)return;const C=j.get(m);if(!C)return;const I=b.indexOf(m);let N=o;if(!N){const P=()=>{j.delete(m),l.delete(m);const T=x.current.findIndex(z=>z.key===m);if(x.current.splice(T,1),!l.size){if(x.current=c,p.current===!1)return;u(),i&&i()}};N=t.createElement(E,{key:g(C),isPresent:!1,onExitComplete:P,custom:r,presenceAffectsLayout:f,mode:d},C),l.set(m,N)}a.splice(I,0,N)}),a=a.map(o=>{const m=o.key;return l.has(m)?o:t.createElement(E,{key:g(o),isPresent:!0,presenceAffectsLayout:f,mode:d},o)}),t.createElement(t.Fragment,null,l.size?a:a.map(o=>t.cloneElement(o)))},D="/trimorah/assets/blah-ae21cfa0.jpg",H="/trimorah/assets/sarah-bbc6426a.jpg",V="/trimorah/assets/jibril-c1bc0ddb.jpg",q="/trimorah/assets/nabeel-4b6ae36d.jpg";const B={enter:n=>({x:n>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:n=>({zIndex:0,x:n<0?1e3:-1e3,opacity:0,display:"none"})},w=1e4,Q=(n,r)=>Math.abs(n)*r,X=(n,r,s)=>{if(s>=n)return s%r;{const i=Math.abs(s);return i%r==0?n:r-i%r}};function Z({children:n}){const[[r,s],i]=t.useState([0,0]),h=X(0,4,r),f=d=>{i([r+d,d])};return e.jsx(e.Fragment,{children:e.jsx(_,{initial:!1,custom:s,children:e.jsx($.div,{custom:s,variants:B,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:1}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(d,{offset:u,velocity:p})=>{const c=Q(u.x,p.x);c<-w?f(1):c>w&&f(-1)},children:n[h]},r)})})}function te(){return e.jsx("section",{className:"team-section",children:e.jsxs("div",{className:"team-container",children:[e.jsx("h1",{className:"team-header",children:"Meet our Team"}),e.jsx("p",{className:"team-intro",children:"Get to know the brilliant minds behind the groundbreaking ideas in Trimorah. Our diverse and dedicated team is united by a shared passion for pioneering solutions that merge technology with agriculture."}),e.jsx(Z,{children:[e.jsxs("figure",{className:"figure",children:[e.jsx("img",{className:"team-img",src:q}),e.jsxs("figcaption",{className:"img-title",children:[e.jsx("span",{className:"team-person",children:"Nabeel"}),e.jsxs("div",{children:[e.jsx("h3",{className:"img-title-header",children:"Co-Founder & CEO of M-Tech"}),e.jsx("p",{className:"img-title-text",children:"Meet the visionary leader steering M-Tech towards new horizons - Nabeel Abdulrauf. With a deep-rooted passion for technological innovation and a profound understanding of agriculture, Nabeel is the driving force behind our mission to revolutionize the farming landscape."}),e.jsxs("span",{className:"yoe",children:[e.jsx("span",{className:"work-experience-dur",children:"2+"})," Years of experience"]})]})]})]}),e.jsxs("figure",{className:"figure",children:[e.jsx("img",{className:"team-img",src:D}),e.jsxs("figcaption",{className:"img-title",children:[e.jsx("span",{className:"team-person",children:"Badaru Musa"}),e.jsxs("div",{children:[e.jsx("h3",{className:"img-title-header",children:"Co-Founder & CTO of M-Tech"}),e.jsx("p",{className:"img-title-text",children:"With a background in cutting-edge technologies and a keen interest in the transformative power of drones, Badaru plays a pivotal role in shaping the technological landscape of our agricultural solutions."}),e.jsxs("span",{className:"yoe",children:[e.jsx("span",{className:"work-experience-dur",children:"2+"})," Years of experience"]})]})]})]}),e.jsxs("figure",{className:"figure",children:[e.jsx("img",{className:"team-img",src:H}),e.jsxs("figcaption",{className:"img-title",children:[e.jsx("span",{className:"team-person",children:"Sarah Tanko"}),e.jsxs("div",{children:[e.jsx("h3",{className:"img-title-header",children:"Operations Manager of M-Tech"}),e.jsx("p",{className:"img-title-text",children:"With a passion for seamless execution and a keen eye for detail, Sarah plays a pivotal role in ensuring the day-to-day operations run like a well-oiled machine."}),e.jsxs("span",{className:"yoe",children:[e.jsx("span",{className:"work-experience-dur",children:"4+"})," Years of experience"]})]})]})]}),e.jsxs("figure",{className:"figure",children:[e.jsx("img",{className:"team-img",src:V}),e.jsxs("figcaption",{className:"img-title",children:[e.jsx("span",{className:"team-person",children:"Jibril"}),e.jsxs("div",{children:[e.jsx("h3",{className:"img-title-header",children:"Product Manager of M-Tech"}),e.jsx("p",{className:"img-title-text",children:"Meet Jibril Mohammed, the visionary mind behind our product strategy. As our Product Manager, Jibril brings innovation to life, shaping our offerings into groundbreaking solutions that resonate with our clients and propel us to the forefront of the industry."}),e.jsxs("span",{className:"yoe",children:[e.jsx("span",{className:"work-experience-dur",children:"5+"})," Years of experience"]})]})]})]})]})]})})}export{te as default};
