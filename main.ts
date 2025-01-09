enum RadioMessage {
    message1 = 49434
}
/**
 * Header
 */
/**
 * Body
 */
function sendmessage (text: string) {
    radio.setGroup(1)
    radio.sendString("01" + SendMessageDestination + "XX" + text + "XX" + "10")
}
input.onButtonPressed(Button.A, function () {
    sendmessage("hello   ")
})
radio.onReceivedString(function (receivedString) {
    messageDestination = "" + receivedString.charAt(2) + receivedString.charAt(3)
    if (messageDestination == Id) {
        RecievedMessageBody = "" + receivedString.charAt(6) + receivedString.charAt(7) + receivedString.charAt(8) + receivedString.charAt(9) + receivedString.charAt(10) + receivedString.charAt(11) + receivedString.charAt(12) + receivedString.charAt(13)
        basic.showString(RecievedMessageBody)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let RecievedMessageBody = ""
let messageDestination = ""
let SendMessageDestination = ""
let Id = ""
Id = "00"
SendMessageDestination = "00"
