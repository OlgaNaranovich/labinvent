function toggleMenu() {
	var toggleMnu = document.getElementById("toggle-menu");

	if (!toggleMnu.classList.contains("on")) {
		toggleMnu.classList.add("on");
	} else
		toggleMnu.classList.remove("on");
}

$(document).ready(function() {
  $('select').niceSelect();
});


