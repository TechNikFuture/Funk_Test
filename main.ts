enum RadioMessage {
    message1 = 49434,
    Test = 2239
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("A")
    basic.showString("A")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("B")
    basic.showString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendNumber(0)
    basic.showString("B")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendNumber(2)
    basic.showNumber(2)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendNumber(3)
    basic.showNumber(3)
})
radio.setGroup(12)
radio.setTransmitPower(7)
