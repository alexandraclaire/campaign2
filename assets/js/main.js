$(document).ready(function() {

	$("#wantmore").click(function() {
		$("#graph1").delay(400).animate({
			width:'80%'}, 1000);
		$("#graph2").delay(1000).animate({
			width:'70%'}, 1000);
		$("#graph3").delay(2000).animate({
			width:'12%'}, 1000);
		$("#graph4").delay(2500).animate({
			width:'90%'}, 1000);
	});
});