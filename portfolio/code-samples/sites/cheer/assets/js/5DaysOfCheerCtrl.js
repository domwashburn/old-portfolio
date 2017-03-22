var date = new Date();
var month = date.getMonth() + 1;
var testMonth = month;
var today = date.getDate();
var ary = [];
var promoItem = document.getElementsByClassName('promoItem');
var promoTags = document.getElementsByClassName('promoImage');
var promoCode = document.getElementsByClassName('promoCode');
var promoContainer = document.getElementsByClassName('promoContainer');
var inactiveMessage = document.getElementsByClassName('inactiveMessage');
var allLegal;
var legalContainer;
var legal;
var promoLegal = document.getElementById('legal');
var showHideTrigger = document.getElementById('showHide');
var promoDates = [today-2, today-1, today, today+1, today+2];
//var promoDates = [17, 18, 19, 20, 21];
var promoDate;
var promoCodes;
var validDates;
var validDate;
var isValid;

var theDateTest = function theDateTest( isValid ) {
	isValid = theMonth( isValid );
	validDates = isValid;
	if( isValid ) {
		thePromo( validDates );
	}
	allLegal = document.getElementById('allLegal').offsetHeight;
		legalContainer = document.getElementById('legalContainer');
			showHide(legalContainer, allLegal);
	
}

function theMonth( isValid ) {
	if( month <= testMonth ) {
		isValid = theDate( isValid );
		//console.log( isValid );	
		return isValid;
	}
}

function theDate( isValid ) {
	validDates = {};
	for ( i = 0; i <= 4; i++ ) {
		if( today >= promoDates[i] ){
			validDates[i] = true;
			ary.push(validDates);
		} else {
			validDates[i] = false;
			ary.push(validDates);
		}
	};
	isValid = validDates;
	return isValid;
}

function thePromo( validDates ) {
	var promoLength = Object.keys(validDates).length - 	1;

	for ( i = 0; i <= promoLength; i++) {
		
		if( validDates[i] ) {
			//document.write('<h3>'+ Object.keys(validDates)[i] + ' : ' + validDates[i]  +'</h3>');
			addActiveClass();
			changeLegal();
			addPromoCode();
			//console.log( promoCode[i] )
			revealPromo();
		} else if ( validDates[i] != true ) {
			//document.write('<h3>'+ Object.keys(validDates)[i] + ' : ' + validDates[i]  +'</h3>');
			addInactiveClass();
			showInactiveMessage();
		}
	};
}

function addActiveClass() {
	promoItem[i].classList.add('active');
}

function changeLegal() {
	var legal = [
		'*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Holiday Photo Cards with offer code "CIDER30". Certain exclusions apply: any products outside the \'Holiday Photo Cards\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />',
		'*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Holiday Photo Cards with offer code "CIDER30". Certain exclusions apply: any products outside the \'Holiday Photo Cards\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive 30% off all stamps with offer code "FROSTY14."  Standard retail price of stamp must be $40 or more.  Embossers, stamp refills and alignment tools not included. This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />',
		'*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Holiday Photo Cards with offer code "CIDER30". Certain exclusions apply: any products outside the \'Holiday Photo Cards\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive 30% off all stamps with offer code "FROSTY14."  Standard retail price of stamp must be $40 or more.  Embossers, stamp refills and alignment tools not included. This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive one free set of 120 address labels with the purchase of any holiday photo cards with  offer code "PUMPKIN14." Certain exclusions apply: any products outside the \'Holiday Photo Cards\' or \'Holiday Address Labels\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />',
		'*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Holiday Photo Cards with offer code "CIDER30". Certain exclusions apply: any products outside the \'Holiday Photo Cards\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive 30% off all stamps with offer code "FROSTY14."  Standard retail price of stamp must be $40 or more.  Embossers, stamp refills and alignment tools not included. This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive one free set of 120 address labels with the purchase of any holiday photo cards with  offer code "PUMPKIN14." Certain exclusions apply: any products outside the \'Holiday Photo Cards\' or \'Holiday Address Labels\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Gifts for Girl Friends products with offer code "THANKFUL30". Certain exclusions apply: any products outside the \'Gifts for Girlfriends\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />',
		'*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Holiday Photo Cards with offer code "CIDER30". Certain exclusions apply: any products outside the \'Holiday Photo Cards\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive 30% off all stamps with offer code "FROSTY14."  Standard retail price of stamp must be $40 or more.  Embossers, stamp refills and alignment tools not included. This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Receive one free set of 120 address labels with the purchase of any holiday photo cards with  offer code "PUMPKIN14." Certain exclusions apply: any products outside the \'Holiday Photo Cards\' or \'Holiday Address Labels\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST.  Save 30% off Gifts for Girl Friends products with offer code "THANKFUL30". Certain exclusions apply: any products outside the \'Gifts for Girlfriends\' category.  This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />*Limited time offer valid through November 23 at 11:55 PM CST. Recieve one free set of 80 holiday gift tag labels with the purchase of $50 or more with offer code "JINGLEBELLS14". Certain exclusions apply: any products outside the \'Holiday Gift Tag Labels\' category. This offer may not be combined with any other offer or discount, and shipping fees and sales tax are separate. To prevent abuse, prices, specifications, and availability subject to change without notice from Expressionery.com.<br /><br />'
	]
	promoLegal.innerHTML = legal[i];
}

