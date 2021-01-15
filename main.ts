let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 0 || bearing > 315) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})
