$(document).ready(function(){

	getData('weekly')
});

function greet() {
	console.log("Hello, World!");
}

function getTrackerData(cat){
    addActiveClass(cat);
    getData(cat);
 }


 function getData(cat){
    $.ajax({
        url: "data.json",
        method:'GET',
        dataType:'json',
        success: function(res){
		
			$('.work .hrs-count p').eq(0).html(res[0].timeframes[cat].current + 'hrs' );
			$('.work .hrs-count p').eq(1).html('Previous - ' + res[0].timeframes[cat].previous + 'hrs' );
			
			$('.play .hrs-count p').eq(0).html(res[1].timeframes[cat].current + 'hrs' );
			$('.play .hrs-count p').eq(1).html('Previous - ' + res[1].timeframes[cat].previous + 'hrs' );
			
			
			$('.study .hrs-count p').eq(0).html(res[2].timeframes[cat].current + 'hrs' );
			$('.study .hrs-count p').eq(1).html('Previous - ' + res[2].timeframes[cat].previous + 'hrs' );
			
			
			$('.exersice .hrs-count p').eq(0).html(res[3].timeframes[cat].current + 'hrs' );
			$('.exersice .hrs-count p').eq(1).html('Previous - ' + res[3].timeframes[cat].previous + 'hrs' );
			
			$('.social .hrs-count p').eq(0).html(res[4].timeframes[cat].current + 'hrs' );
			$('.social .hrs-count p').eq(1).html('Previous - ' + res[4].timeframes[cat].previous + 'hrs' );
			
			$('.self-care .hrs-count p').eq(0).html(res[5].timeframes[cat].current + 'hrs' );
			$('.self-care .hrs-count p').eq(1).html('Previous - ' + res[5].timeframes[cat].previous + 'hrs' );
			

        }
      });

 }
 



function addActiveClass(menulink){

    $('.time-sp').removeClass('active');
    $('.' + menulink).addClass('active');

}

