// routing
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./sub-page/main.html",
    })
    .when("/raucu", {
      templateUrl: "./product-sub-page/raucu.html",
    })
    .when("/giavi", {
      templateUrl: "./product-sub-page/giavi.html",
    })
    .when("/traicay", {
      templateUrl: "./product-sub-page/traicay.html",
    })
    .when("/bestsale", {
      templateUrl: "./product-sub-page/bestsale.html",
    })
    .when("/new", {
      templateUrl: "./product-sub-page/new.html",
    })
    .when("/hotdeal", {
      templateUrl: "./product-sub-page/hotdeal.html",
    })
    .when("/silemap", {
      templateUrl: "./sub-page/silemap.html",
    })
    .when("/about", {
      templateUrl: "./sub-page/about.html",
    })
    .when("/info", {
      templateUrl: "./sub-page/info.html",
    })
    .when("/buy", {
      templateUrl: "./sub-page/buy.html",
    })
    .when("/ex1", {
      templateUrl: "./faq/ex1.html",
    })
    .when("/ex2", {
      templateUrl: "./faq/ex2.html",
    })
    .when("/ex3", {
      templateUrl: "./faq/ex3.html",
    });

});

//product cards
app.directive("giaviProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{giavi.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{giavi.name}}<br><span>{{giavi.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{giavi.id}}>See More</a>\
      </li>\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{giavi.id}}>Add</a>\
      </li>\
    </ul>\
  </div>',
  };
});


app.directive("traicayProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{traicay.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{traicay.name}}<br><span>{{traicay.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{traicay.id}}>See More</a>\
      </li>\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{traicay.id}}>Add</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("raucuProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{raucu.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{raucu.name}}<br><span>{{raucu.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{raucu.id}}>See More</a>\
      </li>\
      <li >\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{raucu.id}}>Add </a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("bestsaleProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{bestsale.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{bestsale.name}}<br><span>{{bestsale.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{bestsale.id}}>See More</a>\
      </li>\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{bestsale.id}}>Add</a>\
      </li>\
    </ul>\
  </div>',
  };
});

app.directive("newProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{new.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{new.name}}<br><span>{{new.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{new.id}}>See More</a>\
      </li>\
      <li>\
      <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{new.id}}>Add</a>\
    </li>\
    </ul>\
  </div>',
  };
});

app.directive("hotdealProductCard", function () {
  return {
    restrict: "AE",
    template:
      '<div class="slave">\
    <div class=" content d-flex justify-content-center">\
      <div class="imgBx">\
        <img\
          src={{hotdeal.link1}}\
          alt="" class="news-slave__image rounded">\
      </div>\
      <div class="contentBx">\
        <h3>{{hotdeal.name}}<br><span>{{hotdeal.state}}</span></h3>\
      </div>\
    </div>\
    <ul class="sci">\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{hotdeal.id}}>See More</a>\
      </li>\
      <li>\
        <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={{hotdeal.id}}>Add</a>\
      </li>\
    </ul>\
  </div>',
  };
});


app.filter('bestSeller', function () {
  return function (items) {
    var best = 0;
    var temp = 0;
    filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var amount = item.amount;
      if (amount > best) {
        best = amount;
        temp = i;
      }
    }
    filtered.push(items[temp]);
    return filtered;
  }
});

app.filter("myFilter", function () {
  return function (items, min, max) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var price = item.price;
      if (price >= min && price <= max) {
        filtered.push(item);
      }
    }
   
    return filtered;
  }
})

