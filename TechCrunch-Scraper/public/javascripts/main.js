let getArticlesBtn = document.getElementById("getArticlesBtn");
let getSavedBtn = document.getElementById("getSavedBtn");
var commentBtn;
var comment;
var saveArticle;
var parentArticle;
var id;

getArticlesBtn.addEventListener('click', () => {
    $.get('/scrape', (data) => {
            for (let i = 0; i < data.length; i++) {

                $(".articleContainer").prepend(
                    "<div class='article mx-auto'><div class='d-flex justify-content-between' data-id=" + data[i]._id.$oid + "><a class='articleLink'href=" + data[i].link + "</a>" + data[i].title + "</a><button class='saveArticle'>Save This Article</button></div><div class='commentContainer'><input type='text' id='commentInput'><button class='commentBtn'>Comment</button></div><ul class='commentList'></ul></div>"
                );

            }
        })
        .done(function () {
            console.log("Request complete");

            saveArticle = document.getElementsByClassName("saveArticle");
            commentBtn = document.getElementsByClassName("commentBtn");

            for (let i = 0; i < saveArticle.length; i++) {

                parentArticle = saveArticle[i].parentElement;
                id = parentArticle.dataset.id;
                let headline = parentArticle.firstChild.innerHTML;
                let link = parentArticle.firstChild.href;
              

                saveArticle[i].addEventListener('click', (e) => {
                    $.post('/save', {
                            data: id,
                            title: headline,
                            link: link,
                            saved: true
                        },

                        function (data) {
                            console.log("saved the article");
                        });
                });

                commentBtn[i].addEventListener('click', (e) => {

                    let parentOfComment = commentBtn[i].parentElement;
                    let parentSelector = parentOfComment.parentElement;
                    comment = parentOfComment.children[0].value;
                    commentList = parentOfComment.children[2];
                    $.post('/comment', {
                        articleId: id,
                        comment: comment
                    });
                    $(parentSelector.children[2]).append("<li>" + comment + "</li>");

                });
            };

        })
        .fail(function () {
            console.log("GET REQUEST FAILED /n CODE: 500")
            // TODO: Graceful degredation
        });
});