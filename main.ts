function right () {
    pwm1 += 30
    if (pwm1 >= 255) {
        pwm1 = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm1 - 30
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    pwm1
    )
}
function left () {
    pwm1 += 30
    if (pwm1 >= 255) {
        pwm1 = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm1
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    pwm1 - 30
    )
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function go () {
    pwm1 = 150
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    120
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    120
    )
}
let pwm1 = 0
stop()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        go()
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
        right()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
        left()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
    }
})
