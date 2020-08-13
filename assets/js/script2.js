function dark_mode() {
    var mybody = document.getElementById("mybody")
    var mybutton = document.getElementById("mybutton")
    var myicon = document.getElementById("myicon")
    var mytext = document.getElementById("mytext")

    if (mybody.classList.contains('bg-light')) {

        mybody.classList.remove('bg-light')
        mybutton.classList.remove('btn-dark')
        myicon.classList.remove('fa-moon')
        mytext.classList.remove('text-dark')


        mybody.classList.add('bg-dark')
        mybutton.classList.add('btn-light')
        myicon.classList.add('fa-sun')
        mytext.classList.add('text-white')
    }
    else if (mybody.classList.contains('bg-dark')) {
      
        mybody.classList.add('bg-light')
        mybutton.classList.add('btn-dark')
        myicon.classList.add('fa-moon')
        mytext.classList.add('text-dark')


        mybody.classList.remove('bg-dark')
        mybutton.classList.remove('btn-light')
        myicon.classList.remove('fa-sun')
        mytext.classList.remove('text-white')

    }


}