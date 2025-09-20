// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion-item button');

accordionItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      accordionItems.forEach(b => b.nextElementSibling.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Contact Form
document.getElementById('supportForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if(name && email && message){
        document.getElementById('formMessage').textContent = "Thank you! Your message has been sent.";
        this.reset();
    } else {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
    }
});
