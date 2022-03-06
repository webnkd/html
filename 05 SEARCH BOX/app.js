var btnSearch = document.querySelector('.search-box-btn')

//Su dung this va sibling de lay cac Element
//Thuộc tính parentElement sẽ trả về thẻ HTML đang chứa thẻ hiện tại
//previousElementSibling sẽ trả về thẻ HTML truoc thẻ hiện tại

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})