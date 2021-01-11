def show_directions():
    directions = [ArrowNames.NORTH, ArrowNames.SOUTH]
    random_directions = []
    user_directions = [0]
    num_1 = randint(0,1)
    num_2 = randint(0,1)
    num_3 = randint(0,1)
    num_4 = randint(0,1)
    choose_direction_1 = num_1
    random_directions.append(choose_direction_1)
    choose_direction_2 = num_2
    random_directions.append(choose_direction_2)
    choose_direction_3 = num_3
    random_directions.append(choose_direction_3)
    choose_direction_4 = num_4
    random_directions.append(choose_direction_4)
    basic.show_arrow(directions[choose_direction_1], 500)
    basic.show_string("", 200)
    basic.show_arrow(directions[choose_direction_2], 500)
    basic.show_string("", 200)
    basic.show_arrow(directions[choose_direction_3], 500)
    basic.show_string("", 200)
    basic.show_arrow(directions[choose_direction_4], 500)
    basic.show_string("", 200)
    user_directions.remove(user_directions[0])
    while user_directions != random_directions:
        if input.button_is_pressed(Button.A):
            basic.show_arrow(ArrowNames.NORTH, 500)
            user_directions.append(0)
        if input.button_is_pressed(Button.B):
            basic.show_arrow(ArrowNames.SOUTH, 500)
            user_directions.append(1)
    basic.show_icon(IconNames.HAPPY)
            
input.on_button_pressed(Button.A, show_directions)


