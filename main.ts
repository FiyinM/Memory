input.onButtonPressed(Button.A, function show_directions() {
    let directions = [ArrowNames.North, ArrowNames.South]
    let random_directions = []
    let user_directions = [0]
    let num_1 = randint(0, 1)
    let num_2 = randint(0, 1)
    let num_3 = randint(0, 1)
    let num_4 = randint(0, 1)
    let choose_direction_1 = num_1
    random_directions.push(choose_direction_1)
    let choose_direction_2 = num_2
    random_directions.push(choose_direction_2)
    let choose_direction_3 = num_3
    random_directions.push(choose_direction_3)
    let choose_direction_4 = num_4
    random_directions.push(choose_direction_4)
    basic.showArrow(directions[choose_direction_1], 500)
    basic.showString("", 200)
    basic.showArrow(directions[choose_direction_2], 500)
    basic.showString("", 200)
    basic.showArrow(directions[choose_direction_3], 500)
    basic.showString("", 200)
    basic.showArrow(directions[choose_direction_4], 500)
    basic.showString("", 200)
    user_directions.removeElement(user_directions[0])
    while (user_directions != random_directions) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showArrow(ArrowNames.North, 500)
            user_directions.push(0)
        }
        
        if (input.buttonIsPressed(Button.B)) {
            basic.showArrow(ArrowNames.South, 500)
            user_directions.push(1)
        }
        
    }
    basic.showIcon(IconNames.Happy)
})
