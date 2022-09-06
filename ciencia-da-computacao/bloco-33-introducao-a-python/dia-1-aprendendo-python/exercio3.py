def larger_name(list: list):
    result = ''
    for element in list:
        if len(element) > len(result):
            result = element
    print(result)

larger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
