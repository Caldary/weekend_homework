document.addEventListener('DOMContentLoaded', () => {
    
    const preview = document.querySelector('#review_form')
    preview.addEventListener('submit', submitReview)

    const submitReviewPost = document.querySelector('#submit_review')
    submitReviewPost.addEventListener('click', submitReviewClick)

   

});

const submitReview = function (event) {
    event.preventDefault();
    const movie_result = document.querySelector
    ('#movie_display')
    movie_result.textContent = `Movie: ${event.target.movie.value}`

    const preview_result = document.querySelector
    ('#preview_display')
    preview_result.textContent = `Preview: ${event.target.review.value}`
};

const submitReviewClick = function (event) {
    event.preventDefault();
    const resultParagraph = document.querySelector
    ('#review_post')
    resultParagraph.textContent = `review goes here`
};