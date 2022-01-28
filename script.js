
let wins = 0
$(document).ready(()=>{
   	var items = $(".ball");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.removeClass("displayed-ball");
    items.eq(random).addClass("displayed-ball");
round1()
    $('.cup-ball').click((event)=>{
    	if($($(event).children().prevObject[0].delegateTarget.children[1]).hasClass('displayed-ball')){
    	$($(event).children().prevObject[0].delegateTarget.children[0]).css('transform','translateY(-100px) rotate(180deg)')
    	++wins

	switch(wins){
		case 1:{
			round2()
			break
		}
		case 2:{
			round3()
			break
		}
		case 3:{
			round4()
			break
		}
		case 5:{
			round5()
		}
		case 6:{
			round6()
		}
		case 7:{
			round7()
			break
		}

	}
    	}else{
    	$('.cup').css('transform','translateY(-100px) rotate(180deg)')
    	}

    })
})


round1=()=>{
		$('.cup-ball').addClass('evented-block')

	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},3000)

		setTimeout(()=>{
		$('#cup-ball-2').css('transform','translate(-300px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('.cup-ball').removeClass('evented-block')
	},4000)
}

round2=()=>{
		$('.cup-ball').addClass('evented-block')

	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},2100)

		setTimeout(()=>{
		$('#cup-ball-2').css('transform','translate(-300px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('.cup-ball').removeClass('evented-block')

	},2200)
}

round3=()=>{
		$('.cup-ball').addClass('evented-block')

	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2400)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},2900)

		setTimeout(()=>{
		$('#cup-ball-2').css('transform','translate(300px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},3400)

	setTimeout(()=>{
		$('#cup-ball-2').css('transform','translate(-300px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('#cup-ball-1').css('transform','translate(300px,0px)')
				$('.cup-ball').removeClass('evented-block')

	},3400)
}
round4=()=>{
		$('.cup-ball').addClass('evented-block')

	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},2300)

		setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('#cup-ball-2').css('transform','translate(0px,0px)')
	},2500)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-300px,0px)')
		$('#cup-ball-2').css('transform','translate(-300px,0px)')
		$('#cup-ball-1').css('transform','translate(600px,0px)')
				$('.cup-ball').removeClass('evented-block')

	},2800)
}

round5=()=>{
		$('.cup-ball').addClass('evented-block')

	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},2100)

		setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('#cup-ball-2').css('transform','translate(0px,0px)')
	},2300)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
				$('.cup-ball').removeClass('evented-block')

	},2500)
}
round6=()=>{
	$('.cup-ball').addClass('evented-block')
	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2300)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},1800)

		setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('#cup-ball-2').css('transform','translate(0px,0px)')
	},1600)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},2000)

		setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(-300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
		$('.cup-ball').removeClass('evented-block')

	},2100)
}

round7=()=>{
	$('.cup-ball').addClass('evented-block')
	setTimeout(()=>{
		$('.cup').css('transform','translate(0px,0px) rotate(180deg)')

	},1000)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(600px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
	},2300)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},800)

		setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(0px,0px)')
		$('#cup-ball-2').css('transform','translate(0px,0px)')
	},900)

	setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(-600px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
	},1000)

		setTimeout(()=>{
		$('#cup-ball-1').css('transform','translate(0px,0px)')
		$('#cup-ball-3').css('transform','translate(-300px,0px)')
		$('#cup-ball-2').css('transform','translate(300px,0px)')
		$('.cup-ball').removeClass('evented-block')

	},1100)
}