$(document).ready(function(){
  var images=['https://farm6.staticflickr.com/5514/11050954554_4e5a83f81e_z.jpg',
            'https://farm8.staticflickr.com/7305/11239570883_20e7857e79_b.jpg',
            'https://farm8.staticflickr.com/7305/11146574435_d4b15ccce6_b.jpg',];
  var randomNum = Math.floor(Math.random() * images.length);
  var bgImg = 'url(' + images[randomNum] + ')';
  document.getElementById('header').style.backgroundImage = bgImg;
});
