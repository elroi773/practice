from random import randint
a = randint(1,30)
print(a)

user_1input = input ("첫번째 숫자 입력 : ")
user_2input = input ("두번째 숫자 입력 : ")
user_3input = input ("세번째 숫자 입력 : ")
user_input_list = [user_1input,user_2input, user_3input]

from random import randint 
answer1 = randint(1,30)
answer2 = randint(1,30)
answer3 = randint(1,30)

answer_list = [answer1, answer2, answer3]
count = 0
#for a in (1,4):
if answer1 == user_1input:
    print(answer1 , user_1input , " 일치 ")
    count+=1
    if answer2 == user_2input:
        print(answer2, user_2input , " 일치")
        count += 1
        if answer3 == user_3input:
            print(answer3, user_3input , " 일치함")
            count += 1
print("총 ", count,"개의 항목이 일치함")