function addPromoCode() {
	promoCodes = ['CIDER30', 'FROSTY14', 'PUMPKIN14', 'THANKFUL30', 'JINGLEBELLS14' ];
	var currentPromoCode = promoCodes[i];
	promoCode[i].innerHTML = currentPromoCode;
}

function addInactiveClass() {
	promoItem[i].classList.add('inactive');
}

function showInactiveMessage(){
	var currentPromoItem = promoItem[i];
	//console.log(currentPromoItem);
	var hasInactiveMessage = currentPromoItem.getElementsByClassName( 'inactiveMessage' );
	var theInactiveMessage = inactiveMessage[i];
	var promoDate = promoDates[i];
	//console.log( promoDate );
	var promoTag = promoTags[i];

	promoTags[i].addEventListener('click', function() { 
		shake(promoTag);
		if ( window.getComputedStyle(theInactiveMessage).getPropertyValue('opacity') == 0 ) {
			createInactiveMessage(theInactiveMessage, promoDate);
			revealInactiveMessage(theInactiveMessage);
		}
	}, false);
};

function createInactiveMessage(theInactiveMessage, promoDate) {
	var node = theInactiveMessage;
	var textNode = '<p>Don\'t open until <span>11&ndash;' + promoDate + '&ndash;14</span></p>';
	node.innerHTML = textNode;
}

function revealInactiveMessage(theInactiveMessage) {
	var tl = new TimelineMax({delay:0.5});
	tl.from(theInactiveMessage, 0.25, {top: -50})
	.from(theInactiveMessage, 0.3, {opacity: 0}, 0.05)
	.to(theInactiveMessage, 0.3, {opacity: 1}, 0.05)
	.to(theInactiveMessage, 0.4, {opacity: 0, top: -50}, 3)
	.to(theInactiveMessage, 0.4, {top: 0})


}

function revealPromo() {
	var promoTag = promoTags[i];
	var tl = new TimelineMax({delay:0.5});
	tl.staggerTo(promoTag, 0.2, {top: -25 })
	.to(promoTag, 0.15, {top: -10 })
	.to(promoTag, 0.4, {top: -275 })
	.to(promoContainer, 0.3, {opacity: 1}, 0.3)
	promoTags[i].addEventListener('click', function() { shake(promoTag) }, false);
}

function shake(promoTag) {
	var angle = getRotation(promoTag);
	var tl = new TimelineMax({repeat:1, yoyo:true});
	tl.to(promoTag, .15, {rotation: angle+5 })
	.to(promoTag, .1, {rotation: angle-3 })
	.to(promoTag, .08, {rotation: angle+3 })
};

function getRotation(promoTag) {
	// calculations from: http://css-tricks.com/get-value-of-css-rotation-through-javascript/
	var el = promoTag;
	var st = window.getComputedStyle(el, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	         st.getPropertyValue("-moz-transform") ||
	         st.getPropertyValue("-ms-transform") ||
	         st.getPropertyValue("-o-transform") ||
	         st.getPropertyValue("transform") ||
	         "fail...";

	//console.log('Matrix: ' + tr);
	// rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

	var values = tr.split('(')[1];
	    values = values.split(')')[0];
	    values = values.split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];

	var scale = Math.sqrt(a*a + b*b);

	// arc sin, convert from radians to degrees, round
	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	return angle;
	// works!
	//console.log('Rotate: ' + angle + 'deg');
}


function showHide(legalContainer, allLegal) {
	
	console.log(legal)
	showHideTrigger.addEventListener('click', function () {
		var legal = legalContainer.offsetHeight;
		if ( legal == 0 ) {
			console.log(legal)
			var tl = new TimelineMax({ yoyo:true});
			tl.to(legalContainer, .3, {height: allLegal})
			showHideTrigger.innerHTML = "Hide Promotional Offer Details"
		} else if( legal <= allLegal ) {
			console.log(legal)
			var tl = new TimelineMax;
			tl.to(legalContainer, .3, {height: 0 });
			showHideTrigger.innerHTML = "Show Promotional Offer Details"
		}
		legal = legalContainer.offsetHeight;
	})

}