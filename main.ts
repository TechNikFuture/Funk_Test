enum RadioMessage {
    message1 = 49434,
    Test = 2239
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendNumber(1)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("A")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendNumber(0)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendNumber(2)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    radio.sendNumber(3)
})
radio.setGroup(4)
radio.setTransmitPower(7)
