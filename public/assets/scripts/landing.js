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
  Array.from(document.querySelectorAll('.counter-listen')).forEach(function(n){
    n.addEventListener('click', addAvatarView);
  })



  function addAvatarView() {

    if (!document.getElementById('avatarWrap').classList.contains('avatar-down')) {
      document.getElementById('avatarWrap').classList.add('avatar-down');
    }
    else {

      document.getElementById('avatarWrap').classList.remove('avatar-down');
    }
  }

  // counterButton.addEventListener('click', addAvatarView);

})()
