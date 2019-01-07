var i = 0;
	var element;
	var before_elem;
	var parent_elem;
	var inserted_elem;
	var changing_elem;
function click_menu() {
	if (i == 0) {
	element = document.createElement('div');
	element.innerHTML = '<div class = "menu_item">Русский язык</div><div class = "menu_item">Белорусский язык</div><div class = "menu_item">Математика</div><div class = "menu_item">Физика</div><div class = "menu_item">Английский язык</div><div class = "menu_item">Химия</div><div class = "menu_item">Биология</div><div class = "menu_item">Общество-<p>ведение</p></div>';
	before_elem = document.getElementsByClassName('wrapper');
	parent_elem = document.getElementById('right_article');
	element.classList.add("class_for_menu");
	element = parent_elem.insertBefore(element,before_elem[0]);
	changing_elem = document.getElementById('right_article');
	changing_elem.style.height = "1900px";
	i++;
	}
	else
	{
		parent_elem.removeChild(element);
		i = 0;
	}
}