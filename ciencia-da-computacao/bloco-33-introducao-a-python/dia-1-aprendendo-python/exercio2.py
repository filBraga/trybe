def media(list: list):
    result = 0
    for element in list:
        result += element
    print(result/len(list))

media([1,2,3,4])
media([1,2,3,4,5])
media([10,20])
media([1,2,3,4])