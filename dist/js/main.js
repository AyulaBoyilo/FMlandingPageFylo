function validateEmail() {

  let emailString = document.querySelector('#email').value;

  if (emailString.includes('@')) {
    document.querySelector('#email').style.borderColor = '#000';
    document.querySelector('#email').innerText = '';
    return true;

  } else {
    
    if (document.querySelector('.alert')) {
      document.querySelector('.alert').remove();
    }

    document.querySelector('#email').style.borderColor = '#d37fb7';

    document.querySelector('#email').insertAdjacentHTML('afterend', '<span class="alert">Please check your email</span>');
    return false;
  }
}

function validateEmailAccess() {

  let emailString = document.querySelector('#emailAccess').value;

  if (emailString.includes('@')) {
    document.querySelector('#emailAccess').style.border = 'none';
    document.querySelector('#emailAccess').innerText = ''
    return true;

  } else {
    
    if (document.querySelector('.alert-access')) {
      document.querySelector('.alert-access').remove();
    }

    document.querySelector('#emailAccess').style.border = '1px solid #d37fb7';

    document.querySelector('#emailAccess').insertAdjacentHTML('afterend', '<span class="alert-access">Please check your email</span>');
    return false;
  }
}