app.controller("myCtrl", function ($scope, $location, $http) {
  $scope.min = 0;
  $scope.max = 250;
  

  $scope.re = /^[a-zA-Z]\w{3,14}$/;
  $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
  $http.get("js/giavi.json").then(function (response) {
    $scope.giavis = response.data.giavi;
  });
  $http.get("js/raucu.json").then(function (response) {
    $scope.raucus = response.data.raucu;
  });
  $http.get("js/traicay.json").then(function (response) {
    $scope.traicays = response.data.traicay;
  });
  $http.get("js/bestsale.json").then(function (response) {
    $scope.bestsales = response.data.bestsale;
  });
  $http.get("js/new.json").then(function (response) {
    $scope.news = response.data.new;
  });
  $http.get("js/hotdeal.json").then(function (response) {
    $scope.hotdeals = response.data.hotdeal;
  });
  $http.get("js/bag.json").then(function (response) {
    $scope.bagUrls = response.data.bag;
  });
  $scope.delete = function (id) {
    for (let index = 0; index < $scope.bagUrls.length; index++) {
      const element = $scope.bagUrls[index];
      if (parseInt(element.id) == parseInt(id)) {
        $scope.bagUrls.splice(index, 1);
        break;
      }
    }
  };
  $scope.getTotal = function (int) {
    var total = 0;
    angular.forEach($scope.bagUrls, function (el) {
      total += el[int];
    });
    return total;
  };
  //Nav highlighter
  $scope.$on("$routeChangeSuccess", function () {
    $scope.getActiveClass();
  });
  $scope.getActiveClass = function () {
    var test = $location.absUrl().split("/");
    $scope.weburl = $location.absUrl().split("/").pop();
    $(".nav-link").removeClass("active");
    if ($scope.weburl == "" || $scope.weburl == "#%2F!") {
      $(".home").addClass("active");
    } else if (
      $scope.weburl == "traicay" ||
      $scope.weburl == "raucu" ||
      $scope.weburl == "giavi" ||
      $scope.weburl == "bestsale" ||
      $scope.weburl == "new" ||
      $scope.weburl == "hotdeal" 
    ) {
      $(".products").addClass("active");
    } else if ($scope.weburl == "silemap") {
      $(".silemap").addClass("active");
    } else if ($scope.weburl == "about") {
      $(".about").addClass("active");
    } else if ($scope.weburl == "info") {
      $(".info").addClass("active");
    } else if ($scope.weburl == "buy") {
      $(".buy").addClass("active");
    } else if (
      $scope.weburl == "ex1" ||
      $scope.weburl == "ex2" ||
      $scope.weburl == "ex3"
    ) {
      $(".silemap").addClass("active");
    }
  };
});

// appointment form
$(document).ready(function () {
  var the_terms = $("#the-terms");
  the_terms.click(function () {
    if ($(this).is(":checked")) {
      $("#submitBtn").removeAttr("disabled");
    } else {
      $("#submitBtn").attr("disabled", "disabled");
    }
  });
});
function ap() {
  var a = $("#first_name").val();
  var b = $("#last_name").val();
  var c = $("#email_addr").val();
  var d = $("#inputPhone").val();
  if  ($("#flexRadio3").prop("checked", true)) {
    var g = "Ho Chi Minh";
  }
  var i = $("#date").val();
  var h = $("#time").val();
  if (a != 0 && b != 0 && c != 0 && d != 0 && h != 0) {
    alert(
      "Set a successful appointment" 

    );
  }
}

$(document).ready(function () {
  var the_terms1 = $("#the-terms1");
  the_terms1.click(function () {
    if ($(this).is(":checked")) {
      $("#submitbuy").removeAttr("disabled");
    } else {
      $("#submitbuy").attr("disabled", "disabled");
    }
  });
});

function app() {
  var a = $("#card").val();
  var b = $("#expi").val();
  var c = $("#code").val();
  var d = $("#coupon").val();
  var i = $("#name2").val();
  var g = $("#address2").val();
  var h = $("#inputPhone").val();
  if (a != 0 && b != 0 && c != 0 && d != 0 && h != 0 && i != 0 && g != 0) {
    alert(
      "Order Successfully" 

    );
  }
}

$(document).ready(function () {
  var the_terms2 = $("#the-terms2");
  the_terms2.click(function () {
    if ($(this).is(":checked")) {
      $("#enter").removeAttr("disabled");
    } else {
      $("#enter").attr("disabled", "disabled");
    }
  });
});


function appp() {
  var a = $("#abc1").val();
  var b = $("#abc2").val();
    if (a != 0 && b != 0 ) {
    alert(
      "Log in Successfully." 
    );
  }
}



//comments
$("#commentbutton").click(function () {
  var cname = $("#commentname").val();
  var comment = $("#comments").val();
  if (comment.length != 0 && cname.length != 0) {
    $("#commentsection").prepend(
      '<div class="d-flex flex-start"> <img class="rounded-circle shadow-1-strong me-3" src="../img/ava3.png" alt="avatar" width="65" height="65" /> <div class="flex-grow-1 flex-shrink-1"> <div> <div class="d-flex justify-content-between align-items-center" > <p class="mb-1"> ' +
      cname +
      ' <span class="small">- 2 hours ago</span> </p> <label for="comments"><i class="bi bi-reply"></i>Reply</label> </div> <p class="small mb-0"> ' +
      comment +
      " </p> </div>"
    );
    $("#commentname").val("");
    $("#comments").val("");
  } else {
    alert("Please fill in your name and comment to add");
  }
});


