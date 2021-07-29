console.log('hello!');

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

function profileHeaderOnclick() {
  var profileHeaderButton = document.getElementById(
    'UI_Mixins__TooltipMixin_16'
  );
  var profileContainer = document.getElementsByClassName('UserActionsMenu')[0];
  var isOpen = !(profileHeaderButton.ariaExpanded === 'true');

  profileHeaderButton.ariaExpanded = isOpen;

  profileHeaderButton.setAttribute('popupactive', isOpen);

  profileContainer.style.visibility = isOpen ? 'visible' : 'hidden';
}
