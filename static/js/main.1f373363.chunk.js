(this["webpackJsonpreactwarriors-movie-app"]=this["webpackJsonpreactwarriors-movie-app"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),o=a.n(s),i=a(6),c=a(7),l=a(9),u=a(8),m=a(10),p=a(133),d=a(151),h=a(152),v=a(134),g=a(20),f=a(42),b=a.n(f),E="https://api.themoviedb.org/3",y="5265606bb69e99437c85eb04dc6f29b5",O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){fetch(e,t).then((function(e){if(e.status<400)return e.json();throw e})).then((function(e){a(e)})).catch((function(e){e.json().then((function(e){n(e)}))}))}))},j=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=Object(g.a)({api_key:y},n);return O("".concat(E).concat(e,"?").concat(b.a.stringify(r)),{mode:"cors",headers:{"Content-type":"application/json"}})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,s=void 0===r?{}:r,o=Object(g.a)({api_key:y},n);return O("".concat(E).concat(e,"?").concat(b.a.stringify(o)),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(s)})}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,s=void 0===r?{}:r,o=Object(g.a)({api_key:y},n);return O("".concat(E).concat(e,"?").concat(b.a.stringify(o)),{method:"DELETE",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(s)})}}]),e}(),_=function(e){return function(t){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(ye.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t.props,a))}))}}]),a}(r.a.Component)},w=_(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dropdownOpen:!1},a.toggleDropdown=function(){a.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},a.handleLogOut=function(){j.delete("/authentication/session",{params:{session_id:a.props.session_id}}).then((function(){a.props.onLogOut()}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(p.a,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},r.a.createElement(d.a,{tag:"div",onClick:this.toggleDropdown,"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen},r.a.createElement("img",{width:"40",className:"rounded-circle",src:"https://secure.gravatar.com/avatar/".concat(e.avatar.gravatar.hash,'.jpg?s=64"'),alt:"avatar",onClick:this.toggleDropdown})),r.a.createElement(h.a,{right:!0},r.a.createElement(v.a,{onClick:this.handleLogOut},"\u0412\u044b\u0439\u0442\u0438")))}}]),t}(r.a.Component)),k=_(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home"))),e?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success",type:"button",onClick:this.props.toggleModal},"Login"))))}}]),t}(r.a.Component)),C=a(28),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.onChangeFilters,n=e.options;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sort_by"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"),r.a.createElement("select",{className:"form-control",id:"sort_by",name:"sort_by",value:t,onChange:a},n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))))}}]),t}(r.a.Component);M.defaultProps={options:[{label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:"popularity.desc"},{label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e",value:"popularity.asc"},{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:"vote_average.desc"},{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e",value:"vote_average.asc"}]};var N=a(66),F=function(e){var t=e.genres,a=e.onChangeGenresFilters,n=e.with_genres;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{className:"form-check",key:e.id},r.a.createElement("input",{className:"form-check-input",type:"checkbox",onChange:a,name:"with_genres",value:e.id,checked:n.includes(e.id.toString()),id:e.id}),r.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},e.name))})))};F.defaultProps={genres:[]};var S,x=(S=F,function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onChangeGenresFilters=function(t){var a=t.target.value,n=t.target.name,r=e.props.with_genres;e.props.onChangeFilters({target:{name:n,value:r.includes(a)?r.filter((function(e){return e!==a})):[].concat(Object(N.a)(r),[a])}})},e.getGenres=function(){var t="".concat(E,"/genre/movie/list?api_key=").concat(y,"&language=en-US");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({genres:t.genres})}))},e.state={genres:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getGenres()}},{key:"render",value:function(){return r.a.createElement(S,{genres:this.state.genres,onChangeGenresFilters:this.onChangeGenresFilters,with_genres:this.props.with_genres})}}]),t}(r.a.Component)),L=(new Date).getFullYear(),P=Array.from(new Array(20),(function(e,t){return L-t})),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.primary_release_year,a=e.onChangeFilters;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"primary_release_year"},"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430:"),r.a.createElement("select",{className:"form-control",id:"primary_release_year",name:"primary_release_year",value:t,onChange:a},P.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}}]),t}(r.a.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).paginationBack=function(){var e=a.props;return(0,e.onChangePagination)({name:"page",value:e.page-1})},a.paginationForward=function(){var e=a.props;return(0,e.onChangePagination)({name:"page",value:e.page+1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.total_pages;return r.a.createElement("div",null,r.a.createElement("div",{className:"btn-group btn-block",role:"group","aria-label":"Basic example"},r.a.createElement("button",{type:"button",className:"btn btn-light",disabled:1===t,onClick:this.paginationBack},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:this.paginationForward},"\u0412\u043f\u0435\u0440\u0435\u0434")),r.a.createElement("p",{className:"text-center p-3 text-center"},"".concat(t," \u0438\u0437 ").concat(a)))}}]),t}(r.a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn-group btn-block",role:"group","aria-label":"Basic example"},r.a.createElement("button",{type:"button",className:"btn btn-light btn-block",onClick:this.props.resetFilters},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b"))}}]),t}(r.a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filters,a=t.sort_by,n=t.primary_release_year,s=t.with_genres,o=e.pagination,i=o.page,c=o.total_pages,l=e.onChangePagination,u=e.resetFilters,m=e.onChangeFilters;return r.a.createElement("form",{className:"mb-3"},r.a.createElement(M,{sort_by:a,onChangeFilters:m}),r.a.createElement(W,{primary_release_year:n,onChangeFilters:m}),r.a.createElement(x,{with_genres:s,onChangeFilters:m}),r.a.createElement(D,{onChangePagination:l,total_pages:c,page:i}),r.a.createElement(I,{resetFilters:u}))}}]),t}(r.a.Component),U=a(30),A=a(139),G=a(149),q=a(135),J=a(136),T=_(function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleFavorite=function(t,a){a?(e.setState({isLoading:!0}),j.post("/account/".concat(e.props.user.id,"/favorite"),{params:{session_id:a},body:{media_type:"movie",media_id:t,favorite:!e.isFavorite()}}).then((function(){e.props.getFavoritesMovies(a)})).then((function(){e.setState({isLoading:!1})}))):e.props.toggleModal()},e.isFavorite=function(){return!!e.props.favoritesMovies&&-1!==e.props.favoritesMovies.findIndex((function(t){return t.id===e.props.id}))},e.state={isLoading:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.session_id,s=this.state.isLoading;return this.isFavorite()?r.a.createElement("div",null,r.a.createElement(G.a,{style:s?{"pointer-events":"none"}:{"pointer-events":"auto"},onClick:function(){return e.toggleFavorite(a,n)}},r.a.createElement(q.a,null))):r.a.createElement(G.a,{style:s?{"pointer-events":"none"}:{"pointer-events":"auto"},onClick:function(){return e.toggleFavorite(a,n)}},r.a.createElement(J.a,null))}}]),t}(r.a.Component)),R=a(137),$=a(138),H=_(function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleWatchlist=function(t,a){a?(e.setState({isLoading:!0}),j.post("/account/".concat(e.props.user.id,"/watchlist"),{params:{session_id:a},body:{media_type:"movie",media_id:t,watchlist:!e.isInWatchlist()}}).then((function(){e.props.getWatchlistMovies(a)})).then((function(){e.setState({isLoading:!1})}))):e.props.toggleModal()},e.isInWatchlist=function(){return!!e.props.watchlistMovies&&-1!==e.props.watchlistMovies.findIndex((function(t){return t.id===e.props.id}))},e.state={isLoading:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.session_id,s=this.state.isLoading;return this.isInWatchlist()?r.a.createElement("div",null,r.a.createElement(G.a,{style:s?{"pointer-events":"none"}:{"pointer-events":"auto"},onClick:function(){return e.toggleWatchlist(a,n)}},r.a.createElement(R.a,null))):r.a.createElement(G.a,{style:s?{"pointer-events":"none"}:{"pointer-events":"auto"},onClick:function(){return e.toggleWatchlist(a,n)}},r.a.createElement($.a,null))}}]),t}(r.a.Component)),V=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top card-img--height",src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path||t.poster_path),alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement(U.b,{className:"card-title",to:"/movie/".concat(t.id)},t.title),r.a.createElement("div",{className:"card-text"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",t.vote_average),r.a.createElement("div",{className:"card-text"},"\u0420\u0435\u043b\u0438\u0437: ",t.release_date)),r.a.createElement(A.a,null,r.a.createElement(T,{id:t.id}),r.a.createElement(H,{id:t.id})))},z=a(140),Y=a(65),K=a.n(Y),Q=function(e){var t=e.movies;return r.a.createElement("div",null,r.a.createElement("div",{className:"loader-wrapper"},0===t.length&&r.a.createElement(z.a,{color:"primary"})),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-6 mb-4"},r.a.createElement(V,{item:e}))}))))};Q.defaulProps={movies:[]};var X=function(e){return function(t){function a(){var e;return Object(i.a)(this,a),(e=Object(l.a)(this,Object(u.a)(a).call(this))).getMovies=function(t,a){var n=t.sort_by,r=t.primary_release_year,s=t.with_genres,o={sort_by:n,page:a.page,primary_release_year:r,with_genres:s,language:"ru-RU"};j.get("/discover/movie",{params:o}).then((function(t){e.setState({movies:t.results}),e.props.onChangePagination({name:"total_pages",value:t.total_pages})}))},e.state={movies:[]},e}return Object(m.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getMovies(this.props.filters,this.props.pagination)}},{key:"componentDidUpdate",value:function(e){K.a.isEqual(this.props.filters,e.filters)||(this.getMovies(this.props.filters,1),this.props.onChangePagination(1)),this.props.pagination.page!==e.pagination.page&&this.getMovies(this.props.filters,this.props.pagination)}},{key:"render",value:function(){var t=this.state.movies;return r.a.createElement(e,Object.assign({},this.props,{movies:t}))}}]),a}(r.a.Component)}(Q),Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.updateFavoritesMovies=function(t){e.setState({favoritesMovies:t})},e.updateWatchlistMovies=function(t){e.setState({watchlistMovies:t})},e.onChangeFilters=function(t){var a=t.target.name,n=t.target.value,r=Object(g.a)({},e.state.filters,Object(C.a)({},a,n));e.setState({filters:r})},e.resetFilters=function(){e.setState((function(e){return{filters:{sort_by:"popularity.desc",primary_release_year:"",with_genres:[]},pagination:{page:1,total_pages:0}}}))},e.onChangePagination=function(t){var a=t.name,n=t.value;e.setState((function(e){return{pagination:Object(g.a)({},e.pagination,Object(C.a)({},a,n))}}))},e.getFavoritesMovies=function(t){j.get("/account/".concat(e.state.user.id,"/favorite/movies"),{params:{session_id:t}}).then((function(t){e.updateFavoritesMovies(t.results)}))},e.getWatchlistMovies=function(t){j.get("/account/".concat(e.state.user.id,"/watchlist/movies"),{params:{session_id:t}}).then((function(t){e.updateWatchlistMovies(t.results)}))},e.state={favoritesMovies:null,watchlistMovies:null,showModal:!1,filters:{sort_by:"popularity.desc",primary_release_year:"",with_genres:[]},pagination:{page:1,total_pages:0}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.filters,a=e.pagination,n=e.page,s=e.total_pages;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u044b:"),r.a.createElement(B,{page:n,total_pages:s,pagination:a,filters:t,resetFilters:this.resetFilters,onChangePagination:this.onChangePagination,onChangeFilters:this.onChangeFilters})))),r.a.createElement("div",{className:"col-8"},r.a.createElement(X,{pagination:a,movies:this.state.movies,getMovies:this.getMovies,filters:this.state.filters,onChangePagination:this.onChangePagination}))))}}]),t}(r.a.Component),ee=a(31),te=a(146),ae=a(147),ne=a(153),re=a(141),se=function(e){var t=e.movie;return r.a.createElement(re.a,{responsive:!0},r.a.createElement("tbody",null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Budget"),r.a.createElement("td",null,"".concat(t.budget,"$"))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Homepage"),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(t.homepage)},"Link"))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"budget"),r.a.createElement("td",null,"".concat(t.budget,"$"))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"Original language"),r.a.createElement("td",null,"".concat(t.original_language))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"Release date"),r.a.createElement("td",null,"".concat(t.release_date))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"6"),r.a.createElement("td",null,"Revenue"),r.a.createElement("td",null,"".concat(t.revenue,"$"))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"7"),r.a.createElement("td",null,"Tagline"),r.a.createElement("td",null,"".concat(t.tagline))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"8"),r.a.createElement("td",null,"Vote average"),r.a.createElement("td",null,"".concat(t.vote_average))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"9"),r.a.createElement("td",null,"Vote count"),r.a.createElement("td",null,"".concat(t.vote_count))))))},oe=a(142),ie=a(143),ce=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.get("/movie/".concat(this.props.id,"/credits")).then((function(t){console.log(t),e.setState({data:t.cast})}))}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement(oe.a,{className:"themed-container"},r.a.createElement(ie.a,{xs:"1",sm:"2",md:"4"},e&&e.map((function(e){return e.profile_path&&r.a.createElement("img",{className:"actor-avatar",src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:""})}))))}}]),t}(r.a.Component),le=a(144),ue=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={keys:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.get("/movie/".concat(this.props.id,"/videos")).then((function(t){var a=t.results.map((function(e){return e.key}));e.setState({keys:a})}))}},{key:"render",value:function(){return r.a.createElement(ie.a,null,this.state.keys&&this.state.keys.map((function(e){return console.log("test"),r.a.createElement(le.a,{sm:{size:"auto"}},r.a.createElement("iframe",{id:"ytplayer",type:"text/html",width:"320",height:"180",src:"https://www.youtube.com/embed/".concat(e),frameBorder:"0",allowFullScreen:!0}))})))}}]),t}(r.a.Component),me=a(145),pe=function(e){var t=e.movie;return r.a.createElement(me.a,{className:"media-film-card"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{object:!0,className:"media-film-card__img",src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path||t.poster_path),alt:""}),r.a.createElement(me.a,{body:!0,className:"media-film-card__body"},r.a.createElement(me.a,{heading:!0,className:"media-film-card__heading"},t.title),t.overview)))},de=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.get("/movie/".concat(this.props.match.params.id)).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this,t=this.props.match.url;return r.a.createElement("div",{className:"movie-page"},r.a.createElement(pe,{movie:this.state.data}),r.a.createElement(te.a,{tabs:!0},r.a.createElement(ae.a,null,r.a.createElement(U.c,{to:"".concat(t,"/details"),className:"link"},"details")),r.a.createElement(ae.a,null,r.a.createElement(U.c,{to:"".concat(t,"/videos"),className:"link"},"videos")),r.a.createElement(ae.a,null,r.a.createElement(U.c,{to:"".concat(t,"/credits"),className:"link"},"credits"))),r.a.createElement(ne.a,{activeTab:1},r.a.createElement(ee.c,null,r.a.createElement(ee.a,{path:"".concat(t,"/details"),render:function(t){return r.a.createElement(se,Object.assign({movie:e.state.data},t,{isActive:!0}))}}),r.a.createElement(ee.a,{path:"".concat(t,"/videos/"),render:function(t){return r.a.createElement(ue,Object.assign({id:e.props.match.params.id},t,{isActive:!0}))}}),r.a.createElement(ee.a,{path:"".concat(t,"/credits"),render:function(t){return r.a.createElement(ce,Object.assign({id:e.props.match.params.id},t,{isActive:!0}))}}))))}}]),t}(r.a.Component),he=a(67),ve=a(150),ge=a(148),fe=_(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{},submitting:!1},a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(C.a)({},t,n))},a.handleBlur=function(e){var t=a.validateFields(),n=e.target.name;t[n]&&a.setState((function(e){return{errors:Object(g.a)({},e.errors,Object(C.a)({},n,t[n]))}}))},a.validateFields=function(){var e={};return""===a.state.username&&(e.username="Not empty"),""===a.state.password&&(e.password="Not empty"),e},a.onSubmit=function(){a.setState({submitting:!0}),j.get("/authentication/token/new").then((function(e){return j.post("/authentication/token/validate_with_login",{params:{username:a.state.username,password:a.state.password,request_token:e.request_token}})})).then((function(e){return j.post("/authentication/session/new",{params:{request_token:e.request_token}})})).then((function(e){return a.props.updateSessionId(e.session_id),j.get("/account",{params:{session_id:e.session_id}})})).then((function(e){a.setState({submitting:!1},(function(){a.props.updateUser(e)}))})).catch((function(e){console.log("error",e),a.setState({submitting:!1,errors:{base:e.status_message}})}))},a.onLogin=function(e){e.preventDefault();var t=a.validateFields();Object.keys(t).length>0?a.setState((function(e){return{errors:Object(g.a)({},e.errors,{},t)}})):a.onSubmit()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.errors,s=e.submitting;return r.a.createElement("div",{className:"form-login-container"},r.a.createElement("form",{className:"form-login"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),r.a.createElement("input",{type:"text",className:n.username?"form-control is-invalid":"form-control",id:"username",placeholder:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",name:"username",value:t,onChange:this.onChange,onBlur:this.handleBlur}),n.username&&r.a.createElement("div",{className:"invalid-feedback"},n.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",className:n.password?"form-control is-invalid":"form-control",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",value:a,onChange:this.onChange,onBlur:this.handleBlur}),n.password&&r.a.createElement("div",{className:"invalid-feedback"},n.password)),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block",onClick:this.onLogin,disabled:s},"\u0412\u0445\u043e\u0434"),n.base&&r.a.createElement("div",{className:"invalid-feedback text-center"},n.base)))}}]),t}(r.a.Component)),be=_(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve.a,{isOpen:this.props.showModal,toggle:this.props.toggleModal},r.a.createElement(ge.a,null,r.a.createElement(fe,{updateUser:this.props.updateUser,updateSessionId:this.props.updateSessionId}))))}}]),t}(r.a.Component)),Ee=new he.a,ye=r.a.createContext(),Oe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.updateUser=function(t){e.setState({user:t})},e.updateSessionId=function(t){Ee.set("session_id",t,{path:"/",maxAge:2592e3}),e.setState({session_id:t})},e.updateFavoritesMovies=function(t){e.setState({favoritesMovies:t})},e.updateWatchlistMovies=function(t){e.setState({watchlistMovies:t})},e.onLogOut=function(){Ee.remove("session_id"),e.setState({session_id:null,user:null})},e.getFavoritesMovies=function(t){j.get("/account/".concat(e.state.user.id,"/favorite/movies"),{params:{session_id:t}}).then((function(t){e.updateFavoritesMovies(t.results)}))},e.getWatchlistMovies=function(t){j.get("/account/".concat(e.state.user.id,"/watchlist/movies"),{params:{session_id:t}}).then((function(t){e.updateWatchlistMovies(t.results)}))},e.state={user:null,favoritesMovies:null,watchlistMovies:null,session_id:null,showModal:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Ee.get("session_id");t&&j.get("/account",{params:{session_id:t}}).then((function(a){e.updateUser(a),e.updateSessionId(t)})).then((function(){e.getFavoritesMovies(t)})).then((function(){e.getWatchlistMovies(t)}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.session_id,n=e.showModal,s=e.favoritesMovies,o=e.watchlistMovies;return r.a.createElement(U.a,null,r.a.createElement(ye.Provider,{value:{user:t,favoritesMovies:s,watchlistMovies:o,session_id:a,showModal:n,toggleModal:this.toggleModal,updateUser:this.updateUser,updateSessionId:this.updateSessionId,onLogOut:this.onLogOut,getFavoritesMovies:this.getFavoritesMovies,getWatchlistMovies:this.getWatchlistMovies}},r.a.createElement("div",null,this.state.showModal&&r.a.createElement(be,{isOpen:this.state.showModal,toggle:this.toggleModal}),r.a.createElement(k,null),r.a.createElement(ee.a,{path:"/",exact:!0,component:Z}),r.a.createElement(ee.a,{path:"/movie/:id",component:de}))))}}]),t}(r.a.Component);a(118),a(119);o.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},71:function(e,t,a){e.exports=a(120)}},[[71,1,2]]]);
//# sourceMappingURL=main.1f373363.chunk.js.map