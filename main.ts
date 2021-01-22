let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else if (bearing < 225 && bearing > 135) {
        basic.showString("S")
    } else {
        basic.showString("x")
    }
})
