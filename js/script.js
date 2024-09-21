let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.getElementById('start-chat');
  const contactButton = document.querySelector('a[href="#book"]');

  function initChat() {
    if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
      window.myChatWidget.load({
        assistantId: '6691ac63-82ff-4d41-879d-d48d5c73d109',
        apiKey: '3b92b2d9-035c-4462-97f9-b78818db49f4',
      });
    }
  }

  chatButton.addEventListener('click', initChat);
  contactButton.addEventListener('click', initChat);

  // إضافة سكريبت الشات
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://agentivehub.com/production.bundle.min.js";
  script.onload = function() {
    if (!document.getElementById('root')) {
      const root = document.createElement('div');
      root.id = 'root';
      document.body.appendChild(root);
    }
  };
  document.head.appendChild(script);
});