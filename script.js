const message = `أدري إني زعلتج وضايقتج، وأدري إنج الحين تمرين بفترة صعبة ومضغوطة من أشياء كثيرة. يمكن ما كنت أعرف شلون أتصرف بالطريقة الصح، ويمكن زدت عليج بدل ما أخفف عنج، وعشان جذي أبي أعتذر لج من كل قلبي.

والله ما يهون علي أشوفج متضايقة، ولا يهون علي أكون سبب بأي جزء من هالضيقة. وآسف على كل كلمة أو تصرف جرحج أو تعبج.

ما أبي أضغط عليج بأي شي، وأدري إنج محتاجة وقت وراحة أكثر من أي شي ثاني. بس كان مهم عندي أوصل لج اعتذاري وأقول لج إني آسف من كل قلبي.

مهما صار، تبقين شخص غالي علي وايد، وأتمنى الأيام الجاية تكون أهدى وأخف عليج.

وأوعدج إني أبذل كل جهدي عشان أصير أحسن من قبل، وأعوضج عن كل لحظة ضيقة تسببت فيها. ❤️

أحبج يا مرومه ❤️`;

const startBtn = document.getElementById('startBtn');
const intro = document.getElementById('intro');
const messageBox = document.getElementById('messageBox');
const ending = document.getElementById('ending');
const typedText = document.getElementById('typedText');
const music = document.getElementById('bgMusic');

startBtn.addEventListener('click', async () => {
  intro.classList.add('hidden');
  messageBox.classList.remove('hidden');

  try {
    music.volume = 0.45;
    await music.play();
  } catch (e) {
    console.log('Music play blocked:', e);
  }

  typeMessage();
});

function typeMessage() {
  let i = 0;
  const speed = 42;
  typedText.textContent = '';

  const typer = setInterval(() => {
    typedText.textContent += message.charAt(i);
    i++;

    if (i >= message.length) {
      clearInterval(typer);
      setTimeout(() => {
        ending.classList.remove('hidden');
      }, 1200);
    }
  }, speed);
}

function makeHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = Math.random() > 0.35 ? '❤️' : '🤍';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (18 + Math.random() * 22) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 5) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}

setInterval(makeHeart, 330);
