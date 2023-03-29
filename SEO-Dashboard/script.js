window.onload=function(){

        var coll = document.getElementsByClassName("collapsible");
		var i;
		//console.log(coll);
		for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                //console.log(coll[i]);
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                //console.log(this)
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

        var input = document.getElementById("myInput");
        input.addEventListener("keyup", function() {
            var filter, ul, li, a, i, txtValue;
            filter = this.value.toUpperCase();
            ul = document.getElementById("tools");
            li = ul.getElementsByTagName("section");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("button")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
        }
        });

        var input = document.getElementById("filterInput");
        input.addEventListener("keyup", function() {
            var filter, ul, li, a, i, txtValue;
            filter = this.value.toUpperCase();
            li = document.getElementsByClassName("setting_entry");
            console.log(li)
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("label")[0];
                console.log(a)
                txtValue = a.textContent || a.innerText;
                console.log(txtValue)
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
        }       
        });
}


    


