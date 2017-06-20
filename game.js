 $(document).ready(function(){
 var config = {
    apiKey: "AIzaSyBAPGoRJGnSQPCcSZXOAl4l2YfXpdFYc-4",
    authDomain: "train-company.firebaseapp.com",
    databaseURL: "https://train-company.firebaseio.com",
    projectId: "train-company",
    storageBucket: "",
    messagingSenderId: "387990493978"
};
firebase.initializeApp(config);

    // Global variables
    //var dbRef = firebase.database();
    var userRef = firebase.database().ref();
    
    // selectors
       var tBody = $("tbody");
       var userName = $("#userName");
       var userRole = $("#userRole");
       var startDate = $("#startDate");
       var monthRate = $("#monthRate");


    // submit button click
    $(":submit").click(function(event){
      event.preventDefault();
      
      
        userRef.push({
                "userName": userName.val().trim(),
                "userRole": userRole.val().trim(),
                "startDate": startDate.val().trim(),
                "monthRate": monthRate.val().trim()
            });

            userName.val("");
            userRole.val("");
            startDate.val("");
            monthRate.val("");
    
    });

    userRef.on('child_added', function(snapshot){
         
        var currUser = snapshot.val();
        var tr = $("<tr id=" + snapshot.key + ">");
        tr.append("<td>" + currUser.userName + "</td>");
        tr.append("<td>" + currUser.userRole + "</td>");
        tr.append("<td>" + currUser.startDate + "</td>");
        tr.append("<td>" + "0" + "</td>");
        tr.append("<td>" + currUser.monthRate + "</td>");
        tr.append("<td>" + "0" + "</td>");
        
        tBody.append(tr);
    });


});