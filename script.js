

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})

            let details = [];
            const addDetails = (ev)=>{
                ev.preventDefault();  //to stop the form submitting
                let details= {
                    
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    number: document.getElementById('text').value,
                    subject: document.getElementById('subjext').value

                }
                details.push(movie);
                document.forms[0].reset(); // to clear the form for the next entries
                //document.querySelector('form').reset();
    
                //for display purposes only
                console.warn('added' , {details} );
                let pre = document.querySelector('#msg pre');
                pre.textContent = '\n' + JSON.stringify(details, '\t', 2);
    
                //saving to localStorage
                localStorage.setItem('contactDetails', JSON.stringify(details) );
            }
            document.addEventListener('DOMContentLoaded', ()=> {
                document.getElementById('btn').addEventListener('click', addDetails);
            });
    