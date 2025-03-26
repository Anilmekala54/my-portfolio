
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset(); 
    } else {
        alert('Please fill out all fields.');
    }
});

/*toggle */
document.addEventListener('DOMContentLoaded',function(){
 let homeBtn=document.querySelector('.home-elements')
 let toggleMenu=document.querySelector('#toggle-menu')
 toggleMenu.addEventListener('click',function(){
    homeBtn.classList.toggle('hidden')
    console.log("hello");
    

 })


    
})






const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
typingText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();