import{a as U}from"./chunk-KOIL6KCB.js";import{a as w}from"./chunk-BHRY3UMH.js";import{e as b,f as N}from"./chunk-XVLRRE4J.js";import{Bb as S,D,Db as R,Eb as A,Ia as f,K as L,Ka as h,Ma as O,Na as r,Oa as s,Pa as T,Qa as v,Ra as p,Sa as _,Ta as P,Ua as j,Va as l,Wa as F,Xa as y,Y as k,_ as M,ab as C,bb as g,cb as x,db as $,ga as d,h as E,ha as u,ma as H,ua as V,xa as c,y as I,ya as m}from"./chunk-GUNOI2AS.js";var q=(()=>{let e=class e{constructor(t){this.el=t,this.initialColor="#f5f5f5",this.defaultColor="#009688",this.defaultHeigth=180,this.setHeigth(180),this.setBorder("#f5f5f5")}onMouseEnter(){this.setBorder(this.borderColor||this.defaultColor)}onMouseLeave(){this.setBorder(this.initialColor)}setHeigth(t){this.el.nativeElement.style.heigth=this.defaultHeigth}setBorder(t){let i="solid 4px"+t;this.el.nativeElement.style.border=i}};e.\u0275fac=function(i){return new(i||e)(m(H))},e.\u0275dir=M({type:e,selectors:[["","pkmnBorderCard",""]],hostBindings:function(i,a){i&1&&p("mouseenter",function(){return a.onMouseEnter()})("mouseleave",function(){return a.onMouseLeave()})},inputs:{borderColor:[0,"pkmnBorderCard","borderColor"]},standalone:!0});let o=e;return o})();function W(o,e){if(o&1){let n=v();r(0,"a",9),p("click",function(){let i=d(n).$implicit,a=_();return u(a.goToDetail(i))}),l(1),s()}if(o&2){let n=e.$implicit;c(),y(" ",n.name," ")}}var G=(()=>{let e=class e{constructor(t,i){this.router=t,this.pokemonService=i,this.searchTerm=new E}ngOnInit(){this.pokemons$=this.searchTerm.pipe(I(300),D(),L(t=>this.pokemonService.searchPokemonList(t)))}search(t){this.searchTerm.next(t)}goToDetail(t){let i=["/pokemon",t.id];this.router.navigate(i)}};e.\u0275fac=function(i){return new(i||e)(m(b),m(w))},e.\u0275cmp=k({type:e,selectors:[["app-search-pokemon"]],standalone:!0,features:[C],decls:10,vars:3,consts:[["searchBox",""],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],["placeholder","Rechercher un pok\xE9mon",1,"form-control","mb-2",3,"keyup"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"click"]],template:function(i,a){if(i&1){let B=v();r(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"input",6,0),p("keyup",function(){d(B);let J=j(6);return u(a.search(J.value))}),s(),r(7,"div",7),f(8,W,2,1,"a",8),g(9,"async"),s()()()()()()}i&2&&(c(8),h("ngForOf",x(9,1,a.pokemons$)))},dependencies:[S,R],encapsulation:2});let o=e;return o})();function X(o,e){if(o&1&&(r(0,"span"),g(1,"pokemonTypeColor"),l(2),s()),o&2){let n=e.$implicit;O("card-text  badge rounded-pill ",x(1,4,n),""),c(2),y(" ",n," ")}}function Y(o,e){if(o&1){let n=v();r(0,"div",6),p("click",function(){let i=d(n).$implicit,a=_();return u(a.goToPokemon(i))}),r(1,"div",7)(2,"div",8),T(3,"img",9),s(),r(4,"div",10)(5,"div",11)(6,"h5",12),l(7),s(),f(8,X,3,6,"span",13),r(9,"p",14)(10,"small",15),l(11),g(12,"date"),s()()()()()()}if(o&2){let n=e.$implicit;c(3),P("src",n.picture,V),P("alt",n.name),c(4),F(n.name),c(),h("ngForOf",n.types),c(3),F($(12,5,n.created,"dd.MM.y"))}}var me=(()=>{let e=class e{constructor(t,i){this.router=t,this.pokemonService=i}ngOnInit(){this.pokemonService.getPokemonList().subscribe(t=>this.pokemonList=t)}goToPokemon(t){this.router.navigate(["/pokemon",t.id])}};e.\u0275fac=function(i){return new(i||e)(m(b),m(w))},e.\u0275cmp=k({type:e,selectors:[["app-list-pokemon"]],standalone:!0,features:[C],decls:8,vars:1,consts:[[1,"container","mt-5"],[1,"row"],["class","shadow-lg p-3 mb-4 card col-lg-4 mt-3","pkmnBorderCard","",3,"click",4,"ngFor","ngForOf"],[1,"my-3"],["type","button",1,"btn","btn-danger"],["routerLink","/pokemon/add",1,"text-decoration-none","text-white"],["pkmnBorderCard","",1,"shadow-lg","p-3","mb-4","card","col-lg-4","mt-3",3,"click"],[1,"row","g-0","my-4"],[1,"card-img-left","col-md-4"],[1,"img-fluid","rounded-start",3,"src","alt"],[1,"col-md-6"],[1,"card-body"],[1,"card-title"],[3,"class",4,"ngFor","ngForOf"],[1,"card-text"],[1,"text-body-secondary"]],template:function(i,a){i&1&&(r(0,"div",0)(1,"div",1),T(2,"app-search-pokemon"),f(3,Y,13,8,"div",2),s(),r(4,"div",3)(5,"button",4)(6,"a",5),l(7,"Add pokemon"),s()()()()),i&2&&(c(3),h("ngForOf",a.pokemonList))},dependencies:[G,S,q,N,A,U],encapsulation:2});let o=e;return o})();export{me as ListPokemonComponent};