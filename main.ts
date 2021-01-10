/** 
def repeat_directions():
    while True:
        def b_pressed():
            if input.button_is_pressed(Button.B):
                basic.show_arrow(ArrowNames.NORTH, 500)
        def shake():
            if input.is_gesture(Gesture.Shake):
                basic.show_arrow(ArrowNames.SOUTH, 500)
        input.on_button_pressed(Button.B, b_pressed)
        input.on_gesture(Gesture.Shake, shake)

 */
// input.on_button_pressed(Button.B, repeat_directions)
input.onButtonPressed(Button.A, function show_directions() {
    let directions = [ArrowNames.North, ArrowNames.South]
    let choose_direction_1 = directions[randint(0, 1)]
    let choose_direction_2 = directions[randint(0, 1)]
    let choose_direction_3 = directions[randint(0, 1)]
    let choose_direction_4 = directions[randint(0, 1)]
    basic.showArrow(choose_direction_1, 500)
    basic.showString("", 200)
    basic.showArrow(choose_direction_2, 500)
    basic.showString("", 200)
    basic.showArrow(choose_direction_3, 500)
    basic.showString("", 200)
    basic.showArrow(choose_direction_4, 500)
    basic.showString("", 200)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showArrow(ArrowNames.North, 500)
        }
        
        if (input.buttonIsPressed(Button.B)) {
            basic.showArrow(ArrowNames.South, 500)
        }
        
    }
})
