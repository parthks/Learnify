function hi(id) {
    console.log("hi with ", id);

    // if (id == 7) {
    //     window.top.location = "/images/represent";
    //     localStorage.setItem("appName", '0')
    // }

    if (id == 6) {
        window.top.location = "/magic";
        localStorage.setItem("appName", '0');
    }

    if (id == 8) {
        window.top.location = "/magic";
        localStorage.setItem("appName", 'Linear_Magic');
    }

    if (id == 9) {
        window.top.location = "/magic";
        localStorage.setItem("appName", 'Matrix_Magic');
    }

    if (id == 10) {
        window.top.location = "/magic";
        localStorage.setItem("appName", 'Digits_Magic');
    }

    if (id == 7){
        window.top.location = "/secrets";
        localStorage.setItem("appName", '0');
    }

    if (id == 11) {
        window.top.location = "/asciiart";
        localStorage.setItem("appName", '0');
    }

    if (id == 14 || id == 19) {
        alert("Sorry, not ready yet!");
    }




}
