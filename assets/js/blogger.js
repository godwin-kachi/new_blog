window.addEventListener('load', ()=>{
    const pageOne = document.querySelector('#article_one');
    const pageTwo = document.querySelector('#article_two');

    pageOne.style.display = 'none'

    const read_more = document.getElementById('readmore')
    const readmore = document.getElementById('redmore')
    const pageLoad = document.querySelector('.body__section')

    
    read_more.addEventListener('click', ()=>{
        const loader = document.querySelector('.loader')
        pageLoad.style.opacity = '0.4';
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            pageOne.style.display = 'block';
            pageLoad.style.display = 'none'
        }, 5000);
    })


    readmore.addEventListener('click', (e)=>{
        e.preventDefault()
        const loader = document.querySelector('.loader')
        pageLoad.style.opacity = '0.4';
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            pageTwo.style.display = 'block';
            pageLoad.style.display = 'none'
        }, 5000);
    })
})



