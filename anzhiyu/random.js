var posts=["2001/12/18/ans/","2001/12/18/lca/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };