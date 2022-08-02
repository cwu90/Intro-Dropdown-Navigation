'strict';

const mobileToggle = document.querySelector('.mobile-nav-toggle');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const dropdownFeature = document.querySelector('.dropdown-box-one');
const dropdownCompany = document.querySelector('.dropdown-box-two');
const sideNavbar = document.querySelector('.primary-navigation');

features.addEventListener('click', () => {
  const visiblity = dropdownFeature.getAttribute('data-visible');
  if (visiblity === 'false') {
    dropdownFeature.setAttribute('data-visible', true);
  } else {
    dropdownFeature.setAttribute('data-visible', false);
  }
});

company.addEventListener('click', () => {
  const visiblity = dropdownCompany.getAttribute('data-visible');
  if (visiblity === 'false') {
    dropdownCompany.setAttribute('data-visible', true);
  } else {
    dropdownCompany.setAttribute('data-visible', false);
  }
});

mobileToggle.addEventListener('click', () => {
  const visiblity = sideNavbar.getAttribute('data-visible');
  const icons = mobileToggle.getAttribute('aria-expanded');
  console.log(icons);
  if (visiblity === 'false' || icons === 'false') {
    sideNavbar.setAttribute('data-visible', true);
    mobileToggle.setAttribute('aria-expanded', true);
  } else {
    sideNavbar.setAttribute('data-visible', false);
    mobileToggle.setAttribute('aria-expanded', false);
  }
});
