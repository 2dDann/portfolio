const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  const collapsed = sidebar.classList.toggle('close');
  document.body.classList.toggle('sidebar-collapsed');
  toggleButton.classList.toggle('rotated');
  
  closeAllSubMenus()
  localStorage.setItem('sidebar-collapsed', collapsed ? 'yes' : 'no');
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

window.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-btn');
  if (localStorage.getItem('sidebar-collapsed') === 'yes') {
    sidebar.classList.add('close');
    document.body.classList.add('sidebar-collapsed');
    toggleBtn.classList.add('rotated');
  }
});

