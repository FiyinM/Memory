"""
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
"""


def show_directions():
    directions = [ArrowNames.NORTH, ArrowNames.SOUTH]
    choose_direction_1 = directions[randint(0,1)]
    choose_direction_2 = directions[randint(0,1)]
    choose_direction_3 = directions[randint(0,1)]
    choose_direction_4 = directions[randint(0,1)]
    basic.show_arrow(choose_direction_1, 500)
    basic.show_string("", 200)
    basic.show_arrow(choose_direction_2, 500)
    basic.show_string("", 200)
    basic.show_arrow(choose_direction_3, 500)
    basic.show_string("", 200)
    basic.show_arrow(choose_direction_4, 500)
    basic.show_string("", 200)
    while True:
        if input.button_is_pressed(Button.A):
            basic.show_arrow(ArrowNames.NORTH, 500)
        if input.button_is_pressed(Button.B):
                basic.show_arrow(ArrowNames.SOUTH, 500)


    

    
#input.on_button_pressed(Button.B, repeat_directions)

input.on_button_pressed(Button.A, show_directions)


