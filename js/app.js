
 $(document).ready(function(){
	
	$('#add').click(function(){
		
		var inp = $('#box');
		
		var i = $('input').size() + 1;
		
		$('<div id="box' + i +'"><input type="text" id="name" class="name" name="name' + i +'" placeholder="List Item '+i+'"/><img src="images/remove.png" width="32" height="32" border="0" align="top" class="add" id="remove" /> </div>').appendTo(inp);
		
		i++;
	});
	
   $("#add").on({
 "mouseover" : function() {
    this.src = 'images/checkmark.png';
  },
  "mouseout" : function() {
    this.src='images/add.png';
  }
});

	$('body').on('click','#remove',function() {
		$(this).parent('div').slideUp();

    });

	$('.clear').on('click',function() {
		$("form")[0].reset();

    });

});

