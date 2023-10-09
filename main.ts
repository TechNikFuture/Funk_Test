enum RadioMessage {
    message1 = 49434,
    Test = 2239
}
radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) == parseFloat("-654391920")) {
        basic.showString("L")
        if (radio.receivedPacket(RadioPacketProperty.SerialNumber) == parseFloat("1750929838")) {
            basic.showString("M")
        }
    }
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
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) == parseFloat("-654391920")) {
        basic.showString("L")
        if (radio.receivedPacket(RadioPacketProperty.SerialNumber) == parseFloat("1750929838")) {
            basic.showString("M")
        }
    }
    basic.showString(receivedString)
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
radio.setTransmitSerialNumber(true)
radio.setGroup(4)
radio.setTransmitPower(7)
