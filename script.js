document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            try{
                const response = await fetch('https://formspree.io/f/xvgkpkzl', {
                    method:'POST', 
                    body: formData,
                    headers: {'Accept':'application/json'}
                });
                if (response.ok){
                    alert('Message succesfully sent, check your email');
                    form.reset();
                } else {
                    alert('Error');
                }
            } catch (error){
                alert('Error with server');
                console.error(error);
            }
    });
});