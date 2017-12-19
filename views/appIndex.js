var form = document.getElementById('searchRecipe');
form.addEventListener('submit', function(e) {
//prevent reset
	e.preventDefault();
  var titleKeyword = document.getElementById('one');
  		var itemContent = titleKeyword.value;
  			console.log(itemContent);
      }
