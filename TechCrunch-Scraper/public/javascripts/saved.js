$.get("getSaved/getArticles", (data)=>{
    
    articleLength = data.length
    for (let i = 0; i < data.length; i++) {
        $(".savedArticleContainer").append(
            "<div class='article mx-auto'><div class='d-flex justify-content-between' id=" + data[i]._id + "><a class='articleLink'href=" + data[i].link + "</a>" + data[i].title + "</a><button class='saveArticle'>Save This Article</button></div><div class='commentContainer'><input type='text' id='commentInput'><button class='commentBtn'>Comment</button></div><ul class='commentList'></ul></div>"
        );

    }
})
.then((data)=>{
  //  let articleLength = data.length
    let commentBtn = document.querySelectorAll("button.commentBtn")
    let comments;
    let id;
   
    for (let i = 0; i < commentBtn.length; i++) {
        
        comments = data[i].comments;
        id = data[i]._id;
        let a = $("#"+ id).parent()
        let commentList = a.children(".commentList")

        commentBtn[i].addEventListener('click', (e) => {
            
            let parentOfComment = commentBtn[i].parentElement;
            let comment = parentOfComment.children[0].value;
            commentList.append("<li>"+ comment +"</li>")
     
            $.post('/comment', {
                articleId: id,
                comment: comment
            });
        
        });
        if (comments.length) {

            for (let i = 0; i < comments.length; i++) {
         
               commentList.append("<li>"+ comments[i] +"</li>")
            
            };
        }
        
    };
})

