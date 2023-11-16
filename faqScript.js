$('.card').click(function() {
    let index = $(this).index()
    let currCard = $('card').eq(index)
    let currBody = $(`.card:eq(${index}) .card-body`)
    
    // if(currBody.css('display') == 'block'){
    //     currBody.slideUp()
    // } else{
    //     $('.card-body').slideUp()
    //     currBody.slideDown
    // }
    if(currCard.hasClass('active')){
        currBody.slideUp()
    } else {
        currBody.slideDown()
    }
    currCard.toggleClass('active')
})