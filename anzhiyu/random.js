var posts=["2001/12/18/lca/","2001/12/18/ans/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };