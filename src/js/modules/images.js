const images = () => {
  const imgPopup = document.createElement('div'),
        worksSection = document.querySelector('.works'),
        bigImg = document.createElement('img');
  
  imgPopup.classList.add('popupimg');
  worksSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImg);

  worksSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
      bigImg.style.width = '80%';
    }

    if (target && target.matches('div.popupimg')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;