import{Kb as a,M as i,Nb as m,Q as h,V as l,l as s,w as n}from"./chunk-GUNOI2AS.js";var k=(()=>{let o=class o{constructor(t){this.http=t}getPokemonList(){return this.http.get("api/pokemons").pipe(i(t=>this.log(t)),n(t=>this.handleError(t,[])))}getPokemonById(t){return this.http.get(`api/pokemons/${t}`).pipe(i(e=>this.log(e)),n(e=>this.handleError(e,void 0)))}searchPokemonList(t){return t.length<=1?s([]):this.http.get(`api/pokemons/?name=${t}`).pipe(i(e=>this.log(e)),n(e=>this.handleError(e,[])))}updatePokemon(t){let e={headers:new a({"Content-Type":"application/json"})};return this.http.put("api/pokemons",t,e).pipe(i(r=>this.log(r)),n(r=>this.handleError(r,null)))}addPokemon(t){let e={headers:new a({"Content-Type":"application/json"})};return this.http.post("api/pokemons",t,e).pipe(i(r=>this.log(r)),n(r=>this.handleError(r,null)))}deletePokemonById(t){return this.http.delete(`api/pokemons/${t}`).pipe(i(e=>this.log(e)),n(e=>this.handleError(e,null)))}log(t){console.table(t)}handleError(t,e){return console.error(t),s(e)}getPokemonTypeList(){return["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","F\xE9e","Vol","Combat","Psy"]}};o.\u0275fac=function(e){return new(e||o)(l(m))},o.\u0275prov=h({token:o,factory:o.\u0275fac});let p=o;return p})();export{k as a};