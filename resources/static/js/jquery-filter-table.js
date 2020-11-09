$(document).ready(function() {
	
	// DO GET
	$.ajax({
		type : "GET",
		url : "api/competencias/all",
		success: function(result){
			$.each(result, function(i, competencia){
				
				var customerRow = '<tr>' +
									'<td>' + competencia.cod + '</td>' +
									'<td>' + competencia.descricao + '</td>' +
									'<td>' + competencia.classificacao + '</td>' +
									'<td>' + competencia.conteudo + '</td>' +
								  '</tr>';
				
				$('#customerTable tbody').append(customerRow);
				
	        });
			
			$( "#customerTable tbody tr:odd" ).addClass("info");
			$( "#customerTable tbody tr:even" ).addClass("success");
		},
		error : function(e) {
			alert("ERROR: ", e);
			console.log("ERROR: ", e);
		}
	});
	
	// do Filter on View
	$("#inputFilter").on("keyup", function() {
	    var inputValue = $(this).val().toLowerCase();
	    $("#customerTable tr").filter(function() {
	    	$(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
	    });
	});
})