// ── CAROUSEL ──
let current = 0;
const total = 4;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.carousel-slide');
let autoplay;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + total) % total;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
  track.style.transform = `translateX(-${current * 100}%)`;
  resetAutoplay();
}

function changeSlide(dir) {
  goToSlide(current + dir);
}

function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => changeSlide(1), 5000);
}

resetAutoplay();

// ── WHATSAPP ──
function enviarWhatsApp() {
  const nome     = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico  = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome)     { alert('Por favor, informe seu nome.');     return; }
  if (!telefone) { alert('Por favor, informe seu telefone.'); return; }

  const texto =
    `Olá! Me chamo *${nome}*.%0A` +
    (telefone ? `Telefone: ${telefone}%0A` : '') +
    (servico  ? `Serviço: ${servico}%0A`   : '') +
    (mensagem ? `Mensagem: ${mensagem}`      : 'Gostaria de solicitar um orçamento.');

  // ⚠️ Substitua pelo número real: DDI + DDD + número, sem espaços ou traços
  const numero = '5534997788553';
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}

// ── MOBILE MENU ──
function toggleMenu() {
  const links = document.querySelector('.nav-links');

  if (links.style.display === 'flex') {
    links.style.display = '';
    links.querySelectorAll('a').forEach(a => { a.style.cssText = ''; });
  } else {
    links.style.cssText =
      'display:flex; flex-direction:column; position:fixed; top:72px; left:0; right:0;' +
      'background:rgba(26,22,16,.98); padding:20px 24px 32px; gap:0;' +
      'border-top:1px solid rgba(201,168,76,.2);';
    links.querySelectorAll('a').forEach(a => {
      a.style.cssText = 'padding:14px 0; border-bottom:1px solid rgba(255,255,255,.06); display:block;';
    });
  }
}
