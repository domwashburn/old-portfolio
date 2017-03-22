'use strict';

var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('portfolioController', 
	function portfolioController($scope) {
		$scope.test = "this is a test";
		$scope.navHome = [
			{"title": "home", "url": "/#"},
			{"title": "portfolio", "url": "/#portfolio"},
			{"title": "snippets", "url": "/#snippets"},
			{"title": "about", "url": "/#about"},
			{"title": "contact", "url": "/#contact"}
		]
		$scope.nav = [
			{"title": "home", "url": "/"},
			{"title": "portfolio", "url": "/#portfolio"},
			{"title": "snippets", "url": "/#snippets"},
			{"title": "about", "url": "/#about"},
			{"title": "contact", "url": "/#contact"}
		]
		$scope.portfolio = {
			items: [
			{
			"title" : "ACC Top 40",
			"thumb" : "assets/images/acc-top-40--thumbnail.jpg",
			"thumbAlt" : "thumbnail Alt",
			"link" : "http://google.com"
			},
			{
			"title" : "title 2",
			"thumb" : "http://placehold.it/400x400",
			"thumbAlt" : "thumbnail Alt 2",
			"link" : "http://domwashburn.com"
			},
			]
		}
	}
)