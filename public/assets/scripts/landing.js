(function(){

  // add 'expanded' class to goals list on click
  var expandButton = document.getElementById('expandClick');

  function addExpandedClass() {
    if (!document.getElementById('goalsList').classList.contains('expanded')) {
      document.getElementById('goalsList').classList.add('expanded');
      expandButton.innerHTML = 'Back to Home';
    }
    else {
      document.getElementById('goalsList').classList.remove('expanded');
      expandButton.innerHTML = 'See Your Goals';
    }
  };

  expandButton.addEventListener('click', addExpandedClass);

  // expand avatar into view on counter
  var counterButton = document.getElementById('counterLogo');

  function addAvatarView() {
    console.log('clicked');
    if (!document.getElementById('avatarWrap').classList.contains('avatar-expanded')) {
      document.getElementById('avatarWrap').classList.add('avatar-expanded');
    }
    document.getElementById('avatarWrap').classList.remove('avatar-expanded');
  }

  counterButton.addEventListener('click', addAvatarView);

})()
