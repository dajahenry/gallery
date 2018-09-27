$(document).ready(() => {


	var slides= $(".slide");
	var slideIndex = 0;
	var currentSlide = slides [slideIndex];
	
	$(slides).hide();
	$(currentSlide).show();
	$("next").on('click', () =>{
		$(currentSlide).hide();
		
	})
});
		//hide all slides

	// show the first one

	//when a user clicks "next" (function)


		//hide current slide

		//increment the slideIndex

			// here is what I think I should be doing, but it isn't working and i'm lost
		//$(".next").on('click', ( => {
		//(slideIndex+=1).show()};
		


		//  if the slide index is greater than 4...(conditional)

		if (slideIndex > 4){
			slideIndex=== [0]
		}

			//reset the slideIndex to 0

			// set the new slideIndex as the current slide

			//show the currentSlide

	//when a user clicks "previous" (function)

		//hide current slide

		//decrement the slideIndex

		//if the slide index is less than 0 (condition)

			//reset the slideIndex to 4

			// set the new slideIndex as the current slide

			//show the currentSlide
		