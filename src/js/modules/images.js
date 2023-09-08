const images = () => {
  const imgPopup = document.createElement('div'),
        worksSection = document.querySelector('.works'),
        bigImg = document.createElement('img');
  
  imgPopup.classList.add('popup_img');
  bigImg.classList.add('big_img');
  worksSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  bigImg.style.maxWidth = '80%';

  imgPopup.appendChild(bigImg);

  worksSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
      bigImg.classList.add('zoom_in');
    }

    if (target && target.matches('div.popup_img') || target.matches('img.big_img')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;