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

})()
